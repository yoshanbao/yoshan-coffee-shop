# Security review — 2026-10-11

Scope: application source and dependency review, installed Next.js 16 documentation, local type checking, and local browser/HTTP checks. This review is not a penetration test and does not assess the deployed Vercel account, TLS configuration, FormSubmit's infrastructure.

## Implemented protections

- **Resource policy:** `next.config.ts` supplies a default same-origin Content Security Policy with explicit exceptions for Google Fonts, Google Maps frames and native HTTPS FormSubmit submissions. Production does not allow script evaluation with `unsafe-eval`. Inline HTML event handlers are blocked by `script-src-attr 'none'`.
- **Policy limitation:** Next.js inline bootstrap scripts still require `script-src 'unsafe-inline'` for the current static rendering setup. This policy blocks unapproved external script sources but does **not** provide complete protection against injected inline scripts. A strict nonce policy would require request-specific dynamic rendering; it was not introduced here. See [Next.js CSP guidance](https://nextjs.org/docs/app/guides/content-security-policy).
- **Response headers:** pages deny framing, disable MIME sniffing, restrict camera/microphone/geolocation/payment permissions, and omit the framework identification header. Production includes HSTS and insecure-request upgrading. HTTPS must be enabled on the deployment.
- **Image requests:** site images are local. External image hosts are not allowed; redirect following, local-IP optimization, and SVG optimization are disabled.
- **Contact form:** native HTTPS POST, FormSubmit's default CAPTCHA, hidden honeypot, required fields, email format validation, and length limits remain enabled. A small Client Component rejects whitespace-only names/messages, announces the pending verification step, prevents a second click while submitting, and restores the button when returning with browser Back. No submission is presented as successfully delivered before provider verification.
- **Contact disclosure:** the form identifies the third-party delivery provider and links the site's privacy notice. The form does not request payment data or passwords. The site does not have a local message database.
- **Public URLs:** the Google Maps review destination is a fixed business link, and menu categories use an application allowlist. Application form entries are not rendered as raw HTML. Environment files are ignored except `.env.example`; no Google Places API key is required.

Client validation improves error feedback; it can be bypassed and is not server-side input validation. FormSubmit handles receiving submissions, verification, and delivery. No Gmail password or mail-service secret is needed in the browser.

## Dependency audit

Installed versions at this review: Next.js 16.4.0; React and React DOM 19.3.0; Tailwind CSS 3.4.19.

| Check | Result on 2026-10-11 |
| --- | --- |
| `npm audit --omit=dev --json` | 0 reported production dependency vulnerabilities |
| `npm audit --json` | 7 reported build/development dependency findings: 5 high, 2 moderate |

The full audit findings arise from two underlying advisories in Tailwind CSS 3's build dependency chain:

- `braces` 3.0.3: deeply nested patterns can exhaust the stack. The advisory currently lists no patched version. [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)
- `postcss-selector-parser` 6.1.4: selector parsing can exhaust CPU; the advisory identifies 7.1.6 or later as patched. [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf)

These dependencies process checked-in source CSS and file patterns during builds/development; reviewed visitor flows do not pass user-provided CSS or glob patterns to them. They remain unresolved. npm proposes a major Tailwind CSS 4 migration, which requires compatibility and design review. No forced major upgrade or unverified transitive override was applied. A zero production audit result does not rule out unreported flaws.

## Remaining deployment requirements

1. **Email activation and real delivery:** the recipient must activate FormSubmit from the email it sends after the first real submission, then verify a second message arrives. This review did not send any real email. Keep CAPTCHA enabled. See [FormSubmit's documentation](https://formsubmit.co/).
2. **Recipient visibility:** `han472230@gmail.com` is deliberately public in contact links and the default form action. A configured public `FORMSUBMIT_FORM_ID` can hide the address in the submission endpoint; contact links still display it. CAPTCHA cannot prevent all human spam.
3. **Account and release controls:** enable account MFA, limit project access, keep production secrets out of source control, and rerun dependency checks before releases. Review the Tailwind build findings as part of a planned toolchain upgrade.

## Verification record

- `npm run typecheck` passed after the CSP/contact changes.
- Both npm audits reached the registry and returned the results above; the full audit exits nonzero because unresolved findings remain.
- The coordinating implementation task's production build passed, and its production server was used for the following checks.
- Production browser checks passed for the response-header policy (including no production `unsafe-eval` and no framework header), invalid whitespace fields, pending feedback, browser Back restoration, `/privacy` navigation, and absence of horizontal overflow at 390 px width.
- Pending feedback was inspected with browser navigation canceled only inside the test harness. A separate JavaScript-disabled browser verified the native POST and honeypot/template fields, with CAPTCHA left enabled. That request was intercepted and fulfilled locally before reaching FormSubmit; no real email was sent.
- Final TypeScript checks and production build passed. Home/Menu/Visit/Story checks passed at 375, 768, 1024, and 1440 px with no horizontal overflow or browser runtime errors; category selection returned to its section and the mobile drawer closed with Escape.
- The Google Places integration was removed. Review links point to the fixed Google Maps listing; no API key, Place ID, or server-side Places request is required. The live ratings and reviews appear on Google Maps rather than in this site.
- Local metadata checks verified canonicals, confirmed business JSON-LD, policy pages, custom HTTP 404, icon, and a 1200×630 social image. Origin tests verified production indexing/public sitemap and preview/local noindex behavior.
- These are local application checks. external CAPTCHA/map rendering, real inbox delivery, deployed TLS, and production firewall behavior were not verified.
