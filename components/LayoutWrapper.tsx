import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { ReactNode, useEffect, useState } from 'react';

import headerNavLinks from '@/data/headerNavLinks';
import Logo from '@/data/logo.svg';
import siteMetadata from '@/data/siteMetadata';

import Footer from './Footer';
import Link from './Link';
import MobileNav from './MobileNav';
import SectionContainer from './SectionContainer';
import ThemeSwitch from './ThemeSwitch';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  const { t } = useTranslation();

  const router = useRouter();

  const getEmoji = {
    en: '🇺🇲',
    es: '🇪🇸',
  };

  const { locale, locales, defaultLocale } = router;
  const [lang, setLang] = useState(locale);

  const changeLanguage = (e) => {
    // console.log('changing !!')
    // console.log(e)
    // console.log(e.target.value)
    setLang(e.target.value);
  };

  useEffect(() => {
    console.log('routing to : ', lang);
    router.asPath.includes('/tags')
      ? router.push('/tags/', '/tags/', { locale: lang })
      : router.push(router.asPath, router.asPath, { locale: lang });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <select
              onChange={changeLanguage}
              defaultValue={locale}
              style={{ textAlignLast: 'center' }}
              className="text-lg tracking-wide text-gray-900 bg-transparent dark:text-gray-100 text-shadow-sm"
            >
              {locales.map((e) => (
                <option
                  className="text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900"
                  value={e}
                  key={e}
                >
                  {getEmoji[e]}
                </option>
              ))}
            </select>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
