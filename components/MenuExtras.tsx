

export function MenuIntro({ title = "menu.", description = "Coffee, chai, matcha, infused Red Bull drinks, dirty sodas, lemonade, and seasonal drinks in Southeast Nampa." }: { title?: string; description?: string }) { return (
<section className="border-b border-hairline pb-10">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
<div>
<h1 className="text-6xl md:text-8xl font-black tracking-tighter text-menu-ink leading-none lowercase">
            {title}
          </h1>
<p className="mt-4 text-base md:text-lg text-menu-muted max-w-2xl font-normal leading-relaxed">
            {description}
          </p>
</div>
<div className="flex items-center">
<span className="text-[11px] uppercase tracking-widest px-3 py-1.5 border border-hairline text-menu-ink font-medium">
            Choose your size and drink
          </span>
</div>
</div>


</section>
); }
export { FallDrinks } from "./SeasonalDrinks";
