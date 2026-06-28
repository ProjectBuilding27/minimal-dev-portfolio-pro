import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({
  href,
  children,
  variant = 'primary',
}: ButtonProps) {
  const className =
    variant === 'primary'
      ? `
        inline-flex items-center justify-center
        rounded-full
        bg-brand-500
        px-6
        py-3
        text-sm
        font-semibold
        text-white
        shadow-lg shadow-brand-500/20
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:bg-brand-400
        hover:shadow-xl
        hover:shadow-brand-500/30
        active:translate-y-0
      `
      : `
        inline-flex items-center justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        px-6
        py-3
        text-sm
        font-semibold
        text-white
        backdrop-blur
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-brand-500/40
        hover:bg-white/[0.06]
      `;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}