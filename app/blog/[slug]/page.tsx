import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import PortableTextBody from '@/components/PortableTextBody';
import { sanityFetch } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';
import { postBySlugQuery, postSlugsQuery } from '@/sanity/lib/queries';
import type { Post } from '@/sanity/lib/types';

export const revalidate = 60;

function formatDate(date?: string) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function generateStaticParams() {
  const slugs = (await sanityFetch<string[]>(postSlugsQuery)) ?? [];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<Post>(postBySlugQuery, { slug });

  if (!post) {
    return { title: 'Post not found' };
  }

  const ogImage = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).url()
    : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await sanityFetch<Post>(postBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-muted hover:text-accent-deep"
      >
        ← Back to blog
      </Link>

      {post.categories && post.categories.length > 0 ? (
        <div className="mb-4 flex flex-wrap gap-2">
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

      <h1 className="font-display text-4xl leading-tight tracking-wide sm:text-5xl">
        {post.title}
      </h1>

      <div className="mt-5 flex items-center gap-3 text-sm text-muted">
        {post.author?.image ? (
          <Image
            src={urlForImage(post.author.image).width(80).height(80).url()}
            alt={post.author.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : null}
        <div>
          {post.author?.name ? (
            <div className="font-semibold text-ink">{post.author.name}</div>
          ) : null}
          {post.publishedAt ? (
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          ) : null}
        </div>
      </div>

      {post.mainImage ? (
        <div className="my-10 overflow-hidden rounded-xl">
          <Image
            src={urlForImage(post.mainImage).width(1600).height(900).url()}
            alt={post.title}
            width={1600}
            height={900}
            priority
            className="h-auto w-full"
          />
        </div>
      ) : null}

      <div className="mt-6">
        {post.body ? (
          <PortableTextBody value={post.body} />
        ) : (
          <p className="text-lg text-muted">This post has no content yet.</p>
        )}
      </div>
    </article>
  );
}
