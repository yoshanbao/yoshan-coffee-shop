import Image from "next/image";
import { Carousel } from "@/components/Carousel";

const photos = [
  { src: "/images/process.png", alt: "Fresh coffee grounds in an espresso portafilter beneath the grinder", caption: "The daily craft" },
  { src: "/images/strawbetter-matcha.png", alt: "Iced Strawbetter Matcha with green matcha and pink strawberry layers", caption: "Strawbetter Matcha" },
  { src: "/images/autumn-spark.png", alt: "Iced orange and cranberry Autumn Spark drink", caption: "Autumn Spark" },
  { src: "/images/brown-sugar-cinnamon-latte.png", alt: "Iced Brown Sugar Cinnamon Latte topped with whipped cream", caption: "Brown Sugar Cinnamon Latte" },
];

export function GallerySection() {
  return (
    <section id="craft" className="border-b border-border-hairline bg-sand-surface py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <span className="mb-3 inline-block rounded-lg bg-pale-mint px-2.5 py-1 text-label-caps font-bold uppercase tracking-wider text-primary">Daily moments</span>
            <h2 className="text-headline-lg-mobile tracking-tight text-espresso-ink sm:text-3xl lg:text-headline-lg">Craft in every cup.</h2>
          </div>
          <p className="text-body-md text-charcoal-muted">A look at our coffee process and a few drinks from the menu.</p>
        </div>
        <Carousel label="craft photos">
          {photos.map((photo) => (
            <figure key={photo.src} className="carousel-card group h-full overflow-hidden rounded-xl border border-border-hairline bg-canvas-white shadow-sm">
              <div className="relative aspect-[4/3] max-h-64 overflow-hidden sm:max-h-80 lg:max-h-none">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 639px) 85vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 384px" className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.02]" />
              </div>
              <figcaption className="px-4 py-4 text-sm font-semibold text-espresso-ink">{photo.caption}</figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
