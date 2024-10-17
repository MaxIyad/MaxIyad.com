import { type CollectionEntry } from 'astro:content';

export function sortItemsByDateDesc(itemA: CollectionEntry<'pages'>, itemB: CollectionEntry<'pages'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}
