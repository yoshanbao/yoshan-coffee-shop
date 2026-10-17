"use client";

import { useEffect, useState } from "react";
import { MenuIntro, FallDrinks } from "./MenuExtras";
import { MenuCategoryNavigation } from "./MenuCategoryNavigation";
import { MenuGrid } from "./MenuGrid";
import { MenuCustomization } from "./MenuCustomization";
import { isFeaturedCategorySlug } from "@/lib/featured-categories";
import { isMenuView, type MenuView } from "@/lib/menu-navigation";

function viewFromLocation(): MenuView | undefined {
  const route = window.location.pathname;
  if (route === "/menu/lemonade") return "lemonade";
  if (route === "/menu/customize") return "customize";
  const category = new URLSearchParams(window.location.search).get("category") ?? undefined;
  return isMenuView(category) ? category : undefined;
}

export function MenuPageContent({ activeView }: { activeView?: MenuView }) {
  const [selectedView, setSelectedView] = useState(activeView);
  useEffect(() => setSelectedView(activeView), [activeView]);
  useEffect(() => {
    const restoreCategory = () => setSelectedView(viewFromLocation());
    window.addEventListener("popstate", restoreCategory);
    return () => window.removeEventListener("popstate", restoreCategory);
  }, []);
  useEffect(() => {
    const pageTitle = selectedView === "lemonade" ? "Lemonade Menu" : selectedView === "customize" ? "Customize Your Drink" : "Menu";
    document.title = `${pageTitle} | A&J’s Bean Machine`;
  }, [selectedView]);

  const featuredCategory = isFeaturedCategorySlug(selectedView) ? selectedView : undefined;
  const intro = selectedView === "lemonade"
    ? { title: "menu.", description: "Explore our lemonade favorites. Choose a 16, 20, or 24 oz drink." }
    : selectedView === "customize"
      ? { title: "menu.", description: "Find additions, milk choices, extra drinks, and flavors to ask for when ordering at the stand." }
      : undefined;

  return (
    <main id="main-content" tabIndex={-1} className="min-w-0 min-h-screen bg-menu-bg text-menu-ink">
      <MenuIntro {...intro} />
      <div id="menu-category-start" aria-hidden="true" />
      <div className="sticky top-[62px] z-30 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MenuCategoryNavigation activeCategory={selectedView} onSelect={setSelectedView} />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-24">
        {selectedView === "customize" ? (
          <div className="py-8 sm:py-10"><MenuCustomization heading="Drink options." /></div>
        ) : (
          <>
            {(!selectedView || selectedView === "fall-drinks") && <FallDrinks />}
            {selectedView !== "fall-drinks" && <MenuGrid activeCategory={selectedView === "lemonade" ? "lemonade" : featuredCategory} />}
          </>
        )}
      </div>
    </main>
  );
}
