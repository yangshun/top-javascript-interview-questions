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
    content: tlDrPart.trim(),
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

function formatQuestion(qn: QuestionItem) {
  return `## ${qn.title}

<!-- Source: /questions/${qn.slug}/${qn.locale}.mdx -->

${qn.content}

<!-- Source: /questions/${qn.slug}/${qn.locale}.mdx -->
`;
}

async function generate() {
  const qns = await readQuestionsList();
  const qnItemList = await processQuestionList(qns);
  const qnContents = qnItemList
    .map((qnItem) => formatQuestion(qnItem))
    .join('\n');

  const readmeFile = String(fs.readFileSync(README_PATH_EN));
  readmeFile;

  const regex = /(<!-- QUESTIONS:START -->)([\s\S]*?)(<!-- QUESTIONS:END -->)/;

  // Replace the content between the markers with the custom text
  const updatedText = readmeFile.replace(regex, `$1\n\n${qnContents}\n\n$3`);
  fs.writeFileSync(README_PATH_EN, updatedText);
}

generate();
