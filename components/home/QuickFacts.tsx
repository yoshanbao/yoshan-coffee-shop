import { businessInfo } from "@/lib/business-info";

export function QuickFacts() {
  return (
    <section className="bg-slate-deep text-white" aria-label="Shop at a glance">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-3 sm:px-8 md:grid-cols-3 md:py-0 max-[359px]:grid-cols-1">
        <div className="flex items-center gap-3 py-2 md:py-4 md:pr-8">
          <span className="inline-flex items-center gap-2 font-editorial text-[32px] font-bold leading-none">
            4.5
            <svg aria-label="Rated 4.5 stars" role="img" viewBox="0 0 24 24" className="h-[18px] w-[18px] text-gold-accent" fill="currentColor">
              <path d="m12 2.7 2.84 5.75 6.35.92-4.6 4.48 1.09 6.32L12 17.19l-5.68 2.98 1.09-6.32-4.6-4.48 6.35-.92L12 2.7Z" />
            </svg>
          </span>
          <div className="pt-1">
            <a href="#reviews" className="navigation-control text-[13px] text-white/90 underline decoration-white/45 underline-offset-4">15 reviews</a>
          </div>
        </div>
        <div className="border-l border-white/20 py-2 pl-4 md:px-8 md:py-4 max-[359px]:border-l-0 max-[359px]:border-t max-[359px]:pl-0">
          <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-white/80 sm:text-[11px]">Open Monday–Saturday</span>
          <p className="mt-1 text-[14px] font-medium sm:text-[15px]">6:30 AM–6:00 PM</p>
        </div>
        <div className="col-span-2 mt-2 border-t border-white/20 py-2 md:col-span-1 md:mt-0 md:border-l md:border-t-0 md:py-4 md:pl-8 max-[359px]:col-span-1">
          <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-white/80 sm:text-[11px]">Find us in Southeast Nampa</span>
          <a href={businessInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="navigation-control mt-1 inline-flex text-[14px] font-medium text-white sm:text-[15px]">3209 S Happy Valley Rd <span aria-hidden="true" className="ml-2 text-gold-accent">↗</span></a>
        </div>
      </div>
    </section>
  );
}
