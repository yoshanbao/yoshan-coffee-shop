"use client";

import Link from "next/link";

export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto flex min-h-[55vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl" role="alert">
        <p className="text-sm font-bold uppercase tracking-wider text-secondary">A little interruption</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">We couldn’t load this page.</h1>
        <p className="mt-5 text-lg text-charcoal-muted">Try again in a moment. You can also return home and explore the site from there.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => retry()} className="navigation-control navigation-control-filled min-h-11 rounded-lg bg-primary px-6 py-3 font-semibold text-white">Try again</button>
          <Link href="/" className="navigation-control navigation-control-outlined inline-flex min-h-11 items-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
