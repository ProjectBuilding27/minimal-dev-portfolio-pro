import { SectionHeading } from '@/components/SectionHeading';

const items = [
  ['Editor', 'VS Code with Prettier, ESLint and GitHub Copilot'],
  ['Terminal', 'iTerm2 / Windows Terminal with a clean shell setup'],
  ['Design', 'Figma, Raycast, CleanShot and Tailwind UI references'],
  ['Hardware', 'Laptop, external monitor and mechanical keyboard']
];

export default function UsesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Uses" title="My setup" description="A simple page for sharing the tools and gear you use." />
      <div className="space-y-4">
        {items.map(([title, description]) => (
          <div key={title} className="rounded-3xl border border-white/10 p-6">
            <h2 className="font-semibold">{title}</h2>
            <p className="mt-2 text-zinc-400">{description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
