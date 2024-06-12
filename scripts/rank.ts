import fs from 'fs';
import path from 'path';
import util from 'util';
import { QuestionMetadata } from './types';

const readFileAsync = util.promisify(fs.readFile);

const ranks = {
  'explain-hoisting': 1,
  'what-are-the-differences-between-variables-created-using-let-var-or-const': 2,
  'what-is-the-difference-between-double-equal-and-triple-equal': 3,
  'what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue': 4,
  'explain-event-delegation': 5,
  'explain-how-this-works-in-javascript': 6,
  'describe-the-difference-between-a-cookie-sessionstorage-and-localstorage': 7,
  'describe-the-difference-between-script-async-and-script-defer': 8,
  'whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states': 9,
  'whats-the-difference-between-call-and-apply': 10,
  'explain-function-prototype-bind': 11,
  'what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor': 12,
  'explain-how-prototypal-inheritance-works': 13,
  'difference-between-function-person-var-person-person-and-var-person-new-person': 14,
  'explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function': 15,
  'whats-a-typical-use-case-for-anonymous-functions': 16,
  'what-are-the-various-ways-to-create-objects-in-javascript': 17,
  'what-is-a-closure-and-how-why-would-you-use-one': 18,
  'what-is-the-definition-of-a-higher-order-function': 19,
  'what-are-the-differences-between-es6-class-and-es5-function-constructors': 20,
  'describe-event-bubbling': 21,
  'describe-event-capturing': 22,
  'what-is-the-difference-between-mouseenter-and-mouseover-event': 23,
  'what-is-use-strict-what-are-the-advantages-and-disadvantages-to-using-it': 24,
  'explain-the-difference-between-synchronous-and-asynchronous-functions': 25,
  'what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks': 26,
  'explain-ajax-in-as-much-detail-as-possible': 27,
  'what-are-the-advantages-and-disadvantages-of-using-ajax': 28,
  'what-are-the-differences-between-xmlhttprequest-and-fetch': 29,
  'how-do-you-abort-a-web-request-using-abortcontrollers': 30,
  'what-are-javascript-polyfills-for': 31,
  'why-is-extending-built-in-javascript-objects-not-a-good-idea': 32,
  'why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it': 33,
  'explain-the-differences-between-commonjs-modules-and-es-modules': 34,
  'what-are-the-various-data-types-in-javascript': 35,
  'what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items': 36,
  'what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax': 37,
  'what-are-iterators-and-generators-and-what-are-they-used-for': 38,
  'explain-the-difference-between-mutable-and-immutable-objects': 39,
  'what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript': 40,
  'what-are-the-differences-between-map-set-and-weakmap-weakset': 41,
  'why-you-might-want-to-create-static-class-members': 42,
  'what-are-symbols-used-for': 43,
  'what-are-server-sent-events': 44,
  'what-are-javascript-object-property-flags-and-descriptors': 45,
  'what-are-javascript-object-getters-and-setters-for': 46,
  'what-are-proxies-in-javascript-used-for': 47,
  'what-tools-and-techniques-do-you-use-for-debugging-javascript-code': 48,
  'what-are-workers-in-javascript-used-for': 49,
  'how-does-javascript-garbage-collection-work': 50,
};

async function rankQuestion(dirName: string, locale: string = 'en-US') {
  const metadataPath = path.join('./questions', dirName, 'metadata.json');

  const [metadataFile] = await Promise.all([readFileAsync(metadataPath)]);

  const metadata: QuestionMetadata = JSON.parse(String(metadataFile));

  if (!ranks[metadata.slug]) {
    console.warn(`${metadataPath} does not have a rank`);
    return null;
  }

  const newMetadata = { ...metadata, ranking: ranks[metadata.slug] * 10 };

  fs.writeFileSync(metadataPath, JSON.stringify(newMetadata, null, 2) + '\n');
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

async function rankQuestionList(qns: string[]) {
  await Promise.all(qns.map((qnSlug) => rankQuestion(qnSlug)));
}

async function generate() {
  const qns = await readQuestionsList();
  await rankQuestionList(qns);
}

generate();
