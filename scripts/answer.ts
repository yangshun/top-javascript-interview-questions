import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import util from 'node:util';

import grayMatter from 'gray-matter';
import { QuestionMetadata } from './types';
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

dotenv.config();

const readFileAsync = util.promisify(fs.readFile);

function readQuestions(): ReadonlyArray<string> {
  const jsonFile = fs
    .readFileSync(path.join(process.cwd(), 'data', 'questions.json'))
    .toString();

  const records: Record<string, ReadonlyArray<string>> = JSON.parse(jsonFile);
  const qnSlugsAll: Array<string> = [];

  Object.values(records).forEach((qnSlugs) => {
    qnSlugsAll.push(...qnSlugs);
  });

  return qnSlugsAll;
}

const qnsSlugs = readQuestions();

async function syncQuestion(
  systemPrompt: string,
  qnSlug: string,
  locale: string = 'en-US',
) {
  const questionDirectory = path.join('./questions', qnSlug);
  const metadataPath = path.join(questionDirectory, 'metadata.json');
  const markdownPath = path.join(questionDirectory, `${locale}.mdx`);

  const [metadataFile, markdownFile] = await Promise.all([
    readFileAsync(metadataPath),
    readFileAsync(markdownPath),
  ]);

  const metadata: QuestionMetadata = JSON.parse(String(metadataFile));
  if (metadata.published) {
    return;
  }

  const { data } = grayMatter(markdownFile.toString());

  const timeStart = new Date();
  console.info(`Generating answer for "${data.title}"`);

  // Call OpenAI.
  const { text } = await generateText({
    model: openai('gpt-4o'),
    prompt: data.title,
    system: systemPrompt,
  });

  const timeEnd = new Date();
  console.info(
    `Generated answer for "${data.title}" in ${
      timeEnd.getTime() - timeStart.getTime()
    }ms`,
  );
  console.log('\n');

  const newMarkdownFile = markdownFile
    .toString()
    .replace('TODO_REPLACE_BODY', text);
  fs.writeFileSync(markdownPath, newMarkdownFile + '\n');

  const newMetadata = {
    ...metadata,
    published: true,
  };

  fs.writeFileSync(metadataPath, JSON.stringify(newMetadata, null, 2) + '\n');
}

async function syncQuestionList() {
  const res = await fetch(process.env.PROMPT_GIST!);
  const prompt = await res.text();

  for (let i = 0; i < qnsSlugs.length; i++) {
    const qnSlug = qnsSlugs[i];
    await syncQuestion(prompt, qnSlug);
  }
}

syncQuestionList();
