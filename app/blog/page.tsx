import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { sanityFetch } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';
import { postsQuery } from '@/sanity/lib/queries';
import type { PostListItem } from '@/sanity/lib/types';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Training, mindset, and recruiting insights from F3 Flag — female flag football development in Dallas–Fort Worth.',
};

// Revalidate the index periodically (ISR).
export const revalidate = 60;

function formatDate(date?: string) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogIndexPage() {
  const posts = (await sanityFetch<PostListItem[]>(postsQuery)) ?? [];

  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <header className="mb-12">
        <h1 className="font-display text-5xl tracking-wide sm:text-6xl">
          The F3 Flag Blog
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Training, mindset, and recruiting insights for committed female flag
          football players and their families.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-lg border border-black/10 bg-white p-8 text-center text-muted">
          <p className="text-lg font-semibold text-ink">No posts yet.</p>
          <p className="mt-2">
            Publish your first post in the{' '}
            <Link href="/studio" className="text-accent-deep underline">
              Studio
            </Link>{' '}
            and it will appear here.
          </p>
        </div>
      ) : (
        <ul className="space-y-12">
          {posts.map((post) => (
            <li
              key={post._id}
              className="border-b border-black/10 pb-12 last:border-none"
            >
              <article className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  {post.mainImage ? (
                    <div className="mb-5 overflow-hidden rounded-lg">
                      <Image
                        src={urlForImage(post.mainImage).width(1200).height(630).url()}
                        alt={post.title}
                        width={1200}
                        height={630}
                        className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : null}

                  {post.categories && post.categories.length > 0 ? (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.categories.map((cat) => (
                        <span
                          key={cat.slug}
                          className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-deep"
                        >
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <h2 className="font-display text-3xl tracking-wide transition-colors group-hover:text-accent-deep sm:text-4xl">
                    {post.title}
                  </h2>

                  {post.excerpt ? (
                    <p className="mt-3 text-lg text-muted">{post.excerpt}</p>
                  ) : null}

                  <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                    {post.author?.name ? (
                      <span className="font-semibold text-ink">
                        {post.author.name}
                      </span>
                    ) : null}
                    {post.author?.name && post.publishedAt ? (
                      <span aria-hidden>·</span>
                    ) : null}
                    {post.publishedAt ? (
                      <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                      </time>
                    ) : null}
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
