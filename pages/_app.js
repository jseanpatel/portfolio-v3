import '@/css/tailwind.css';
import '@/css/prism.css';

import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import Analytics from '@/components/analytics';
import LayoutWrapper from '@/components/LayoutWrapper';
import RSS from '@/components/Rss';
import CommandPalette from '@/components/CommandPalette';
import { KBarProvider } from 'kbar';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CommandPalette />
      <Analytics />
      <KBarProvider>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </KBarProvider>
      <RSS />
    </ThemeProvider>
  );
}
