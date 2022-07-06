import * as React from 'react';
import { useRouter } from 'next/router';
import SocialIcon from '@/components/social-icons';
import siteMetadata from '@/data/siteMetadata';
import useTranslation from 'next-translate/useTranslation';

import {
  ActionId,
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  createAction,
  useMatches,
} from 'kbar';

const searchStyle = {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  background: 'rgb(28 28 29)',
  color: 'rgba(252 252 252 / 0.9))',
};

const animatorStyle = {
  maxWidth: '600px',
  width: '100%',
  background: 'rgb(28 28 29)',
  color: 'rgba(252 252 252 / 0.9)',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: 'rgb(0 0 0 / 50%) 0px 16px 70px',
};

const groupNameStyle = {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  opacity: 0.5,
};

const App = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const { t } = useTranslation();

  const navigationSection = t('headerNavLinks:navigation');
  const socialsSection = t('headerNavLinks:social');
  const otherSection = t('headerNavLinks:other');

  const initialActions = [
    // SECTION: NAVIGATION
    {
      id: 'homeAction',
      name: t('headerNavLinks:home'),
      shortcut: ['h'],
      keywords: 'back landing',
      section: navigationSection,
      perform: () => router.push('/'),
      icon: <SocialIcon kind="home" href={'/'} size="5" />,
      subtitle: siteMetadata.headerTitle[locale],
    },
    {
      id: 'projectsAction',
      name: t('headerNavLinks:projects'),
      shortcut: ['p', 'r'],
      keywords: 'work publications websites',
      section: navigationSection,
      perform: () => router.push('/projects'),
    },
    {
      id: 'blogAction',
      name: t('headerNavLinks:blog'),
      shortcut: ['b', 'l'],
      keywords: 'posts travel spain',
      section: navigationSection,
      perform: () => router.push('/blog'),
    },
    {
      id: 'tagsAction',
      name: t('headerNavLinks:tags'),
      shortcut: ['t', 'g'],
      keywords: 'hashtags',
      section: navigationSection,
      perform: () => router.push('/tags'),
    },
    {
      id: 'aboutAction',
      name: t('headerNavLinks:about'),
      shortcut: ['a', 'b'],
      keywords: 'information biography',
      section: navigationSection,
      perform: () => router.push('/about'),
    },
    // SECTION: SOCIAL
    {
      id: 'resumeAction',
      name: t('social:resume'),
      shortcut: ['r', 'e'],
      keywords: 'cv curriculum',
      section: socialsSection,
      perform: () => router.push(siteMetadata.resume),
      icon: <SocialIcon kind="resume" href={siteMetadata.resume} size="5" />,
    },
    {
      id: 'emailAction',
      name: t('social:email'),
      shortcut: ['e', 'm'],
      keywords: 'gmail address inbox',
      section: socialsSection,
      perform: () => router.push(siteMetadata.email),
      icon: (
        <SocialIcon
          kind="mail"
          href={`mailto:${siteMetadata.email}`}
          size="5"
        />
      ),
    },
    {
      id: 'githubAction',
      name: 'GitHub',
      shortcut: ['g', 'h'],
      keywords: 'work publications websites',
      section: socialsSection,
      icon: <SocialIcon kind="github" href={siteMetadata.github} size="5" />,
      perform: () => router.push(siteMetadata.github),
    },
    {
      id: 'linkedinAction',
      name: 'LinkedIn',
      shortcut: ['l', 'i'],
      keywords: 'work publications biography',
      section: socialsSection,
      icon: (
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
      ),
      perform: () => router.push(siteMetadata.linkedin),
    },
    {
      id: 'twitterAction',
      name: 'Twitter',
      shortcut: ['t', 'w'],
      keywords: 'tweets takes',
      section: socialsSection,
      icon: <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />,
      perform: () => router.push(siteMetadata.twitter),
    },
    // SECTION: OTHER
    {
      id: 'privacyPolicyAction',
      name: t('headerNavLinks:privacyPolicy'),
      shortcut: ['p', 'o'],
      keywords: 'privacy statement',
      section: otherSection,
      icon: <SocialIcon kind="globe" href={'/'} size="5" />,
      perform: () => router.push('/'),
    },
  ];

  return (
    <KBarProvider
      options={{
        enableHistory: true,
      }}
      actions={initialActions}
    >
      <CommandBar />
    </KBarProvider>
  );
};

function CommandBar() {
  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator style={animatorStyle}>
          <KBarSearch style={searchStyle} />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}

function RenderResults() {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId}
          />
        )
      }
    />
  );
}

// eslint-disable-next-line react/display-name
const ResultItem = React.forwardRef(
  ({ action, active, currentRootActionId }, ref) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId,
      );
      // +1 removes the currentRootAction; e.g.
      // if we are on the "Set theme" parent action,
      // the UI should not display "Set theme… > Dark"
      // but rather just "Dark"
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        style={{
          padding: '12px 16px',
          background: active ? 'rgb(53 53 54' : 'transparent',
          borderLeft: `2px solid ${
            active ? 'rgba(252 252 252 / 0.9)' : 'transparent'
          }`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            fontSize: 14,
          }}
        >
          {action.icon && action.icon}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <span
                      style={{
                        opacity: 0.5,
                        marginRight: 8,
                      }}
                    >
                      {ancestor.name}
                    </span>
                    <span
                      style={{
                        marginRight: 8,
                      }}
                    >
                      &rsaquo;
                    </span>
                  </React.Fragment>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span style={{ fontSize: 12 }}>{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div
            aria-hidden
            style={{ display: 'grid', gridAutoFlow: 'column', gap: '4px' }}
          >
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  padding: '4px 6px',
                  background: 'rgba(0 0 0 / .1)',
                  borderRadius: '4px',
                  fontSize: 14,
                }}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  },
);

export default App;
