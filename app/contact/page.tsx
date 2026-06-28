import { SectionHeading } from '@/components/SectionHeading';
import { siteConfig } from '@/data/site';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Contact" title="Let's build something" description="Use this page to point people to email, LinkedIn or a calendar booking link." />
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <p className="text-zinc-400">For project enquiries, collaborations or hiring, email me at:</p>
        <a href={`mailto:${siteConfig.email}`} className="mt-3 block text-2xl font-semibold text-brand-500">{siteConfig.email}</a>
      </div>
    </main>
  );
}
