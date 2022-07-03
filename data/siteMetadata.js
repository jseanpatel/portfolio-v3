const siteMetadata = {
  title: {
    en: 'Jacob Patel - Developer Portfolio',
    es: 'Jacobo Patel Iglesias - Cartera de Desarrolladores',
  },
  author: { en: 'Jacob Patel', es: 'Jacobo Patel Iglesias' },
  city: 'Berkeley, California',
  headerTitle: { en: 'Jacob Patel', es: 'Jacobo Patel Iglesias' },
  headerTitleShortened: { en: 'Jacob Patel', es: 'Jacobo Patel' },
  // description: 'A blog created with Next.js and Tailwind.css',
  description: {
    en:
      "I'm a rising senior at the University of California, Berkeley studying computer science and education, with an emphasis in educational technology.",
    es:
      'Soy un estudiante de último año en la Universidad de California, Berkeley, que estudia informática y educación, con énfasis en tecnología educativa.',
  },
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://jseanpa.tel',
  siteRepo: 'https://github.com/jseanpatel/portfolio-v3',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'hello@jseanpa.tel',
  github: 'https://github.com/jseanpatel',
  twitter: 'https://twitter.com/jseanpatel',
  linkedin: 'https://www.linkedin.com/in/jseanpatel/',
  resume: 'https://drive.google.com/open?id=1zn7AY7H7qoi3dBHJk6UciWDOOvsibOyN',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'og:title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
};

module.exports = siteMetadata;
