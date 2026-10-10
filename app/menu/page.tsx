import type { Metadata } from "next";
import { MenuPageContent } from "@/components/MenuPageContent";
import { isMenuView } from "@/lib/menu-navigation";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore coffee, chai, matcha, infused Red Bull drinks, lemonade, and seasonal drinks.",
};

type MenuPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const { category: categoryParam } = await searchParams;
  const requestedCategory = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;
  const activeView = isMenuView(requestedCategory) ? requestedCategory : undefined;
  return <MenuPageContent activeView={activeView} />;
}
