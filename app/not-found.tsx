import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto flex min-h-[55vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wider text-secondary">Page not found · 404</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Let’s find your next cup.</h1>
        <p className="mt-5 text-lg text-charcoal-muted">This page may have moved, or the link may be incomplete. Explore our menu or head back home.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/menu" className="navigation-control navigation-control-filled inline-flex min-h-11 items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white">Explore the menu</Link>
          <Link href="/" className="navigation-control navigation-control-outlined inline-flex min-h-11 items-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
