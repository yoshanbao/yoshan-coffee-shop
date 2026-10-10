import {
  HeroSection,
  QuickFacts,
  MenuPreview,
  FavoritesSection,
  AboutSection,
  ReviewsSection,
  GallerySection,
  VisitPreview,
  FinalCallout,
} from "@/components/HomeSections";
export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-w-0">
      <HeroSection />
      <QuickFacts />
      <MenuPreview />
      <FavoritesSection />
      <AboutSection />
      <ReviewsSection />
      <GallerySection />
      <VisitPreview />
      <FinalCallout />
    </main>
  );
}
