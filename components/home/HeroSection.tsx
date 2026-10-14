import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/lib/business-info";

export function HeroSection() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-primary-strong text-white">
      <div className="absolute inset-x-0 top-0 -z-20 h-[125vw] max-h-[500px] overflow-hidden sm:inset-0 sm:h-full sm:max-h-none">
        <Image
          src="/images/coffee_v2_bg.png"
          alt="A&J’s Bean Machine iced coffee on a table with a green outdoor backdrop"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-[5%_center] sm:object-[28%_center] lg:object-[center_60%]"
          style={{ filter: "contrast(1.055) saturate(1.045)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-strong sm:hidden" aria-hidden="true" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-strong/80 via-primary-strong/45 to-transparent lg:hidden" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 hidden lg:block"
        style={{ background: "linear-gradient(90deg, rgba(7,36,30,0) 23%, rgba(7,36,30,0.08) 41%, rgba(7,36,30,0.53) 67%, rgba(7,36,30,0.78) 100%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
        style={{ background: "radial-gradient(ellipse 74% 86% at 48% 44%, transparent 49%, rgba(4,18,15,0.22) 100%), linear-gradient(180deg, rgba(4,18,15,0.15) 0%, transparent 22%, transparent 70%, rgba(4,18,15,0.37) 100%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] mix-blend-overlay"
        style={{ backgroundImage: "url('/images/hero-grain.svg')", backgroundSize: "180px 180px" }}
        aria-hidden="true"
      />
      <div className="mx-auto flex min-h-[660px] max-w-7xl items-end px-5 pb-12 pt-72 sm:min-h-[690px] sm:px-8 sm:pb-16 lg:min-h-[clamp(780px,56.25vw,1000px)] lg:items-center lg:justify-end lg:py-20">
        <div className="max-w-[550px] lg:w-[48%]">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-gold-accent">Local coffee shop · Nampa, Idaho</span>
          <h1 className="mt-5 font-editorial text-[clamp(2.75rem,4.25vw,4.65rem)] font-bold leading-[1.07] tracking-[-0.055em]">
            Your friendly coffee stop in Southeast Nampa.
          </h1>
          <p className="mt-7 max-w-[520px] text-[16px] leading-[1.7] text-white/90 sm:text-[17px]">
            Stop by A&amp;J’s Bean Machine for coffee, chai, matcha, infused Red Bull drinks, dirty sodas, and lemonade, served with a friendly local welcome.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a className="btn btn-inverse px-6" href={businessInfo.mapsUrl} rel="noopener noreferrer" target="_blank">
              Get Directions <span aria-hidden="true" className="text-base font-normal">↗</span>
            </a>
            <Link className="navigation-control hero-menu-link inline-flex min-h-11 items-center border-b border-white/65 text-[15px] font-semibold text-white hover:border-white" href="/menu">
              Explore the Menu <span aria-hidden="true" className="ml-2 text-base">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
