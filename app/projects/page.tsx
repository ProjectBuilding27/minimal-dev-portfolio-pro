import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { projects } from '@/data/site';

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Projects" title="Selected case studies" description="Replace these with your best work, side projects and client outcomes." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </main>
  );
}
