export default function LoadingPage() {
  return (
    <main id="main-content" tabIndex={-1} aria-busy="true" className="mx-auto min-h-[60vh] max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <p role="status" className="mb-8 text-sm font-semibold text-secondary">Loading this page…</p>
      <div aria-hidden="true" className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5 motion-safe:animate-pulse">
          <div className="h-5 w-40 rounded bg-sand-surface-muted" />
          <div className="h-12 max-w-lg rounded bg-sand-surface-muted sm:h-16" />
          <div className="h-12 w-3/4 rounded bg-sand-surface-muted sm:h-16" />
          <div className="h-20 max-w-xl rounded bg-sand-surface" />
          <div className="h-11 w-44 rounded bg-secondary-fixed" />
        </div>
        <div className="aspect-[4/3] max-h-80 rounded-xl border border-border-hairline bg-sand-surface motion-safe:animate-pulse" />
      </div>
    </main>
  );
}
