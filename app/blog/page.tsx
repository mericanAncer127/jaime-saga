import SectionContainer from '../components/layouts/section-container';
import { Posts } from '../components/posts';
import { getBlogPosts } from './utils';

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
};

export default function Page() {
  const posts = getBlogPosts();

  return (
    <SectionContainer>
      <section className="min-h-[calc(100vh-230px)] md:min-h-[calc(100vh-258px)]">
        <div className="pt-6 pb-6 md:pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Blog
          </h1>
        </div>
        <Posts posts={posts} />
      </section>
    </SectionContainer>
  );
}
