import { businessInfo } from "@/lib/business-info";

export function AboutSection() { return (
<section className="bg-sand-surface py-12 sm:py-16 lg:py-24 border-b border-border-hairline" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mb-14">
<span className="px-2.5 py-1 bg-sand-surface-muted text-charcoal-muted rounded-lg text-label-caps font-label-caps uppercase tracking-wider font-bold inline-block mb-3">
          NEIGHBORHOOD ROOTS
        </span>
<h2 className="text-headline-lg-mobile sm:text-3xl lg:text-headline-lg font-headline-lg text-espresso-ink tracking-tight">
          Coffee served with friendly local service.
        </h2>
<p className="text-body-lg font-body-lg text-charcoal-muted mt-3">
          At A&amp;J’s Bean Machine, every order is met with welcoming staff, efficient preparation, and an easygoing atmosphere right on S Happy Valley Road.
        </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-canvas-white p-5 sm:p-6 lg:p-8 rounded-lg border border-border-hairline flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-pale-mint flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-[26px]" data-icon="sentiment_satisfied">sentiment_satisfied</span>
</div>
<h3 className="text-headline-sm font-headline-sm text-espresso-ink mb-3">
              Friendly Approachable Service
            </h3>
<p className="text-body-md font-body-md text-charcoal-muted leading-relaxed">
              Stop in for a friendly welcome and a drink made for your day.
            </p>
</div>
<div className="pt-6 mt-6 border-t border-border-hairline text-label-caps font-label-caps uppercase tracking-wider text-outline font-semibold">
            <a href={businessInfo.reviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-primary underline underline-offset-4">Read customer reviews on Google Maps</a>
          </div>
</div>

<div className="bg-canvas-white p-5 sm:p-6 lg:p-8 rounded-lg border border-border-hairline flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-sand-surface-muted flex items-center justify-center text-secondary mb-6">
<span className="material-symbols-outlined text-[26px]" data-icon="pin_drop">pin_drop</span>
</div>
<h3 className="text-headline-sm font-headline-sm text-espresso-ink mb-3">
              Convenient Southeast Nampa Location
            </h3>
<p className="text-body-md font-body-md text-charcoal-muted leading-relaxed">
              Situated right on S Happy Valley Rd, making it a frictionless neighborhood stop on your regular commute.
            </p>
</div>
<div className="pt-6 mt-6 border-t border-border-hairline text-label-caps font-label-caps uppercase tracking-wider text-outline font-semibold">
            3209 S Happy Valley Rd
          </div>
</div>

<div className="bg-canvas-white p-5 sm:p-6 lg:p-8 rounded-lg border border-border-hairline flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-pale-mint flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-[26px]" data-icon="savings">savings</span>
</div>
<h3 className="text-headline-sm font-headline-sm text-espresso-ink mb-3">
              Find a drink for your day
            </h3>
<p className="text-body-md font-body-md text-charcoal-muted leading-relaxed">
              Explore coffee, chai, matcha, infused Red Bull drinks, and sodas with sizes and prices listed on the menu.
            </p>
</div>
<div className="pt-6 mt-6 border-t border-border-hairline text-label-caps font-label-caps uppercase tracking-wider text-outline font-semibold">
            Explore the Menu
          </div>
</div>
</div>
</div>
</section>
); }
