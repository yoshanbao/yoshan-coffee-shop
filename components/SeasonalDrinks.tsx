import { getSeasonalDrinks } from "@/lib/menu-data";
import type { FeaturedCategorySlug } from "@/lib/featured-categories";

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
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-fall-accent">{drink.categoryLabel}</span>
            <h3 className="text-lg font-bold text-menu-ink">{drink.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-menu-muted">{drink.description}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 border-t border-hairline pt-4 text-center text-xs text-menu-muted">Seasonal availability may vary. Visit the shop for current sizes and pricing.</p>
    </section>
  );
}
