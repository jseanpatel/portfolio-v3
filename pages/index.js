import { PageSEO } from '@/components/SEO';

import siteMetadata from '@/data/siteMetadata';

import { MDXLayoutRenderer } from '@/components/MDXComponents';
import { getFileBySlug } from '@/lib/mdx';

const DEFAULT_LAYOUT = 'AuthorLayout';

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : '';
  const authorDetails = await getFileBySlug('index', 'content', otherLocale);
  return { props: { authorDetails, availableLocales: locales } };
}

export default function Home({ authorDetails, locale, availableLocales }) {
  const { mdxSource, frontMatter } = authorDetails;

  return (
    <>
      <PageSEO
        title={siteMetadata.title[locale]}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        availableLocales={availableLocales}
      />
    </>
  );
}
