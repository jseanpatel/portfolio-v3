/* eslint-disable jsx-a11y/no-onchange */
import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Logo from '@/data/jacob-logo.svg';
import Link from './Link';
import SectionContainer from './SectionContainer';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import CommandPaletteToggle from './CommandPaletteToggle';

import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const LayoutWrapper = ({ children }) => {
  const getFlag = { en: '🇺🇸', es: '🇪🇸' };
  const { t } = useTranslation();
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex justify-between py-10">
          <div>
            <Link href="/" aria-label="Jacob Patel - Developer Portfolio">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo className="hover:opacity-75 hover-pointer" />
                </div>
                {typeof siteMetadata.headerTitle[locale] === 'string' ? (
                  <>
                    <div className="hidden h-6 mb-2 text-2xl font-semibold xl:block">
                      {siteMetadata.headerTitle[locale]}
                    </div>
                    <div className="hidden h-6 mb-1 text-2xl font-semibold md:block xl:hidden">
                      {siteMetadata.headerTitleShortened[locale]}
                    </div>
                  </>
                ) : (
                  <div className="hidden h-6 text-2xl font-semibold md:block">
                    siteMetadata.headerTitle[locale]
                  </div>
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
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {t(`headerNavLinks:${link.title.toLowerCase()}`)}
                </Link>
              ))}
            </div>
            <select
              onChange={changeLanguage}
              defaultValue={locale}
              style={{ textAlignLast: 'center' }}
              className="text-lg tracking-wide text-gray-900 bg-transparent rounded-md dark:text-gray-100 text-shadow-sm"
            >
              {locales.map((e) => (
                <option className="" value={e} key={e}>
                  {getFlag[e]}
                </option>
              ))}
            </select>
            <ThemeSwitch />
            <CommandPaletteToggle />
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
