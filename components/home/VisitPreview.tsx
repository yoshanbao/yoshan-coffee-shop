import { businessInfo } from "@/lib/business-info";
import { BusinessMap } from "@/components/BusinessMap";

export function VisitPreview() { return (
<section className="bg-canvas-white py-12 sm:py-16 lg:py-24 border-b border-border-hairline" id="visit">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-7 space-y-6">
<span className="px-2.5 py-1 bg-sand-surface-muted text-charcoal-muted rounded-lg text-label-caps font-label-caps uppercase tracking-wider font-bold inline-block">
            LOCATION &amp; SERVICE
          </span>
<h2 className="text-headline-lg-mobile sm:text-3xl lg:text-headline-lg font-headline-lg text-espresso-ink tracking-tight">
            Visit A&amp;J’s Bean Machine
          </h2>
<p className="text-body-lg font-body-lg text-charcoal-muted">
            Located in Southeast Nampa, Idaho on S Happy Valley Rd. Stop by for friendly service and a drink made to order.
          </p>

<div className="p-6 bg-sand-surface rounded-lg border border-border-hairline space-y-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-[24px] mt-1" data-icon="location_on">location_on</span>
<div>
<span className="text-label-caps font-label-caps uppercase tracking-wider text-outline block mb-1">Physical Address</span>
<p className="text-title-md font-title-md font-bold text-espresso-ink">
                  {businessInfo.address}
                </p>
</div>
</div>
<div className="flex items-start gap-3 pt-3 border-t border-border-hairline">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5" data-icon="schedule">schedule</span>
<div>
<span className="text-label-caps font-label-caps uppercase tracking-wider text-charcoal-muted block mb-0.5">Hours</span>
<p className="text-body-md font-body-md text-charcoal-muted">{businessInfo.hours}<br/>{businessInfo.sundayHours}</p>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2 pt-2">
<span className="px-3 py-1.5 bg-pale-mint text-primary rounded-lg text-label-caps font-label-caps uppercase tracking-wider font-semibold inline-flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]" data-icon="storefront">storefront</span>
              Visit the stand
            </span>
<span className="px-3 py-1.5 bg-peach-accent text-espresso-ink rounded-lg text-label-caps font-label-caps uppercase tracking-wider font-bold inline-flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span>
              {businessInfo.hours}
            </span>
</div>

<div className="pt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
<a className="motion-control duration-300 ease-out px-6 py-3.5 bg-primary text-on-primary rounded-lg text-label-md font-label-md font-semibold hover:bg-studio-teal-deep active:scale-[0.98] transition-all inline-flex min-h-11 items-center justify-center gap-2" href={businessInfo.mapsUrl} rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]" data-icon="map">map</span>
<span className="">Open in Google Maps</span>
</a>
<a className="motion-control duration-300 ease-out px-6 py-3.5 bg-sand-surface border border-border-hairline text-espresso-ink rounded-lg text-label-md font-label-md font-semibold hover:bg-sand-surface-muted active:scale-[0.98] transition-all inline-flex min-h-11 items-center justify-center" href="#menu">
              View Menu
            </a>
</div>
</div>

<div className="lg:col-span-5">
<div className="bg-sand-surface p-4 sm:p-6 rounded-xl border border-border-hairline flex flex-col space-y-4">
<div className="aspect-[4/3] max-h-64 w-full sm:max-h-80 lg:max-h-none overflow-hidden rounded-lg border border-border-hairline bg-sand-surface-muted lg:aspect-square">
<BusinessMap />
</div>
<div className="p-4 bg-canvas-white rounded-lg border border-border-hairline">
<p className="text-body-sm font-body-sm text-charcoal-muted leading-relaxed">
                Find us at {businessInfo.address}. Open Google Maps for turn-by-turn directions.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>
); }
