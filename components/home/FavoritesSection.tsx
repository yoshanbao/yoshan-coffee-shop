import Image from "next/image";

export function FavoritesSection() {
  return (
    <section id="favorites" className="border-b border-white/10 bg-slate-deep py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
        <div>
          <span className="eyebrow text-gold-accent">Community highlights</span>
          <h2 className="mt-3 max-w-[580px] font-editorial text-[clamp(2.2rem,3.1vw,3.5rem)] font-bold leading-[1.14] tracking-[-0.045em] text-white">Find a new favorite for your morning commute.</h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.7] text-white/80">Whether you are on your way through Southeast Nampa, heading into the workday, or taking a relaxed midday break, A&amp;J’s Bean Machine offers approachable, handcrafted drinks tailored to your taste.</p>
          <div className="mt-8 border-t border-white/20">
            <div className="border-b border-white/20 py-4">
              <div className="flex items-baseline justify-between gap-4"><h3 className="font-editorial text-[23px] font-bold tracking-[-0.035em] text-white">Milkyway Mocha</h3><span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/80">Chocolate &amp; espresso</span></div>
              <p className="mt-1 text-[15px] leading-[1.6] text-white/75">An iced mocha swirled with chocolate, finished with whipped cream and chocolate pieces.</p>
            </div>
            <div className="border-b border-white/20 py-4">
              <div className="flex items-baseline justify-between gap-4"><h3 className="font-editorial text-[23px] font-bold tracking-[-0.035em] text-white">Cookie Dough Chai</h3><span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/80">Sweet &amp; spiced</span></div>
              <p className="mt-1 text-[15px] leading-[1.6] text-white/75">Spiced chai with cookie dough flavor for a sweet, comforting drink.</p>
            </div>
          </div>
        </div>
        <figure>
          <div className="relative aspect-[596/477] overflow-hidden bg-gold-accent">
            <Image src="/images/milkyway-mocha-gold-hd.png" alt="Iced Milkyway Mocha with whipped topping and chocolate pieces" fill sizes="(max-width: 1023px) 100vw, 50vw" quality={90} className="object-cover" />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/80">A drink for the afternoon · Milkyway Mocha</figcaption>
        </figure>
      </div>
    </section>
  );
}
