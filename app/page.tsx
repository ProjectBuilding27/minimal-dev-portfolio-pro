import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { experience, posts, projects, sections, skills } from '@/data/site';

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow={sections.projects.eyebrow}
          title={sections.projects.title}
          description={sections.projects.description}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow={sections.skills.eyebrow}
              title={sections.skills.title}
              description={sections.skills.description}
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-zinc-950/60 px-5 py-4 text-zinc-300 transition hover:border-brand-500/40 hover:bg-white/[0.04]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow={sections.experience.eyebrow}
          title={sections.experience.title}
          description={sections.experience.description}
        />

        <div className="relative space-y-6 border-l border-white/10 pl-6">
          {experience.map((item) => (
            <div key={item.company} className="relative">
              <div className="absolute -left-[31px] top-7 h-3 w-3 rounded-full bg-brand-500 ring-8 ring-zinc-950" />

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7 transition hover:border-brand-500/40">
                <div className="flex flex-col justify-between gap-2 md:flex-row">
                  <h3 className="text-xl font-semibold">
                    {item.role} · {item.company}
                  </h3>

                  <p className="text-sm text-zinc-500">{item.period}</p>
                </div>

                <p className="mt-4 leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={sections.writing.eyebrow}
            title={sections.writing.title}
            description={sections.writing.description}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl border border-white/10 bg-zinc-950/60 p-7 transition hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white/[0.04]"
              >
                <p className="text-sm text-zinc-500">{post.date}</p>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {post.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {post.excerpt}
                </p>

                <p className="mt-6 font-medium text-brand-400 transition group-hover:text-white">
                  Read article →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}