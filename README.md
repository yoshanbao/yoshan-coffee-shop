# A&J’s Bean Machine

Next.js 16 App Router website built from the `aj_design` mockups.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production checks:

```bash
npm run typecheck
npm run build
npm run start
```

## Project structure

```text
app/
  layout.tsx                 Shared metadata, navigation, and footer
  globals.css                Tailwind and global typography
  page.tsx                   Home
  menu/page.tsx              Menu
  story/page.tsx             Story
  visit/page.tsx             Visit
  warm-editorial-craft/page.tsx  Design system reference
components/
  Navbar.tsx, Footer.tsx     Shared shell
  MobileNavigation.tsx      Accessible modal drawer below lg
  Carousel.tsx, ScrollArrow.tsx Swipe/drag carousel and shared controls
  hooks/useScrollTrack.ts    Bounds, resize tracking, and scroll motion
  ScrollReveals.tsx          Progressive viewport fade/slide animations
  MenuCategoryNavigation.tsx Sticky category pills with horizontal scrolling
  HomeSections.tsx           Home section exports
  home/                     Individual Home sections
  MenuGrid.tsx, MenuExtras.tsx  Menu sections
  StorySections.tsx          Story page sections
  VisitSections.tsx          Visit section exports
  visit/                    Visit sections and the contact form
  BusinessMap.tsx            Shared Home/Visit map
  SocialLinks.tsx            Shared Facebook/Instagram links
  SeasonalDrinks.tsx         Seasonal menu, filtered by category
lib/menu-data.ts             Standard and seasonal menu items and prices
lib/business-info.ts         Confirmed address/hours and Maps/review links
app/privacy/, app/terms/     Public data handling and site terms
app/robots.ts, sitemap.ts    Search indexing and public page discovery
app/opengraph-image.tsx      Branded social preview
public/images/               Site images copied from the supplied ref-style folder
aj_design/                   Original design package
```

The supplied archive has no `home_page/screen.png` and provides `warm_editorial_craft/DESIGN.md` rather than HTML.

## Contact email delivery

The Visit page form submits directly over HTTPS to FormSubmit, which delivers messages to `han472230@gmail.com`. No Gmail password or email API key is needed. The recipient is maintained in `lib/business-info.ts`.

1. Open the site through a web server (`npm run dev` locally, or the deployed HTTPS site) and submit the form once.
2. Open the activation email in `han472230@gmail.com` and confirm the form. Check Spam if needed.
3. Submit again after activation to confirm delivery. The initial submission triggers activation; do not assume it was delivered as a normal inquiry.

FormSubmit shows its CAPTCHA and confirmation page after the visitor submits. CAPTCHA is enabled, and the form includes a honeypot and browser validation. The visitor's `email` field becomes the reply address. Name, email, topic, and message are processed by FormSubmit; the site does not store them. These browser checks are not a substitute for the provider's server-side validation and abuse prevention.

After activation, FormSubmit supplies a public form ID that can be set in `FORMSUBMIT_FORM_ID` instead of using the email address in the submission URL. Activation and real email delivery cannot be confirmed until the inbox owner completes that step.

## Google reviews

The Home and Visit pages link to the shop's Google Maps reviews listing. Visitors can read current ratings and reviews there or choose **Write a review** on Google Maps. The listing URL is maintained in `lib/business-info.ts`. The website does not request or display Google rating numbers or written reviews, so no Google Places API key, Place ID, Google Cloud project, or billing setup is needed.

## Business content and launch checks

- Hours confirmed by the owner: Monday–Saturday 6:30 AM–6:00 PM; Sunday closed. Business name, address, hours, directions, contact destination, and social links are maintained in `lib/business-info.ts`. Menu prices/customization data live in `lib/menu-data.ts` and `lib/menu-customization-data.ts`.
- Set `SITE_URL` to the public HTTPS origin, without a path or query. On Vercel the stable production hostname is used as a fallback. This supplies canonicals, social previews, robots, sitemap, and local business JSON-LD. Local and Preview environments are noindex; both design-reference routes stay noindex on Production.
- The site includes a favicon, social preview, policy pages, branded 404, and retry page. JSON-LD includes confirmed hours/address, without self-serving review markup.
- Activate FormSubmit and verify a real second email arrives in `han472230@gmail.com`. Local tests intercept submissions and do not prove inbox delivery. Review the published privacy/site notices for your actual operating practices.
- Review `SECURITY_REVIEW.md` for tested protections and unresolved build-tool advisories. A local review does not verify your hosting account or replace ongoing dependency and traffic monitoring.
- The active Home, Story, and Visit images are copied from `aj_design/assets/ref-style/` into `public/images/`. Replace their named files or edit each component path to update photos. Existing `editorial-*.jpg` reference files remain available but are not used by public pages.

## Responsive layout

Sections use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. Tailwind's standard breakpoints remain unchanged: `sm` starts at 640px, `md` at 768px, and `lg` at 1024px.

Home category boxes and the craft gallery use a reusable snap carousel: one card with a preview of the next on phones, two cards on tablets, and three on desktop. Menu drink cards use 1 / 2 / 3 / 4 columns at those breakpoints. Hero, Story, contact, and location split layouts stay stacked below `lg`. The 64px header has desktop links at `lg` and a native modal navigation drawer below it, with focus containment, Escape/backdrop dismissal, restored focus, and scroll locking. The menu's category navigation sticks beneath the header and scrolls horizontally without widening the page; visible arrows and gradient edges indicate overflow. Selecting a category preserves the query-based server filter and seasonal drinks.

Controls have at least 44px touch targets. Contact fields use 16px text to avoid focus zoom on iPhones, headings scale by viewport, and animations respect reduced motion. The body uses `overflow-x-clip` to contain decorative elements while retaining sticky positioning.

## Carousels and motion

`Carousel` accepts a label and server-rendered cards as children, plus `inverse` for controls on dark backgrounds. It supports touch swipe, mouse drag, Left/Right and Home/End keys, and 44px arrow controls that disable at each boundary. Arrow scrolling and mouse release use a small damped spring; touch scrolling retains browser inertia and CSS snap points. Menu pills reuse the same bounds, resize tracking, and spring scrolling. Motion stops when users take over, and reduced-motion mode scrolls immediately.

Home photos are capped at 256px tall on phones and 320px on tablets, with explicit aspect ratios and responsive Next.js image sizes. The featured drink portraits keep their full cup visible in narrower image frames. Gallery photo paths, captions, and alt text are maintained together in `components/home/GallerySection.tsx`.

`ScrollReveals` observes page sections below the viewport and reveals them once with a 20px fade/slide. Initial viewport content and server-rendered content before JavaScript are visible immediately. Reduced motion and keyboard focus also reveal content immediately. No animation package is required.
