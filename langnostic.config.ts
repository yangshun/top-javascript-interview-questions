import { ConfigType } from 'langnostic';

const config: ConfigType = {
  ai: {
    provider: 'google',
  },
  localeConfig: {
    source: 'en-US',
    target: ['zh-CN'],
  },
  groups: [
    {
      name: 'quiz-js',
      plugin: 'mdx',
      paths: [
        {
          source:
            './questions/can-you-offer-a-use-case-for-the-new-arrow-function-syntax-how-does-this-new-syntax-differ-from-other-functions/en-US.mdx',
          target:
            './questions/can-you-offer-a-use-case-for-the-new-arrow-function-syntax-how-does-this-new-syntax-differ-from-other-functions/{locale}.mdx',
        },
      ],
    },
  ],
};

export default config;
