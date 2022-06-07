import { useEffect } from 'react';

import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';

import useTranslation from 'next-translate/useTranslation';

export default function AuthorLayout({
  children,
  frontMatter,
  availableLocales,
}) {
  const { t } = useTranslation();

  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <>
      <PageSEO
        title={siteMetadata.title[locale]}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div className="">
        <div className="pt-6 pb-2 mt-4 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {t('home:greeting')}
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="pt-4 pb-8 text-lg prose dark:prose-dark max-w-none xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
