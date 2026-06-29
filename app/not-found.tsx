import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-brand-500">
          Error 404
        </p>

        <h1 className="text-7xl font-bold tracking-tight md:text-8xl">
          Lost in Space
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          The page you're looking for doesn't exist, has been moved,
          or was never here in the first place.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            href="/"
            className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400"
          >
            Go Home
          </Link>

          <Link
            href="/projects"
            className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 font-semibold text-white transition hover:border-brand-500/40"
          >
            View Projects
          </Link>

        </div>

      </div>

    </main>
  );
}