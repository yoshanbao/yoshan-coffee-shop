import { getSeasonalDrinks } from "@/lib/menu-data";
import type { FeaturedCategorySlug } from "@/lib/featured-categories";

/** Seasonal matches stay inside the selected category, after its regular drinks. */
export function SeasonalCategoryDrinks({ category, categoryTitle }: { category: FeaturedCategorySlug; categoryTitle: string }) {
  const drinks = getSeasonalDrinks(category);
  if (!drinks.length) return null;

  return (
    <div className="mt-6 rounded-xl border border-hairline bg-fall-bg p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-bold text-menu-ink">Seasonal {categoryTitle.toLowerCase()}</h3>
        <span className="text-xs font-semibold uppercase tracking-wider text-fall-accent">Fall selection</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {drinks.map((drink) => (
          <article key={drink.id} className="min-w-0 rounded-lg border border-hairline/50 bg-white/60 p-4">
            <h4 className="text-lg font-bold text-menu-ink">{drink.name}</h4>
            <p className="mt-2 text-[16px] leading-relaxed text-menu-muted">{drink.description}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-[15px] text-menu-muted">Seasonal availability may vary. Ask at the stand for seasonal sizes and pricing.</p>
    </div>
  );
}

export function FallDrinks({ activeCategory }: { activeCategory?: FeaturedCategorySlug }) {
  const drinks = getSeasonalDrinks(activeCategory);
  if (!drinks.length) return null;

  return (
    <section className="mb-12 mt-8 scroll-mt-20 border border-hairline bg-fall-bg p-5 sm:p-6 lg:p-8" id="fall-drinks">
      <div className="mb-8 flex flex-col justify-between border-b border-hairline pb-4 lg:flex-row md:items-baseline">
        <div>
          <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-fall-accent">Seasonal Selection</span>
          <h2 className="text-3xl font-black lowercase tracking-tight text-menu-ink sm:text-4xl lg:text-5xl">fall drinks.</h2>
        </div>
        <p className="mt-2 text-xs uppercase tracking-wider text-menu-muted md:mt-0">Limited Season Release</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {drinks.map((drink) => (
          <article key={drink.id} className="min-w-0 rounded-lg border border-hairline/50 bg-white/60 p-4">
            <span className="mb-1 block text-[12px] font-bold uppercase tracking-wider text-fall-accent">{drink.categoryLabel}</span>
            <h3 className="text-lg font-bold text-menu-ink">{drink.name}</h3>
            <p className="mt-1 text-[16px] leading-relaxed text-menu-muted">{drink.description}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 border-t border-hairline pt-4 text-center text-[15px] text-menu-muted">Seasonal availability may vary. Visit the shop for current sizes and pricing.</p>
    </section>
  );
}
