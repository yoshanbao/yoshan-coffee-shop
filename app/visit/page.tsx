import type { Metadata } from "next";
import { VisitHero, LocationDetails, ContactSection, VisitCallout } from "@/components/VisitSections";
export const metadata: Metadata = { title: "Visit Us", description: "Find A&J’s Bean Machine at 3209 S Happy Valley Rd, Nampa, Idaho." };
export default function VisitPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <VisitHero />
      <LocationDetails />
      <ContactSection />
      <VisitCallout />
    </main>
  );
}
