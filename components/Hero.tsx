import { Button } from '@/components/Button';
import { hero, siteConfig, skills } from '@/data/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[86vh] max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
            {hero.badge}
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
            {hero.eyebrow}
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={hero.primaryButton.href}>
              {hero.primaryButton.label}
            </Button>
            <Button href={hero.secondaryButton.href} variant="secondary">
              {hero.secondaryButton.label}
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.slice(0, 6).map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-4 font-mono text-sm">
                <p className="text-zinc-500">// {hero.codeCard.filename}</p>
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">
                    {hero.codeCard.variable}
                  </span>{' '}
                  <span className="text-zinc-500">=</span>{' '}
                  <span className="text-zinc-300">{'{'}</span>
                </p>
                <p className="pl-5 text-zinc-300">
                  name:{' '}
                  <span className="text-green-300">"{siteConfig.name}"</span>,
                </p>
                <p className="pl-5 text-zinc-300">
                  role:{' '}
                  <span className="text-green-300">"{siteConfig.role}"</span>,
                </p>
                <p className="pl-5 text-zinc-300">
                  stack:{' '}
                  <span className="text-green-300">
                    "{hero.codeCard.stack}"
                  </span>,
                </p>
                <p className="pl-5 text-zinc-300">
                  focus:{' '}
                  <span className="text-green-300">
                    "{hero.codeCard.focus}"
                  </span>
                </p>
                <p className="text-zinc-300">{'}'}</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-zinc-950/90 p-4 shadow-xl backdrop-blur">
            <p className="text-sm text-zinc-400">{hero.stat.label}</p>
            <p className="mt-1 text-3xl font-bold">{hero.stat.value}</p>
          </div>
        </div>
      </div>
    </section>
  );
}