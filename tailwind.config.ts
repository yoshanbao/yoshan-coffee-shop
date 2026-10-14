import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Muted copy is a warm mid-gray so headings carry the contrast; still ≥ 5.7:1 on every light surface.
        // Hairlines are translucent so the same divider reads equally faint on white, sand, and tinted cards.
        "espresso-ink": "#1B2923",
        "canvas-white": "#FBFCF9",
        "sand-surface": "#F7F4EC",
        "sand-surface-muted": "#EEE8DB",
        "charcoal-muted": "#4B575C",
        "border-hairline": "rgb(39 57 67 / 0.13)",
        "field-border": "#BFC8C9",
        "pale-mint": "#D9EBDD",
        "peach-accent": "#F2B9A7",
        "slate-deep": "#273943",
        "slate-soft": "#E7EDF0",
        "gold-accent": "#E8B83F",
        "honey-surface": "#F4E6BC",
        "studio-teal-deep": "#1D3F3F",
        "primary": "#104141",
        "primary-strong": "#0A3333",
        "primary-container": "#2b5858",
        "on-primary": "#ffffff",
        "on-primary-container": "#E5F0EA",
        "outline": "#535A56",
        "outline-variant": "#D5DCD8",
        "secondary": "#8F3C4F",
        "secondary-fixed": "#F5E6E9",
        "on-secondary-fixed-variant": "#633341",
        "surface": "#fef8f3",
        "surface-bright": "#fef8f3",
        "inverse-surface": "#32302d",
        "menu-bg": "#F7F4EC",
        "menu-ink": "#1B2923",
        "menu-muted": "#4B575C",
        "hairline": "#D4D5CE",
        "teal-accent": "#3D6663",
        "fall-accent": "#8F3C4F",
        "fall-bg": "#F6EFD9"
      },
      spacing: {"margin-mobile":"1.25rem", "margin":"3rem", "gutter":"1.5rem", "space-xl":"3rem", "space-xs":"0.25rem", "space-sm":"0.5rem", "space-md":"1rem", "space-lg":"1.75rem"},
      borderRadius: {DEFAULT:"0.125rem", lg:"0.25rem", xl:"0.5rem"},
      fontFamily: {sans:["Hanken Grotesk","sans-serif"], editorial:["Georgia","Times New Roman","serif"], mono:["DM Mono","ui-monospace","SFMono-Regular","Menlo","monospace"], "display-hero":["Georgia","Times New Roman","serif"], "display-hero-mobile":["Georgia","Times New Roman","serif"], "headline-lg":["Georgia","Times New Roman","serif"], "headline-lg-mobile":["Georgia","Times New Roman","serif"], "headline-md":["Georgia","Times New Roman","serif"], "headline-sm":["Hanken Grotesk"], "title-md":["Hanken Grotesk"], "body-lg":["Hanken Grotesk"], "body-md":["Hanken Grotesk"], "body-sm":["Hanken Grotesk"], "label-caps":["Hanken Grotesk"], "label-md":["Hanken Grotesk"]},
      fontSize: {"display-hero":["54px",{lineHeight:"59px",letterSpacing:"-0.038em",fontWeight:"700"}],"display-hero-mobile":["38px",{lineHeight:"42px",letterSpacing:"-0.03em",fontWeight:"700"}],"headline-lg":["38px",{lineHeight:"43px",letterSpacing:"-0.03em",fontWeight:"700"}],"headline-lg-mobile":["28px",{lineHeight:"32px",letterSpacing:"-0.025em",fontWeight:"700"}],"headline-md":["26px",{lineHeight:"32px",letterSpacing:"-0.02em",fontWeight:"700"}],"headline-sm":["19px",{lineHeight:"25px",letterSpacing:"-0.015em",fontWeight:"600"}],"title-md":["17px",{lineHeight:"23px",letterSpacing:"-0.01em",fontWeight:"600"}],"body-lg":["16px",{lineHeight:"25px",letterSpacing:"-0.003em",fontWeight:"400"}],"body-md":["16px",{lineHeight:"25px",fontWeight:"400"}],"body-sm":["14.5px",{lineHeight:"22px",fontWeight:"400"}],"label-caps":["12px",{lineHeight:"16px",letterSpacing:"0.07em",fontWeight:"700"}],"label-md":["13px",{lineHeight:"18px",letterSpacing:"0.01em",fontWeight:"500"}],"eyebrow":["11px",{lineHeight:"16px",letterSpacing:"0.14em",fontWeight:"600"}],"meta":["11px",{lineHeight:"16px",letterSpacing:"0.06em",fontWeight:"500"}]},
      boxShadow: {
        // Two-layer shadows: a tight contact shadow plus a soft, negative-spread ambient shadow.
        "card":"0 1px 2px rgb(24 49 32 / 0.035), 0 6px 18px -10px rgb(24 49 32 / 0.15)",
        "card-hover":"0 2px 4px rgb(24 49 32 / 0.045), 0 14px 28px -13px rgb(24 49 32 / 0.22)",
        "raised":"0 1px 2px rgb(24 49 32 / 0.045), 0 18px 38px -19px rgb(24 49 32 / 0.23)",
        "inverse-card":"0 1px 2px rgb(0 0 0 / 0.07), 0 12px 26px -15px rgb(0 0 0 / 0.36)",
        "inverse-card-hover":"0 2px 4px rgb(0 0 0 / 0.10), 0 20px 36px -18px rgb(0 0 0 / 0.47)",
        "button":"0 1px 2px rgb(16 65 65 / 0.16), inset 0 1px 0 rgb(255 255 255 / 0.10)",
        "button-hover":"0 7px 16px -9px rgb(16 65 65 / 0.46), inset 0 1px 0 rgb(255 255 255 / 0.12)"
      }
    }
  },
  plugins: []
};
export default config;
