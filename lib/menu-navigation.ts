import { featuredCategories, type FeaturedCategorySlug } from "./featured-categories";

export type MenuDrinkCategory = FeaturedCategorySlug | "lemonade";
export type MenuView = MenuDrinkCategory | "fall-drinks" | "customize";

export const menuNavigationItems: { slug: MenuView; name: string; href: string }[] = [
  ...featuredCategories.map((category) => ({
    slug: category.slug,
    name: category.name,
    href: `/menu?category=${category.slug}`,
  })),
  { slug: "lemonade", name: "Lemonade", href: "/menu/lemonade" },
  { slug: "fall-drinks", name: "Fall drinks", href: "/menu?category=fall-drinks" },
  { slug: "customize", name: "Customize", href: "/menu/customize" },
];

export function isMenuView(value: string | undefined): value is MenuView {
  return menuNavigationItems.some((item) => item.slug === value);
}
