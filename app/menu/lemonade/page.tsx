import type { Metadata } from "next";
import { MenuPageContent } from "@/components/MenuPageContent";

export const metadata: Metadata = {
  title: "Lemonade Menu",
  description: "Explore A&J’s Bean Machine's lemonade drinks, sizes, and prices.",
};

export default function LemonadePage() {
  return <MenuPageContent activeView="lemonade" />;
}
