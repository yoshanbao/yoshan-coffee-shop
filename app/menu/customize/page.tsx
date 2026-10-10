import type { Metadata } from "next";
import { MenuPageContent } from "@/components/MenuPageContent";

export const metadata: Metadata = {
  title: "Customize Your Drink",
  description: "View additions, milk choices, flavors, and extra drinks at A&J’s Bean Machine.",
};

export default function CustomizePage() {
  return <MenuPageContent activeView="customize" />;
}
