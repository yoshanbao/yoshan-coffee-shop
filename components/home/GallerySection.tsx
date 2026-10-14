import Image from "next/image";

const photos = [
  { src: "/images/inside_house.jpg", alt: "The colorful mural inside A&J’s Bean Machine", caption: "Inside the shop" },
  { src: "/images/coffee_heart.png", alt: "A drink topped with foam and a caramel heart", caption: "A little love in every cup" },
  { src: "/images/enjoy_cup.jpg", alt: "Drinks and flowers in front of the shop’s Enjoy Life mural", caption: "A bright spot in the day" },
  { src: "/images/coffee_hand.png", alt: "A freshly made iced coffee held inside the shop", caption: "Made to take with you" },
];

export function GallerySection() {
  return (
    <section id="craft" className="border-b border-border-hairline bg-sand-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-9 text-center">
          <span className="eyebrow">Around the shop</span>
          <h2 className="mt-3 font-editorial text-[clamp(2.2rem,3.1vw,3.5rem)] font-bold leading-[1.14] tracking-[-0.045em] text-espresso-ink">A look inside A&amp;J’s.</h2>
          <p className="mt-3 text-[16px] leading-[1.6] text-charcoal-muted">The shop, the mural, and drinks made for your day.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {photos.map((photo) => (
            <figure key={photo.src} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-canvas-white">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 639px) 50vw, (max-width: 1023px) 45vw, 25vw" className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.025]" />
              </div>
              <figcaption className="mt-3 border-t border-border-hairline pt-2 text-[13px] font-medium leading-[1.4] text-espresso-ink sm:text-[14px]">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
