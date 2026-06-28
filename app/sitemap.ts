import type { MetadataRoute } from 'next';
import { posts } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com';
  return [
    '', '/projects', '/blog', '/uses', '/contact',
    ...posts.map((post) => `/blog/${post.slug}`)
  ].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}
