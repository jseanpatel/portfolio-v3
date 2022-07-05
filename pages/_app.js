import '@/css/tailwind.css';
import '@/css/prism.css';

import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import Analytics from '@/components/analytics';
import LayoutWrapper from '@/components/LayoutWrapper';
import RSS from '@/components/Rss';
import CommandPallette from '@/components/CommandPallette';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CommandPallette />
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
      <RSS />
    </ThemeProvider>
  );
}
