import type { StructureResolver } from 'sanity/structure';

// Custom Studio desk structure: group content types sensibly.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
    ]);
