import { routeMetadata } from "@/lib/site-metadata";

export const metadata = routeMetadata("Menu", "Explore coffee, chai, matcha, infused Red Bull drinks, lemonade, and seasonal drinks at A&J’s Bean Machine.", "/menu");

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
