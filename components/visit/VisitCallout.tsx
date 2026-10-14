import { businessInfo } from "@/lib/business-info";

export function VisitCallout() { return (
<section className="bg-slate-deep text-canvas-white border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-8">
<span className="text-label-caps font-label-caps uppercase tracking-wider text-gold-accent block mb-3">
              DRIVE-THRU &amp; WALK-UP · 3209 S HAPPY VALLEY RD
            </span>
<h2 className="text-headline-lg-mobile sm:text-3xl lg:text-headline-lg font-headline-lg text-canvas-white mb-4">
              We look forward to seeing you at the window.
            </h2>
<p className="text-body-lg font-body-lg text-outline-variant max-w-xl">
              Friendly service, freshly pulled espresso, and creative cold drinks await on South Happy Valley Road.
            </p>
</div>
<div className="lg:col-span-4 mt-8 md:mt-0 flex flex-col sm:flex-row lg:justify-end gap-4">
<a className="motion-control duration-300 ease-out bg-canvas-white text-espresso-ink hover:bg-secondary-fixed hover:text-secondary text-center px-8 py-3.5 rounded-lg text-label-caps font-label-caps uppercase tracking-wider font-bold transition-colors duration-150 active:scale-[0.98] flex items-center justify-center gap-2" href={businessInfo.mapsUrl} rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-base">directions</span>
<span className="">Get Directions</span>
</a>
</div>
</div>
</div>
</section>
); }
