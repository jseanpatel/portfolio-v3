import Link from './Link';
import siteMetadata from '@/data/siteMetadata';
import SocialIcon from '@/components/social-icons';
import FooterLogo from '@/data/jacob-logo-footer.svg';

import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
  };

  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-10 space-x-4">
          <Link href="/">
            <FooterLogo className="cursor-pointer hover:opacity-75" />
          </Link>
        </div>
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="resume" href={siteMetadata.resume} size="6" />

          <SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size="6"
          />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.headerTitle[locale]}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div
            className={` ${locale === 'es' ? 'hidden sm:block' : ''}`}
          >{` • `}</div>
          <div className={` ${locale === 'es' ? 'hidden sm:block' : ''}`}>
            {siteMetadata.city}
          </div>
          {/* {locale !== 'es' && (
            <>
              <div>{` • `}</div>
              <div>{siteMetadata.city}</div>
            </>
          )} */}
        </div>
      </div>
    </footer>
  );
}
