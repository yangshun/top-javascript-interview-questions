import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import util from 'util';

const README_PATH_EN = 'README.md';

const readFileAsync = util.promisify(fs.readFile);

type QuestionMetadata = Readonly<{
  slug: string;
  importance: string;
  featured: boolean;
}>;
type QuestionItem = Readonly<{
  metadata: QuestionMetadata;
  title: string;
  locale: string;
  content: string;
  slug: string;
}>;

async function processQuestion(
  slug: string,
  locale: string = 'en-US',
): Promise<QuestionItem | null> {
  const [metadataFile, markdownFile] = await Promise.all([
    readFileAsync(path.join('./questions', slug, 'metadata.json')),
    readFileAsync(path.join('./questions', slug, locale + '.mdx')),
  ]);

  const metadata: QuestionMetadata = JSON.parse(String(metadataFile));
  const markdown = String(markdownFile);

  if (!metadata.featured) {
    return null;
  }

  const { data } = grayMatter(markdown);
  if (data?.title == null) {
    return null;
  }

  // Extract contents between the first `## TL;DR` and `---`.
  const content = markdown.match(/## TL;DR\n\n([\s\S]*?)---\n/);

  const tlDrPart = content?.[1];
  if (tlDrPart == null) {
    return null;
  }

  return {
    locale,
    metadata,
    title: data?.title,
    content: tlDrPart
      // Replace relative links with absolute links.
      .replace('](/', '](https://greatfrontend.com/')
      .trim(),
    slug,
  };
}

async function readQuestionsList() {
  const qnSlugs = fs
    .readdirSync('./questions', {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
  return qnSlugs;
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
  const tableOfContentsLines = ['| No. | Questions |', '| --- | --------- |'];

  qnList.forEach(({ title, slug }, index) =>
    tableOfContentsLines.push(`| ${index + 1} | [${title}](#${slug}) |`),
  );

  return tableOfContentsLines.join('\n');
}

function formatQuestion(qn: QuestionItem, index: number) {
  return `${index}. ### ${qn.title}

    <!-- Update here: /questions/${qn.slug}/${qn.locale}.mdx -->

${qn.content
  .split('\n')
  // Add indentation.
  .map((line) => '    ' + line)
  .join('\n')}

    <!-- Update here: /questions/${qn.slug}/${qn.locale}.mdx -->

    _Read a detailed version of the answer on [GreatFrontEnd](https://greatfrontend.com/questions/quiz/${
      qn.slug
    }) which contains more code samples and useful resources._

---
`;
}

async function generate() {
  const qns = await readQuestionsList();
  const qnItemList = await processQuestionList(qns);
  const qnsItemListSorted = qnItemList;
  const qnTableOfContents = formatTableOfContents(qnsItemListSorted);
  const qnAnswers = qnsItemListSorted
    .map((qnItem, index) => formatQuestion(qnItem, index + 1))
    .join('\n');

  const readmeFile = String(fs.readFileSync(README_PATH_EN));

  const updatedText = readmeFile
    .replace(
      /(<!-- TABLE_OF_CONTENTS:START -->)([\s\S]*?)(<!-- TABLE_OF_CONTENTS:END -->)/,
      `$1\n\n${qnTableOfContents}\n\n$3`,
    )
    .replace(
      /(<!-- QUESTIONS:START -->)([\s\S]*?)(<!-- QUESTIONS:END -->)/,
      `$1\n\n${qnAnswers}\n\n$3`,
    );

  fs.writeFileSync(README_PATH_EN, updatedText);
}

generate();
