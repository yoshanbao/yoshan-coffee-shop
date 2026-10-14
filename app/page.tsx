import {
  HeroSection,
  QuickFacts,
  AboutSection,
  FavoritesSection,
  GallerySection,
  MenuPreview,
  ReviewsSection,
  VisitPreview,
} from "@/components/HomeSections";
export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-w-0">
      <HeroSection />
      <QuickFacts />
      <AboutSection />
      <FavoritesSection />
      <GallerySection />
      <MenuPreview />
      <ReviewsSection />
      <VisitPreview />
    </main>
  );
}
