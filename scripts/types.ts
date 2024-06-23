export type QuestionMetadata = Readonly<{
  slug: string;
  published: boolean;
  ranking: number;
  level: 'basic' | 'intermediate' | 'advanced';
  importance: string;
  featured: boolean;
}>;

export type QuestionFrontmatter = Readonly<{
  title: string;
}>;

export type QuestionItem = Readonly<{
  metadata: QuestionMetadata;
  href: string;
  title: string;
  titleSlug: string;
  locale: string;
  content: string;
}>;
