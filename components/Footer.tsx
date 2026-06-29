import { footerCta, siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10">

          <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-400">
            {footerCta.eyebrow}
          </span>

          <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            {footerCta.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {footerCta.description}
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-10 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-brand-500 hover:text-white"
          >
            {footerCta.buttonLabel}
          </a>

        </div>

        <div className="flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-10 md:flex-row">

          <div>
            <h3 className="text-xl font-bold">{siteConfig.name}</h3>

            <p className="mt-2 max-w-sm text-zinc-500">
              Modern software engineer building beautiful web experiences with
              React, Next.js and TypeScript.
            </p>
          </div>

          <div className="flex gap-6 text-sm">

            <a
              href={siteConfig.social.github}
              className="text-zinc-400 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href={siteConfig.social.linkedin}
              className="text-zinc-400 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href={siteConfig.social.twitter}
              className="text-zinc-400 transition hover:text-white"
            >
              X
            </a>

          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-zinc-600">

          © {new Date().getFullYear()} {siteConfig.name} • Built with Next.js,
          TypeScript & Tailwind CSS

        </div>

      </div>
    </footer>
  );
}