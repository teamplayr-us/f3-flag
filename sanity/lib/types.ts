import type { PortableTextBlock } from '@portabletext/types';
import type { Image } from 'sanity';

export interface Author {
  name: string;
  image?: Image;
  bio?: PortableTextBlock[];
}

export interface Category {
  title: string;
  slug: string;
}

export interface PostListItem {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: Image;
  author?: Pick<Author, 'name' | 'image'>;
  categories?: Category[];
}

export interface Post extends PostListItem {
  body?: PortableTextBlock[];
  author?: Author;
}
