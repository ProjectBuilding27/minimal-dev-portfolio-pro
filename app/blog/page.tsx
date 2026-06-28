import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { posts } from '@/data/site';

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Blog" title="Writing about software" description="MDX-ready blog index. Add more posts in data/site.ts or wire it to a CMS later." />
      <div className="space-y-5">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-3xl border border-white/10 p-6 transition hover:bg-white/[0.04]">
            <p className="text-sm text-zinc-500">{post.date}</p>
            <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
            <p className="mt-3 text-zinc-400">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
