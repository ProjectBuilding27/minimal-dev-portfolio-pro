import Link from 'next/link';
import { siteConfig } from '@/data/site';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/uses', label: 'Uses' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-white shadow-glow transition group-hover:border-brand-500/40">
            {siteConfig.name
              .split(' ')
              .map((word) => word[0])
              .join('')
              .slice(0, 2)}
          </span>

          <div className="leading-tight">
            <p className="font-semibold tracking-tight text-white">
              {siteConfig.name}
            </p>
            <p className="hidden text-xs text-zinc-500 sm:block">
              {siteConfig.role}
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full border border-white/10 bg-white px-4 py-2 font-medium text-zinc-950 transition hover:bg-brand-500 hover:text-white"
          >
            Hire Me
          </Link>
        </div>
      </nav>
    </header>
  );
}