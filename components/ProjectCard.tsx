import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-brand-500/40 hover:shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Project Image */}
      <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={800}
          height={450}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-400">
          Featured
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold tracking-tight text-white">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-zinc-400">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            className="font-medium text-brand-400 transition hover:text-white"
          >
            Live Demo →
          </a>

          <a
            href={project.githubUrl}
            className="text-zinc-500 transition hover:text-white"
          >
            GitHub
          </a>
        </div>

        <div className="text-zinc-600 transition group-hover:text-brand-400">
          ↗
        </div>

      </div>

    </article>
  );
}