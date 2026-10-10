import type { Metadata } from "next";
import { StoryIntro, NeighborhoodSection, CraftPhilosophy, DrinksStory, StoryCallout } from "@/components/StorySections";
export const metadata: Metadata = { title: "Our Story", description: "The story and craft behind A&J’s Bean Machine in Southeast Nampa." };
export default function StoryPage() {
  return <main id="main-content" tabIndex={-1}><StoryIntro/><NeighborhoodSection/><CraftPhilosophy/><DrinksStory/><StoryCallout /></main>;
}
