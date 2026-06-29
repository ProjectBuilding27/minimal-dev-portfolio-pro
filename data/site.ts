// Edit this file to customise the entire portfolio.

export const siteConfig = {
  name: 'Daniel Carter',
  role: 'Senior Full-Stack Engineer',
  tagline:
    'Building high-performance web applications with React, Next.js and TypeScript.',
  location: 'London, United Kingdom',
  email: 'hello@danielcarter.dev',
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/danielcarter',
    linkedin: 'https://linkedin.com/in/danielcarter',
    twitter: 'https://x.com/danielcarter',
  },
};

export const hero = {
  badge: 'Available for freelance projects',
  eyebrow: 'Senior Full-Stack Engineer',
  headline:
    'Building high-performance web applications with React, Next.js and TypeScript.',
  description:
    'Based in London, United Kingdom. I design and build reliable web applications, APIs and product experiences that feel fast, polished and easy to use.',
  primaryButton: {
    label: 'View Projects',
    href: '/projects',
  },
  secondaryButton: {
    label: 'Contact Me',
    href: '/contact',
  },
  codeCard: {
    filename: 'profile.ts',
    variable: 'developer',
    stack: 'Next.js + TypeScript',
    focus: 'Clean product engineering',
  },
  stat: {
    label: 'Projects shipped',
    value: '24+',
  },
};

export const sections = {
  projects: {
    eyebrow: 'Featured work',
    title: 'Projects built with care',
    description:
      'A curated selection of products, experiments and production-ready systems.',
  },
  skills: {
    eyebrow: 'Stack',
    title: 'A modern toolkit for shipping fast',
    description:
      'Built for developers who care about performance, maintainability and clean user experience.',
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Product-minded engineering',
    description:
      'A simple timeline layout for work history, freelance projects or career milestones.',
  },
  writing: {
    eyebrow: 'Writing',
    title: 'Notes on software, systems and shipping',
    description:
      'A clean blog preview section powered by simple content data.',
  },
};

export const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Tailwind CSS',
];

export const projects = [
  {
    title: 'LaunchFlow',
    description:
      'A SaaS platform for managing product launches, feature flags and customer feedback in one clean workspace.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    image: '/assets/launchflow.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'InvoicePilot',
    description:
      'Modern invoicing software for freelancers and agencies with recurring billing, client portals and analytics.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    image: '/assets/invoicepilot.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'HireTrack',
    description:
      'Applicant tracking software with interview scheduling, candidate notes and AI-powered hiring summaries.',
    tech: ['Next.js', 'OpenAI', 'Prisma', 'Vercel'],
    image: '/assets/hiretrack.png',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const experience = [
  {
    company: 'Northstar Labs',
    role: 'Senior Frontend Engineer',
    period: '2023 — Present',
    description:
      'Leading frontend architecture for high-performance SaaS products using React, Next.js and TypeScript.',
  },
  {
    company: 'StudioForge',
    role: 'Full-Stack Developer',
    period: '2021 — 2023',
    description:
      'Built polished websites, dashboards and automation tools for startups and growing businesses.',
  },
];

export const posts = [
  {
    slug: 'building-better-side-projects',
    title: 'Building Better Side Projects',
    excerpt:
      'A practical approach to shipping small software projects without overengineering.',
    date: '2026-01-15',
  },
  {
    slug: 'what-i-use',
    title: 'My Developer Setup',
    excerpt:
      'The tools, apps and workflows I use to build software productively.',
    date: '2026-02-02',
  },
];