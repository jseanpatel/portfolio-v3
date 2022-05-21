import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { PostFrontMatter } from 'types/PostFrontMatter';

import { getAllFilesFrontMatter } from '@/lib/mdx';

import siteMetadata from '@/data/siteMetadata';

import { PageSEO } from '@/components/SEO';

const MAX_DISPLAY = 5;

export const getStaticProps: GetStaticProps<{
  posts: PostFrontMatter[];
}> = async () => {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-48 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-16">
            Hi there, 👋 I&apos;m Jacob.
          </h1>
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-16">
            Welcome to my developer portfolio.
          </h1>
        </div>
      </div>
    </>
  );
}
