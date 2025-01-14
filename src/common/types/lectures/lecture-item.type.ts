import { AuthorName } from '~/common/enums/enums';

type LectureItem = {
  slug: string;
  author: AuthorName;
  description: string;
  duration: string;
  publishedAt: string;
  title: string;
};

export { LectureItem };
