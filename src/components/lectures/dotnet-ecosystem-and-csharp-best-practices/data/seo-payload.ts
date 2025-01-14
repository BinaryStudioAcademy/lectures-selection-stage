import { AuthorName } from '~/common/enums/enums';
import { SeoPayload, SeoLocalizationKey } from '~/common/types/types';
import { slugPayload } from './slug-payload';

const ua: SeoLocalizationKey = {
  author: AuthorName.IVAN_HEDZ,
  title: '.NET ecosystem and C# best practices',
  slug: slugPayload.ua,
  description:
    'Ivan makes an overview of <strong>.NET</strong> ecosystem, tell us deep insides about <strong>С#</strong> and to top it all off tells about clean code principals.',
  keywords: ['dotnet', 'ecosystem'],
  duration: '35 min',
  publishedAt: '2023-01-15T00:00:00',
  hiddenFromMainPage: true,
};
const en: SeoLocalizationKey = {
  author: AuthorName.IVAN_HEDZ,
  title: '.NET ecosystem and C# best practices',
  slug: slugPayload.en,
  description:
    'Ivan makes an overview of <strong>.NET</strong> ecosystem, tell us deep insides about <strong>С#</strong> and to top it all off tells about clean code principals.',
  keywords: ['dotnet', 'ecosystem'],
  duration: '25 min',
  publishedAt: '2023-01-15T00:00:00',
  hiddenFromMainPage: true,
};

const seoPayload: SeoPayload = { en, ua };

export { seoPayload };
