import Image from "next/image";

export function FavoritesSection() { return (
<section className="bg-canvas-white py-12 sm:py-16 lg:py-24 border-b border-border-hairline" id="favorites">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 space-y-6">
<span className="px-2.5 py-1 bg-peach-accent text-espresso-ink rounded-lg text-label-caps font-label-caps uppercase tracking-wider font-bold inline-block">
            COMMUNITY HIGHLIGHTS
          </span>
<h2 className="text-headline-lg-mobile sm:text-3xl lg:text-headline-lg font-headline-lg text-espresso-ink tracking-tight">
            Find a new favorite for your morning commute.
          </h2>
<p className="text-body-lg font-body-lg text-charcoal-muted leading-relaxed">
            Whether you are on your way through Southeast Nampa, heading into the workday, or taking a relaxed midday break, A&amp;J’s Bean Machine offers approachable, handcrafted drinks tailored to your taste.
          </p>

<div className="pt-2 space-y-3">
<div className="p-4 bg-sand-surface rounded-lg border border-border-hairline flex items-start gap-4">
<span className="material-symbols-outlined text-primary text-[24px] mt-0.5" data-icon="local_cafe">local_cafe</span>
<div>
<div className="flex flex-wrap items-center gap-2 mb-1">
<span className="text-title-md font-title-md font-bold text-espresso-ink">Dirty Chai</span>
<span className="px-2 py-0.5 bg-sand-surface-muted text-charcoal-muted rounded-lg text-label-caps font-label-caps uppercase tracking-wider font-semibold">
                    Chai & espresso
                  </span>
</div>
<p className="text-body-sm font-body-sm text-charcoal-muted">
                  Spiced chai paired with espresso. Explore our Dirty Caramel Chai and Dirty Almond Chai on the menu.
                </p>
</div>
</div>
<div className="p-4 bg-sand-surface rounded-lg border border-border-hairline flex items-start gap-4">
<span className="material-symbols-outlined text-secondary text-[24px] mt-0.5" data-icon="cookie">cookie</span>
<div>
<div className="flex flex-wrap items-center gap-2 mb-1">
<span className="text-title-md font-title-md font-bold text-espresso-ink">Cookie Dough Chai</span>
<span className="px-2 py-0.5 bg-sand-surface-muted text-charcoal-muted rounded-lg text-label-caps font-label-caps uppercase tracking-wider font-semibold">
                    Sweet & spiced
                  </span>
</div>
<p className="text-body-sm font-body-sm text-charcoal-muted">
                  Spiced chai with cookie dough flavor for a sweet, comforting drink.
                </p>
</div>
</div>
</div>
</div>

<div className="mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none relative">
<div className="relative bg-sand-surface p-4 rounded-xl border border-border-hairline">
<div className="relative mx-auto aspect-[4/5] w-full max-w-[12.8rem] max-h-64 sm:max-w-64 sm:max-h-80 lg:max-w-none lg:max-h-none rounded-lg overflow-hidden bg-sand-surface-muted">
<Image className="object-cover" alt="Iced Milkyway Mocha with whipped topping and chocolate pieces" src="/images/milkway_mocha.png" fill sizes="(max-width: 639px) 205px, (max-width: 1023px) 256px, (max-width: 1279px) 42vw, 480px"/>
</div>

<div className="absolute -top-3 right-2 sm:-right-3 w-20 h-20 rounded-full bg-peach-accent text-espresso-ink border-2 border-canvas-white flex flex-col items-center justify-center text-center p-2 shadow-[0_4px_12px_rgba(20,21,20,0.05)]">
<span className="text-[9px] font-bold uppercase tracking-wider leading-none">Drink</span>
<span className="text-title-md font-bold leading-tight">Spotlight</span>
<span className="text-[8px] uppercase tracking-tight">Mocha</span>
</div>
</div>
</div>
</div>
</div>
</section>
); }
