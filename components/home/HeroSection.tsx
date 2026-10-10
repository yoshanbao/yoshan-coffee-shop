import Link from "next/link";
import Image from "next/image";
import { businessInfo } from "@/lib/business-info";

export function HeroSection() { return (
<section className="relative overflow-hidden bg-canvas-white pt-10 pb-12 sm:py-16 lg:py-24 border-b border-border-hairline" id="hero">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

<div className="lg:col-span-7 flex flex-col justify-center space-y-6">

<div className="flex items-center gap-2">
<span className="px-2.5 py-1 bg-sand-surface-muted text-charcoal-muted rounded-lg text-label-caps font-label-caps uppercase tracking-wider font-bold">
              LOCAL COFFEE SHOP · NAMPA, IDAHO
            </span>
</div>

<h1 className="text-display-hero-mobile sm:text-5xl lg:text-display-hero leading-[1.35] sm:leading-[1.35] lg:leading-[1.35] font-display-hero text-espresso-ink tracking-tight">
            <span>Your friendly coffee stop in</span>{" "}
            <span className="box-decoration-clone inline px-1 sm:px-2 bg-peach-accent text-espresso-ink rounded-lg font-bold">
              Southeast Nampa.
            </span>
</h1>

<p className="text-body-lg font-body-lg text-charcoal-muted max-w-2xl leading-relaxed">
            Stop by A&amp;J’s Bean Machine for coffee, chai, matcha, infused Red Bull drinks, dirty sodas, and lemonade, served with a friendly local welcome.
          </p>

<div className="pt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
<a className="motion-control duration-300 ease-out px-6 py-3.5 bg-primary text-on-primary rounded-lg text-label-md font-label-md font-semibold hover:bg-studio-teal-deep active:scale-[0.98] transition-all inline-flex min-h-11 items-center justify-center gap-2" href={businessInfo.mapsUrl} rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]" data-icon="directions">directions</span>
<span className="">Get Directions</span>
</a>
<Link className="motion-control duration-300 ease-out px-6 py-3.5 bg-sand-surface border border-primary text-primary rounded-lg text-label-md font-label-md font-semibold hover:bg-sand-surface-muted active:scale-[0.98] transition-all inline-flex min-h-11 items-center justify-center gap-2" href="/menu">
<span className="">Explore the Menu</span>
<span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>

<div className="pt-6 border-t border-border-hairline flex flex-wrap items-center gap-6 text-label-caps font-label-caps uppercase tracking-wider text-charcoal-muted">
<div className="flex items-center gap-1.5">
<a href={businessInfo.reviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-bold text-primary underline underline-offset-4">Read Google reviews</a>
</div>
<span className="w-1 h-1 rounded-full bg-border-hairline hidden sm:block"></span>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[16px]" aria-hidden="true">schedule</span>
<span className="font-bold text-espresso-ink">{businessInfo.hours}</span>
</div>
<span className="w-1 h-1 rounded-full bg-border-hairline hidden sm:block"></span>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[16px]" data-icon="schedule">schedule</span>
<span>Visit us at <strong className="text-espresso-ink">3209 S Happy Valley Rd</strong></span>
</div>
</div>
</div>

<div className="mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none relative">

<div className="absolute -top-6 -right-6 w-full h-full bg-pale-mint rounded-xl -z-10 transform translate-x-3 translate-y-3"></div>
<div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-peach-accent opacity-90 -z-10"></div>

<div className="relative bg-canvas-white p-3 rounded-xl border border-border-hairline">
<div className="relative mx-auto aspect-[4/5] w-full max-w-[12.8rem] max-h-64 sm:max-w-64 sm:max-h-80 lg:max-w-none lg:max-h-none rounded-lg overflow-hidden bg-sand-surface">
<Image className="object-cover" alt="Iced Maple Morning Latte with caramel drizzle in an A&J’s Bean Machine cup" src="/images/maple-morning-latte.png" fill sizes="(max-width: 639px) 205px, (max-width: 1023px) 256px, (max-width: 1279px) 42vw, 480px" loading="eager" fetchPriority="high"/>

<div className="absolute bottom-3 left-3 bg-canvas-white border border-border-hairline px-3 py-1.5 rounded-lg text-label-caps font-label-caps uppercase tracking-wider text-espresso-ink font-semibold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-peach-accent"></span>
                Maple Morning Latte
              </div>
</div>
</div>
</div>
</div>
</div>
</section>
); }
