import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/lib/business-info";

/* Converted from aj_design/story_page/code.html. Static sections are React Server Components. */

export function StoryIntro() { return (
<section className="w-full bg-primary-strong text-white">
<div className="mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8 md:pt-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-gutter">

<div className="lg:col-span-8 space-y-4">
<div className="inline-flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-gold-accent"></span>
<p className="text-label-caps font-label-caps uppercase tracking-wider text-pale-mint font-bold">
            OUR STORY · A LOCAL COFFEE SHOP IN NAMPA
          </p>
</div>
<h1 className="text-display-hero-mobile sm:text-5xl lg:text-display-hero font-bold text-white mb-4 lg:mb-6">
          Rooted in Southeast Nampa.
        </h1>
<p className="font-body-lg text-body-lg text-white/80 max-w-2xl pt-2">
          At A&amp;J’s Bean Machine, the menu brings together coffee favorites and creative cold drinks at our neighborhood shop on South Happy Valley Road.
        </p>
</div>


</div>
</div>
</section>
); }

export function NeighborhoodSection() { return (
<section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 border-b border-border-hairline">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-gutter items-center">

<div className="lg:col-span-7 relative">
<div className="border border-border-hairline rounded-xl p-2 bg-sand-surface">
<div className="relative overflow-hidden rounded-lg aspect-[16/11]">
<Image className="object-cover" alt="Front of A&J’s Bean Machine with green siding, glass doors, hanging flowers, and white rocking chairs" src="/images/shop_house_front.jpg" loading="eager" fill sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) 58vw, 680px"/>
</div>
</div>
<div className="absolute -bottom-5 -right-3 lg:right-6 bg-secondary-fixed border border-border-hairline py-2.5 px-4 rounded-lg shadow-sm">
<p className="text-label-caps font-label-caps uppercase tracking-wider text-espresso-ink font-bold flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm text-secondary">location_on</span>
            Our shop in Southeast Nampa
          </p>
</div>
</div>

<div className="lg:col-span-5 space-y-6 lg:pl-4">
<span className="text-label-caps font-label-caps uppercase tracking-wider text-secondary font-bold inline-block px-2.5 py-1 bg-sand-surface-muted rounded">
          Come Find Us
        </span>
<h2 className="font-headline-lg text-headline-lg-mobile sm:text-3xl lg:text-headline-lg text-espresso-ink">
          The Heart of South Happy Valley Road
        </h2>
<p className="font-body-lg text-body-lg text-charcoal-muted">
          Our green storefront, hanging flowers, and white rocking chairs welcome you at 3209 S Happy Valley Road. Stop in for espresso, chai, matcha, infused Red Bull drinks, and sodas.
        </p>
<p className="font-body-md text-body-md text-charcoal-muted">
          Find our current hours, full address, and directions on the Visit Us page before you head over.
        </p>
<div className="pt-2 flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-border-hairline bg-sand-surface flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">local_cafe</span>
</div>
<div>
<h4 className="font-title-md text-title-md text-espresso-ink">A neighborhood coffee stop</h4>
<p className="font-body-sm text-body-sm text-charcoal-muted">Find us at 3209 S Happy Valley Rd, Nampa.</p>
</div>
</div>
</div>
</div>
</section>
); }

export function CraftPhilosophy() { return (
<section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 border-b border-border-hairline">
<div className="mb-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
<div className="max-w-2xl">
<span className="text-label-caps font-label-caps uppercase tracking-wider text-charcoal-muted font-bold inline-block mb-2">
        Behind the Cup
      </span>
<h2 className="font-headline-lg text-headline-lg-mobile sm:text-3xl lg:text-headline-lg text-espresso-ink">
        Our Craft Philosophy
      </h2>
<p className="font-body-lg text-body-lg text-charcoal-muted mt-3">
        From ground coffee ready for the espresso machine to the finishing touches on a cold drink, the details make each order feel personal.
      </p>
</div>
<figure className="overflow-hidden rounded-xl border border-border-hairline bg-sand-surface">
<div className="relative aspect-[4/3]">
<Image className="object-cover" alt="Fresh coffee grounds in an espresso portafilter beneath the grinder" src="/images/process.png" fill sizes="(max-width: 1024px) 100vw, 50vw"/>
</div>
<figcaption className="px-4 py-3 text-body-sm text-charcoal-muted">Coffee preparation at the shop.</figcaption>
</figure>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">

<article className="bg-sand-surface border border-border-hairline rounded-xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-primary transition-colors duration-150">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-slate-soft border border-border-hairline flex items-center justify-center text-slate-deep">
<span className="material-symbols-outlined text-xl">palette</span>
</div>
<span className="inline-block text-label-caps font-label-caps uppercase tracking-wider text-secondary font-bold">
            Pillar 01
          </span>
<h3 className="font-headline-sm text-headline-sm text-espresso-ink">
            Handcrafted with Care
          </h3>
<p className="font-body-md text-body-md text-charcoal-muted">
            The menu includes espresso drinks, spiced chai, matcha, infused Red Bull drinks, and sodas with a range of flavor combinations.
          </p>
</div>
<div className="pt-6 border-t border-border-hairline mt-6 flex flex-wrap items-center justify-between gap-2 text-charcoal-muted font-label-caps text-label-caps uppercase tracking-wider">
<span className="">Fresh Recipes</span>
<span className="text-primary font-bold">Made-to-Order</span>
</div>
</article>

<article className="bg-sand-surface border border-border-hairline rounded-xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-primary transition-colors duration-150">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-secondary-fixed border border-border-hairline flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-xl">volunteer_activism</span>
</div>
<span className="inline-block text-label-caps font-label-caps uppercase tracking-wider text-secondary font-bold">
            Pillar 02
          </span>
<h3 className="font-headline-sm text-headline-sm text-espresso-ink">
            Community-First Service
          </h3>
<p className="font-body-md text-body-md text-charcoal-muted">
            Stop by the South Happy Valley Road stand to ask about current drink options and customizations.
          </p>
</div>
<div className="pt-6 border-t border-border-hairline mt-6 flex flex-wrap items-center justify-between gap-2 text-charcoal-muted font-label-caps text-label-caps uppercase tracking-wider">
<span className="">South Nampa Locals</span>
<span className="text-primary font-bold">Neighborly</span>
</div>
</article>

<article className="bg-sand-surface border border-border-hairline rounded-xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-primary transition-colors duration-150">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-honey-surface border border-border-hairline flex items-center justify-center text-espresso-ink">
<span className="material-symbols-outlined text-xl">payments</span>
</div>
<span className="inline-block text-label-caps font-label-caps uppercase tracking-wider text-secondary font-bold">
            Pillar 03
          </span>
<h3 className="font-headline-sm text-headline-sm text-espresso-ink">
            Fair, Approachable Pricing
          </h3>
<p className="font-body-md text-body-md text-charcoal-muted">
            Drink sizes and prices are listed on the Menu page. Ask at the stand about current prices and seasonal offerings.
          </p>
</div>
<div className="pt-6 border-t border-border-hairline mt-6 flex flex-wrap items-center justify-between gap-2 text-charcoal-muted font-label-caps text-label-caps uppercase tracking-wider">
<span>Sizes &amp; Prices</span>
<span className="text-primary font-bold">View the Menu</span>
</div>
</article>
</div>
</section>
); }

export function DrinksStory() { return (
<section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 border-b border-border-hairline">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-gutter items-center">

<div className="lg:col-span-5 space-y-6">
<span className="text-label-caps font-label-caps uppercase tracking-wider text-on-secondary-fixed-variant font-bold inline-block px-2.5 py-1 bg-secondary-fixed rounded">
          From Our Menu
        </span>
<h2 className="font-headline-lg text-headline-lg-mobile sm:text-3xl lg:text-headline-lg text-espresso-ink">
          The Drinks We Stand Behind
        </h2>
<p className="font-body-lg text-body-lg text-charcoal-muted">
          There is more than one way to find your favorite here. Our menu moves from rich espresso drinks to creamy matcha and fruit-flavored infused Red Bull drinks. Seasonal specials bring new flavors into the mix.
        </p>

<div className="space-y-4 pt-2">
<div className="border-b border-border-hairline pb-3">
<div className="flex flex-wrap items-center justify-between gap-2">
<span className="font-title-md text-title-md text-espresso-ink font-semibold">Toasted Pumpkin Matcha</span>
<span className="text-label-caps font-label-caps bg-sand-surface px-2 py-0.5 rounded text-charcoal-muted uppercase">Seasonal</span>
</div>
<p className="font-body-sm text-body-sm text-charcoal-muted mt-1">Matcha with pumpkin and toasted marshmallow syrup, finished with marshmallow fluff.</p>
</div>
<div className="border-b border-border-hairline pb-3">
<div className="flex flex-wrap items-center justify-between gap-2">
<span className="font-title-md text-title-md text-espresso-ink font-semibold">Maple Morning Latte</span>
<span className="text-label-caps font-label-caps bg-honey-surface text-espresso-ink px-2 py-0.5 rounded uppercase">Espresso</span>
</div>
<p className="font-body-sm text-body-sm text-charcoal-muted mt-1">Espresso and milk with maple syrup and a caramel drizzle.</p>
</div>
<div className="pb-1">
<div className="flex flex-wrap items-center justify-between gap-2">
<span className="font-title-md text-title-md text-espresso-ink font-semibold">Autumn Spark</span>
<span className="text-label-caps font-label-caps bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-0.5 rounded uppercase">Energy</span>
</div>
<p className="font-body-sm text-body-sm text-charcoal-muted mt-1">Red Bull infused with orange and finished with cranberry juice.</p>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="border border-border-hairline rounded-xl overflow-hidden bg-sand-surface grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-7 p-6 bg-canvas-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-hairline">
<div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border-hairline mb-4">
<Image className="object-contain" alt="Iced Toasted Pumpkin Matcha topped with marshmallow fluff in an A&J’s Bean Machine cup" src="/images/toasted-pumpkin-matcha-landscape.png" fill sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) 33vw, 360px"/>
</div>
<div>
<span className="text-label-caps font-label-caps uppercase tracking-wider text-secondary font-bold">Featured Seasonal Drink</span>
<h4 className="font-title-md text-title-md text-espresso-ink mt-0.5">Toasted Pumpkin Matcha</h4>
<p className="font-body-sm text-body-sm text-charcoal-muted mt-1">A cool matcha drink with pumpkin, toasted marshmallow, and a soft marshmallow finish.</p>
</div>
</div>

<div className="lg:col-span-5 p-6 bg-slate-soft flex flex-col justify-between">
<div>
<span className="text-label-caps font-label-caps uppercase tracking-wider text-primary font-bold">
                In the Cup
              </span>
<h4 className="font-headline-sm text-headline-sm text-espresso-ink mt-2 mb-4">
                A seasonal favorite
              </h4>
<ul className="space-y-3 font-body-sm text-body-sm text-espresso-ink">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
<span className=""><strong>Base:</strong> Matcha served over ice.</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
<span className=""><strong>Flavors:</strong> Pumpkin and toasted marshmallow syrup.</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
<span className=""><strong>Finish:</strong> Marshmallow fluff on top.</span>
</li>
</ul>
</div>
<div className="pt-6 border-t border-border-hairline">
<p className="text-label-caps font-label-caps uppercase tracking-wider text-charcoal-muted">
                Looking for more?
              </p>
<Link className="mt-1 inline-flex min-h-11 items-center font-title-md text-title-md font-bold text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="/menu#fall-drinks">
                Explore the seasonal menu
              </Link>
</div>
</div>
</div>
</div>
</div>
</section>
); }

export function StoryCallout() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-8 md:py-20" id="directions">
      <div className="rounded-xl bg-slate-deep p-5 sm:p-8 text-canvas-white lg:p-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block rounded bg-white/10 px-2.5 py-1 text-label-caps font-bold uppercase tracking-wider text-gold-accent">Visit Us Today</span>
            <h2 className="text-display-hero-mobile font-display-hero-mobile text-canvas-white lg:text-headline-lg lg:font-headline-lg">Come taste what Nampa is talking about.</h2>
            <p className="text-body-lg leading-relaxed text-white/85">Coffee, chai, matcha, and refreshing cold drinks are waiting on Happy Valley Road.</p>
          </div>
          <div className="w-full shrink-0 space-y-4 lg:w-80">
            <div className="rounded-xl border border-white/20 bg-white/5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/20 pb-3">
                <span className="text-label-caps font-bold uppercase tracking-wider">Stand details</span>
                <span className="text-sm text-white/80">Southeast Nampa</span>
              </div>
              <p className="mt-4 text-sm font-semibold">{businessInfo.hours}</p>
              <p className="mt-1 text-sm text-white/80">{businessInfo.sundayHours}</p>
              <address className="mt-4 not-italic text-sm text-white/85">{businessInfo.address}</address>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-canvas-white px-5 py-3 font-semibold text-espresso-ink hover:bg-sand-surface" href={businessInfo.mapsUrl} rel="noopener noreferrer" target="_blank">Get Directions</a>
              <a className="inline-flex min-h-11 items-center justify-center rounded-lg border border-canvas-white px-5 py-3 font-semibold text-canvas-white hover:bg-white/10" href="/menu">Explore Drink Menu</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
