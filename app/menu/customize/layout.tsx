import { routeMetadata } from "@/lib/site-metadata";

export const metadata = routeMetadata("Customize Your Drink", "View additions, milk choices, flavors, and extra drinks at A&J’s Bean Machine.", "/menu/customize");

export default function CustomizeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
