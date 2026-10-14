

export function MenuIntro({ title = "menu.", description = "Coffee, chai, matcha, infused Red Bull drinks, dirty sodas, lemonade, and seasonal drinks in Southeast Nampa." }: { title?: string; description?: string }) { return (
<section className="bg-primary-strong text-white">
<div className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-12">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
<div>
<h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none lowercase">
            {title}
          </h1>
<p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl font-normal leading-relaxed">
            {description}
          </p>
</div>
<div className="flex items-center">
<span className="text-[11px] uppercase tracking-widest px-3 py-1.5 border border-gold-accent/60 bg-white/[0.04] text-gold-accent font-medium">
            Choose your size and drink
          </span>
</div>
</div>
</div>
</section>
); }
export { FallDrinks } from "./SeasonalDrinks";
