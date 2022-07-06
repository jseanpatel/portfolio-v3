import Mail from './mail.svg';
import Github from './github.svg';
import Facebook from './facebook.svg';
import Youtube from './youtube.svg';
import Linkedin from './linkedin.svg';
import Twitter from './twitter.svg';
import Resume from './resume.svg';
import Home from './home.svg';
import Projects from './projects.svg';
import Globe from './globe.svg';
import Switch from './switch.svg';
import Sun from './sun.svg';
import Moon from './moon.svg';

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  resume: Resume,
  home: Home,
  projects: Projects,
  globe: Globe,
  switch: Switch,
  sun: Sun,
  moon: Moon,
};

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (
    !href ||
    (kind === 'mail' &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-500 h-${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
