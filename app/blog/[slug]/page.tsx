import { notFound } from 'next/navigation';
import { posts } from '@/data/site';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm text-zinc-500">{post.date}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
      <div className="prose prose-invert mt-10 max-w-none prose-p:text-zinc-400 prose-headings:text-white">
        <p>{post.excerpt}</p>
        <h2>Start with the user</h2>
        <p>Write your article content here, or replace this route with a full MDX file loader.</p>
        <h2>Keep it practical</h2>
        <p>Good portfolio blogs are short, specific and useful. Share what you built, what you learned and what you would improve.</p>
      </div>
    </main>
  );
}
