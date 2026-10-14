import { businessInfo } from "@/lib/business-info";

export function FinalCallout() { return (
<section className="bg-slate-deep text-on-primary py-12 sm:py-16 lg:py-20 border-b border-white/[0.06]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
<span className="eyebrow text-peach-accent">
        SOUTHEAST NAMPA
      </span>
<h2 className="text-headline-lg-mobile sm:text-3xl lg:text-headline-lg font-headline-lg text-on-primary tracking-tight max-w-2xl mx-auto">
        Your next coffee stop is right here in Southeast Nampa.
      </h2>
<p className="text-body-lg font-body-lg text-outline-variant/85 max-w-xl mx-auto">
        Visit A&amp;J’s Bean Machine for friendly service and a refreshing drink for the road, workday, or afternoon break.
      </p>
<div className="pt-3 flex justify-center items-center">
<a className="btn btn-inverse px-7" href={businessInfo.mapsUrl} rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]" data-icon="directions">directions</span>
<span className="">Get Directions</span>
</a>
</div>
</div>
</section>
); }
