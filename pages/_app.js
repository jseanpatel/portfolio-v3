import '@/css/tailwind.css';
import '@/css/prism.css';

import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import Analytics from '@/components/analytics';
import LayoutWrapper from '@/components/LayoutWrapper';
import RSS from '@/components/Rss';
import { CommandProvider, CommandBar } from '@/components/CommandPalette';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <CommandProvider>
        <CommandBar />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </CommandProvider>
      <RSS />
    </ThemeProvider>
  );
}
