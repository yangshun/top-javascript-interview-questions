export type QuestionMetadata = Readonly<{
  slug: string;
  ranking: number;
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
