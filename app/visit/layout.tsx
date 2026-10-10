import { routeMetadata } from "@/lib/site-metadata";

export const metadata = routeMetadata("Visit Us", "Find A&J’s Bean Machine at 3209 S Happy Valley Rd, Nampa, Idaho. View hours, directions, and contact information.", "/visit");

export default function VisitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
