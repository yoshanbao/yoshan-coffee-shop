import { menuSections, type MenuSection } from "@/lib/menu-data";
import type { MenuDrinkCategory } from "@/lib/menu-navigation";
import { MenuCustomization } from "./MenuCustomization";
import { isFeaturedCategorySlug } from "@/lib/featured-categories";
import { SeasonalCategoryDrinks } from "./SeasonalDrinks";

function MenuCategory({ section, showSeasonal }: { section: MenuSection; showSeasonal: boolean }) {
  return (
    <section id={section.id} className="min-w-0 scroll-mt-20">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-hairline pb-3">
        <h2 className="text-2xl font-bold uppercase tracking-tight text-primary sm:text-3xl">{section.title}</h2>
        <p className="text-xs font-semibold uppercase tracking-wider text-menu-muted">{section.servingNote}</p>
      </div>
      <ul aria-label={`${section.title.replace(".", "")} sizes and prices`} className="mb-6 grid max-w-xl grid-cols-3 divide-x divide-hairline rounded-lg border border-hairline bg-white text-center">
        {section.prices.map((price) => {
          const [size, amount] = price.split("oz$");
          return (
            <li key={price} className="flex flex-col px-2 py-3 text-sm tabular-nums">
              <span className="text-menu-muted">{size} oz</span>
              <strong className="text-menu-ink">${amount}</strong>
            </li>
          );
        })}
      </ul>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {section.items.map((item) => (
          <article key={item.name} className="min-w-0 rounded-xl border border-border-hairline bg-canvas-white p-5 shadow-sm">
            <h3 className="text-lg font-bold leading-snug text-menu-ink">{item.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-menu-muted">{item.description}</p>
          </article>
        ))}
      </div>
      {showSeasonal && isFeaturedCategorySlug(section.id) && (
        <SeasonalCategoryDrinks category={section.id} categoryTitle={section.title.replace(/\.$/, "")} />
      )}
    </section>
  );
}

export function MenuGrid({ activeCategory }: { activeCategory?: MenuDrinkCategory }) {
  const sections = activeCategory ? menuSections.filter((section) => section.id === activeCategory) : menuSections;
  return (
    <div className="space-y-10 border-b border-hairline py-8 sm:space-y-14 sm:py-10">
      {sections.map((section) => <MenuCategory key={section.id} section={section} showSeasonal={Boolean(activeCategory)} />)}
      {!activeCategory && <MenuCustomization />}
    </div>
  );
}
