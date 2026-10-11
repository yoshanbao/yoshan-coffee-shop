import { MenuIntro, FallDrinks } from "./MenuExtras";
import { MenuCategoryNavigation } from "./MenuCategoryNavigation";
import { MenuGrid } from "./MenuGrid";
import { MenuCustomization } from "./MenuCustomization";
import { isFeaturedCategorySlug } from "@/lib/featured-categories";
import type { MenuView } from "@/lib/menu-navigation";

export function MenuPageContent({ activeView }: { activeView?: MenuView }) {
  const featuredCategory = isFeaturedCategorySlug(activeView) ? activeView : undefined;
  const intro = activeView === "lemonade"
    ? { title: "menu.", description: "Explore our lemonade favorites. Choose a 16, 20, or 24 oz drink." }
    : activeView === "customize"
      ? { title: "menu.", description: "Find additions, milk choices, extra drinks, and flavors to ask for when ordering at the stand." }
      : undefined;

  return (
    <main id="main-content" tabIndex={-1} className="min-w-0 min-h-screen bg-menu-bg text-menu-ink">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pb-24">
        <MenuIntro {...intro} />
        <div id="menu-category-start" aria-hidden="true" />
        <MenuCategoryNavigation activeCategory={activeView} />
        {activeView === "customize" ? (
          <div className="py-8 sm:py-10"><MenuCustomization heading="Drink options." /></div>
        ) : (
          <>
            {(!activeView || activeView === "fall-drinks") && <FallDrinks />}
            {activeView !== "fall-drinks" && <MenuGrid activeCategory={activeView === "lemonade" ? "lemonade" : featuredCategory} />}
          </>
        )}
      </div>
    </main>
  );
}
