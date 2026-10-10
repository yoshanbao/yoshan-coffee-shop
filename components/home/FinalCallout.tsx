import { businessInfo } from "@/lib/business-info";

export function FinalCallout() { return (
<section className="bg-[#161817] text-on-primary py-12 sm:py-16 lg:py-24 border-b border-charcoal-muted">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
<span className="px-3 py-1 bg-pale-mint text-primary rounded-lg text-label-caps font-label-caps uppercase tracking-wider font-bold inline-block">
        SOUTHEAST NAMPA
      </span>
<h2 className="text-headline-lg-mobile sm:text-3xl lg:text-headline-lg font-headline-lg text-on-primary tracking-tight max-w-2xl mx-auto">
        Your next coffee stop is right here in Southeast Nampa.
      </h2>
<p className="text-body-lg font-body-lg text-outline-variant max-w-xl mx-auto leading-relaxed">
        Visit A&amp;J’s Bean Machine for friendly service and a refreshing drink for the road, workday, or afternoon break.
      </p>
<div className="pt-4 flex justify-center items-center">
<a className="motion-control duration-300 ease-out px-8 py-4 bg-canvas-white text-espresso-ink font-semibold rounded-lg hover:bg-sand-surface active:scale-[0.98] transition-all inline-flex min-h-11 items-center justify-center gap-2 text-label-md font-label-md" href={businessInfo.mapsUrl} rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]" data-icon="directions">directions</span>
<span className="">Get Directions</span>
</a>
</div>
</div>
</section>
); }
