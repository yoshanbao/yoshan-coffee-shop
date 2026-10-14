const reviews = [
  {
    initials: "AS",
    name: "Ash S",
    detail: "10 reviews",
    quote: "My first time there, the ladies running the store so friendly and the coffee is excellent!",
  },
  {
    initials: "TJ",
    name: "TJ Verdusco",
    detail: "6 reviews · 1 photo",
    quote: "Awesome staff, regular customer as they’re at my job pretty often ! They also have stamp cards! The Dirty Chai 10/10",
  },
  {
    initials: "AL",
    name: "Austin Lasater",
    detail: "Local Guide · 35 reviews",
    quote: "Didn’t know what to expect from a cookie dough chai but it was very good! I would definitely buy again.",
  },
] as const;

export function ReviewsSection() {
  return (
    <section id="reviews" className="border-b border-border-hairline bg-sand-surface py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <span className="eyebrow">Customer reviews</span>
        <h2 className="mt-3 max-w-[560px] font-editorial text-[clamp(2.25rem,3.1vw,3.5rem)] font-bold leading-[1.13] tracking-[-0.045em] text-espresso-ink">What our customers say.</h2>

        <div className="mt-7 grid overflow-hidden border border-border-hairline bg-white lg:grid-cols-3 xl:grid-cols-[200px_repeat(3,minmax(0,1fr))]">
          <div className="flex items-center gap-5 border-b border-border-hairline px-5 py-4 lg:col-span-3 xl:col-span-1 xl:flex-col xl:items-start xl:justify-center xl:gap-0 xl:border-b-0 xl:border-r xl:px-6">
            <strong className="font-editorial text-[56px] font-bold leading-none tracking-[-0.07em] text-espresso-ink">4.5</strong>
            <div>
              <span role="img" aria-label="4.5 out of 5 stars" className="block w-fit bg-[linear-gradient(90deg,#e8b83f_90%,#d5dad2_90%)] bg-clip-text text-[20px] leading-none tracking-[0.06em] text-transparent">★★★★★</span>
              <p className="mt-1 text-[14px] font-semibold text-espresso-ink">15 reviews</p>
            </div>
          </div>
          {reviews.map((review) => (
            <article key={review.name} className="flex flex-col border-b border-border-hairline px-5 py-5 last:border-b-0 lg:min-h-[220px] lg:border-b-0 lg:border-r lg:last:border-r-0 xl:px-6">
              <blockquote className="flex-1 text-[16px] leading-[1.55] text-espresso-ink">“{review.quote}”</blockquote>
              <div className="mt-5 flex items-center gap-3">
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pale-mint text-[11px] font-bold text-primary">{review.initials}</span>
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold leading-tight text-espresso-ink">{review.name}</p>
                  <p className="mt-1 text-[12px] leading-[1.4] text-charcoal-muted">{review.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
