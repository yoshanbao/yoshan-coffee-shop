import { routeMetadata } from "@/lib/site-metadata";

export const metadata = routeMetadata("Our Story", "The story and craft behind A&J’s Bean Machine in Southeast Nampa.", "/story");

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
