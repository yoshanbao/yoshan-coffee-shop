import { businessInfo } from "@/lib/business-info";
import { BusinessMap } from "@/components/BusinessMap";

export function VisitPreview() {
  return (
    <section id="visit" className="bg-primary-strong py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20">
        <div className="aspect-[5/4] overflow-hidden border border-white/15 bg-pale-mint sm:aspect-[6/4] lg:aspect-[5/4]">
          <BusinessMap />
        </div>
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-pale-mint">Location</span>
          <h2 className="mt-3 max-w-[560px] font-editorial text-[clamp(2.2rem,3.1vw,3.5rem)] font-bold leading-[1.14] tracking-[-0.045em]">Visit A&amp;J’s Bean Machine</h2>
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-white/85">Find us on S Happy Valley Rd in Southeast Nampa. We’re open Monday through Saturday for coffee and more.</p>
          <dl className="mt-8 border-t border-white/20">
            <div className="grid gap-1 border-b border-white/20 py-4 sm:grid-cols-[110px_1fr] sm:gap-5"><dt className="font-mono text-[11px] uppercase tracking-[0.11em] text-pale-mint">Address</dt><dd className="text-[15px] leading-[1.6]">{businessInfo.address}</dd></div>
            <div className="grid gap-1 border-b border-white/20 py-4 sm:grid-cols-[110px_1fr] sm:gap-5"><dt className="font-mono text-[11px] uppercase tracking-[0.11em] text-pale-mint">Hours</dt><dd className="text-[15px] leading-[1.6]">{businessInfo.hours}<br /><span className="text-white/70">{businessInfo.sundayHours}</span></dd></div>
          </dl>
          <a className="btn btn-inverse mt-7 px-6" href={businessInfo.mapsUrl} rel="noopener noreferrer" target="_blank">Open in Google Maps <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
