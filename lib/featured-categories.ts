export const featuredCategories = [
  {
    slug: "mochas",
    name: "Mochas",
    icon: "local_cafe",
    description: "Espresso and chocolate with a variety of flavorful twists.",
    label: "Chocolate & espresso",
  },
  {
    slug: "refreshers",
    name: "Infused Redbulls",
    icon: "water_drop",
    description: "Red Bull drinks infused with bright fruit flavors for an afternoon pick-me-up.",
    label: "Bold & fruity",
  },
  {
    slug: "lattes",
    name: "Lattes",
    icon: "coffee",
    description: "Smooth espresso favorites with comforting flavors.",
    label: "Smooth & cozy",
  },
  {
    slug: "dirty-sodas",
    name: "Dirty Sodas",
    icon: "bubble_chart",
    description: "Bubbly sodas dressed up with sweet flavor combinations.",
    label: "Bright & bubbly",
  },
  {
    slug: "chai",
    name: "Chai",
    icon: "emoji_food_beverage",
    description: "Warming spiced tea, including espresso pairings.",
    label: "Warmly spiced",
  },
  {
    slug: "matcha",
    name: "Matcha",
    icon: "eco",
    description: "Green tea drinks with bright and creamy flavors.",
    label: "Green tea",
  },
] as const;

export type FeaturedCategorySlug = (typeof featuredCategories)[number]["slug"];

export function isFeaturedCategorySlug(value: string | undefined): value is FeaturedCategorySlug {
  return featuredCategories.some((category) => category.slug === value);
}
