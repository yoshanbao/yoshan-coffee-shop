import { businessInfo } from "@/lib/business-info";

export function SocialLinks({ showIcons = false }: { showIcons?: boolean }) {
  return (
    <nav aria-label="Social media" className="flex flex-wrap gap-3">
      <a href={businessInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className="navigation-control navigation-control-outlined inline-flex min-h-11 items-center rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary">
        {showIcons && (
          <svg viewBox="0 0 24 24" width="20" height="20" className="mr-2 shrink-0" aria-hidden="true" focusable="false">
            <rect width="24" height="24" rx="4" fill="#1877F2" />
            <path d="M14 24V14h3l.5-4H14V8c0-1.2.5-2 2-2h2V2.5A20 20 0 0 0 15 2c-3.3 0-5 2-5 5.5V10H7v4h3v10Z" fill="white" />
          </svg>
        )}
        Facebook {!showIcons && <span className="material-symbols-outlined ml-2 text-base" aria-hidden="true">open_in_new</span>}
      </a>
      <a href={businessInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="navigation-control navigation-control-outlined inline-flex min-h-11 items-center rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary">
        {showIcons && (
          <svg viewBox="0 0 24 24" width="20" height="20" className="mr-2 shrink-0" aria-hidden="true" focusable="false">
            <rect width="24" height="24" rx="6" fill="#C13584" />
            <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="17" cy="7" r="1" fill="white" />
          </svg>
        )}
        Instagram {!showIcons && <span className="material-symbols-outlined ml-2 text-base" aria-hidden="true">open_in_new</span>}
      </a>
    </nav>
  );
}
