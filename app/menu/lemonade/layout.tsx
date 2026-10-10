import { routeMetadata } from "@/lib/site-metadata";

export const metadata = routeMetadata("Lemonade Menu", "Explore A&J’s Bean Machine’s lemonade drinks, sizes, and prices.", "/menu/lemonade");

export default function LemonadeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
