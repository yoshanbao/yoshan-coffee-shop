import { routeMetadata } from "@/lib/site-metadata";
import { MenuCategoryScrollProvider } from "@/components/MenuCategoryScrollProvider";

export const metadata = routeMetadata("Menu", "Explore coffee, chai, matcha, infused Red Bull drinks, lemonade, and seasonal drinks at A&J’s Bean Machine.", "/menu");

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <MenuCategoryScrollProvider>{children}</MenuCategoryScrollProvider>;
}
