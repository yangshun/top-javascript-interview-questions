import { slug } from 'github-slugger';
import { startCase } from 'lodash-es';
import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import util from 'util';
import { QuestionFrontmatter, QuestionItem, QuestionMetadata } from './types';
import { GITHUB_ORG, GITHUB_REPO } from './constants';
import questionsAll from '../data/questions.json';

const README_PATH_EN = 'README.md';

const readFileAsync = util.promisify(fs.readFile);

async function processQuestion(
  dirName: string,
  locale: string = 'en-US',
): Promise<QuestionItem | null> {
  const metadataPath = path.join('./questions', dirName, 'metadata.json');
  const localeFile = path.join('./questions', dirName, locale + '.mdx');

  const [metadataFile, markdownFile] = await Promise.all([
    readFileAsync(metadataPath),
    readFileAsync(localeFile),
  ]);

  const metadata: QuestionMetadata = JSON.parse(String(metadataFile));
  const markdown = String(markdownFile);

  const { data } = grayMatter(markdown);
  const frontMatter = data as QuestionFrontmatter;

  const title = frontMatter.title;
  if (!title) {
    console.warn(`${localeFile} does not have title`);
    return null;
  }

  // Extract contents between the first `## TL;DR` and `---`.
  const content = markdown.match(/## TL;DR\n\n([\s\S]*?)---\n/);

  const tlDrPart = content?.[1];
  if (tlDrPart == null) {
    return null;
  }

  // TODO: use a more robust check for headings.
  if (tlDrPart.includes('###')) {
    throw `${localeFile}'s TL;DR contains headings`;
  }

  return {
    locale,
    metadata,
    href: `https://greatfrontend.com/questions/quiz/${metadata.slug}`,
    title,
    titleSlug: slug(title),
    content: tlDrPart
      // Replace relative links with absolute links.
      .replace('](/', '](https://greatfrontend.com/')
      .trim(),
  };
}

async function readQuestionsList() {
  const qnSlugs = fs
    .readdirSync('./questions', {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return await Promise.all(
    qnSlugs.map(async (qnSlug) => {
      const metadataPath = path.join('./questions', qnSlug, 'metadata.json');

      const metadataFile = await readFileAsync(metadataPath);
      const metadata: QuestionMetadata = JSON.parse(String(metadataFile));
      if (qnSlug !== metadata.slug) {
        throw `Mismatch in directory and slug: "${qnSlug}" vs "${metadata.slug}"`;
      }

      return metadata;
    }),
  );
}

async function processQuestionList(qns: string[]) {
  const questionObjectsIncludingNull = await Promise.all(
    qns.map((qnSlug) => processQuestion(qnSlug)),
  );

  return questionObjectsIncludingNull.flatMap((item) =>
    item != null ? [item] : [],
  );
}

function formatTableOfContents(qnList: QuestionItem[]) {
  const tableOfContentsLines = [
    '| No. | Questions | Level |',
    '| --- | :-- | :-- |',
  ];

  qnList.forEach(({ metadata, title, titleSlug }, index) =>
    tableOfContentsLines.push(
      `| ${index + 1} | [${title}](#${titleSlug}) | ${startCase(
        metadata.level,
      )} |`,
    ),
  );

  return tableOfContentsLines.join('\n');
}

function formatQuestion(
  qn: QuestionItem,
  index: number,
  tableOfContentsAnchor: string,
  onGFE: boolean = true,
) {
  return `### ${qn.title}

<!-- Update here: /questions/${qn.metadata.slug}/${qn.locale}.mdx -->

${qn.content
  .split('\n')
  // Add indentation.
  // .map((line) => '    ' + line)
  .join('\n')}

<!-- Update here: /questions/${qn.metadata.slug}/${qn.locale}.mdx -->

<br>
    ${
      onGFE
        ? `
> Read the [detailed answer](${qn.href}) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.
`
        : ''
    }
[Back to top ↑](#${tableOfContentsAnchor}) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/${GITHUB_ORG}/${GITHUB_REPO}/edit/main/questions/${
    qn.metadata.slug
  }/${qn.locale}.mdx)

<br>
`;
}

type Options = Readonly<{
  sortByRanking: boolean;
  showLinkToGFE: boolean;
  tableOfContentsAnchor: string;
  tocStart: string;
  tocEnd: string;
  qnsStart: string;
  qnsEnd: string;
}>;

async function generateList(qns: string[], options: Options) {
  const {
    tableOfContentsAnchor,
    tocStart,
    tocEnd,
    qnsStart,
    qnsEnd,
    showLinkToGFE,
    sortByRanking,
  } = options;
  const qnItemListValue = await processQuestionList(qns);
  const qnItemList = qnItemListValue.slice();

  if (sortByRanking) {
    qnItemList.sort((a, b) => a.metadata.ranking - b.metadata.ranking);
  }
  const qnTableOfContents = formatTableOfContents(qnItemList);
  const qnAnswers = qnItemList
    .map((qnItem, index) =>
      formatQuestion(qnItem, index + 1, tableOfContentsAnchor, showLinkToGFE),
    )
    .join('\n');

  const readmeFile = String(fs.readFileSync(README_PATH_EN));

  const tocRegex = new RegExp(
    `(<!-- ${tocStart} -->)([\\s\\S]*?)(<!-- ${tocEnd} -->)`,
  );
  const qnsRegex = new RegExp(
    `(<!-- ${qnsStart} -->)([\\s\\S]*?)(<!-- ${qnsEnd} -->)`,
  );

  const updatedText = readmeFile
    .replace(tocRegex, `$1\n\n${qnTableOfContents}\n\n$3`)
    .replace(qnsRegex, `$1\n\n${qnAnswers}\n\n$3`);

  fs.writeFileSync(README_PATH_EN, updatedText);
}

async function generateBulletList(
  qns: string[],
  options: Readonly<{
    qnsStart: string;
    qnsEnd: string;
  }>,
) {
  const { qnsStart, qnsEnd } = options;
  const qnItemList = await processQuestionList(qns);
  const qnsItemListSorted = qnItemList.sort(
    (a, b) => a.metadata.ranking - b.metadata.ranking,
  );

  const qnAnswers = qnsItemListSorted
    .map(
      (qnItem, index) =>
        `${index + 1}. [${qnItem.title}](#${qnItem.titleSlug})`,
    )
    .join('\n');

  const readmeFile = String(fs.readFileSync(README_PATH_EN));

  const qnsRegex = new RegExp(
    `(<!-- ${qnsStart} -->)([\\s\\S]*?)(<!-- ${qnsEnd} -->)`,
  );

  const updatedText = readmeFile.replace(qnsRegex, `$1\n\n${qnAnswers}\n\n$3`);

  fs.writeFileSync(README_PATH_EN, updatedText);
}

async function generateAll() {
  const qns = await readQuestionsList();

  const featuredQns = qns.filter((qn) => qn.featured);
  await generateList(
    featuredQns.map((qn) => qn.slug),
    {
      tocStart: 'TABLE_OF_CONTENTS:TOP:START',
      tocEnd: 'TABLE_OF_CONTENTS:TOP:END',
      qnsStart: 'QUESTIONS:TOP:START',
      qnsEnd: 'QUESTIONS:TOP:END',
      tableOfContentsAnchor: 'table-of-contents-top-questions',
      showLinkToGFE: true,
      sortByRanking: true,
    },
  );

  const nonFeaturedQns = Object.values(questionsAll).flat();
  await generateList(nonFeaturedQns, {
    tocStart: 'TABLE_OF_CONTENTS:ALL:START',
    tocEnd: 'TABLE_OF_CONTENTS:ALL:END',
    qnsStart: 'QUESTIONS:ALL:START',
    qnsEnd: 'QUESTIONS:ALL:END',
    tableOfContentsAnchor: 'table-of-contents-all-questions',
    showLinkToGFE: false,
    sortByRanking: false,
  });

  const basicQns = qns.filter((qn) => qn.level === 'basic');
  await generateBulletList(
    basicQns.map((qn) => qn.slug),
    {
      qnsStart: 'QUESTIONS:BASIC:START',
      qnsEnd: 'QUESTIONS:BASIC:END',
    },
  );

  const intermediateQns = qns.filter((qn) => qn.level === 'intermediate');
  await generateBulletList(
    intermediateQns.map((qn) => qn.slug),
    {
      qnsStart: 'QUESTIONS:INTERMEDIATE:START',
      qnsEnd: 'QUESTIONS:INTERMEDIATE:END',
    },
  );

  const advancedQns = qns.filter((qn) => qn.level === 'advanced');
  await generateBulletList(
    advancedQns.map((qn) => qn.slug),
    {
      qnsStart: 'QUESTIONS:ADVANCED:START',
      qnsEnd: 'QUESTIONS:ADVANCED:END',
    },
  );
}

generateAll();
