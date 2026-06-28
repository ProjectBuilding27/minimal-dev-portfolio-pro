import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6">
      <p className="text-brand-500">404</p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-zinc-400">The page you're looking for doesn't exist.</p>
      <Link href="/" className="mt-8 text-brand-500">Return home</Link>
    </main>
  );
}
