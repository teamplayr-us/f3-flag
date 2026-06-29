import { groq } from 'next-sanity';

// All published posts, newest first, for the blog index.
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "author": author->{name, image},
    "categories": categories[]->{title, "slug": slug.current}
  }
`;

// Just the slugs, for generateStaticParams.
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

// A single post by slug.
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    body,
    "author": author->{name, image, bio},
    "categories": categories[]->{title, "slug": slug.current}
  }
`;
