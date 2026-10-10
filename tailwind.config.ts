import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "espresso-ink":"#141514", "canvas-white":"#FCFAF7", "sand-surface":"#F4EFEA", "sand-surface-muted":"#EBE4DC", "charcoal-muted":"#383C3A", "border-hairline":"#DED7CD", "pale-mint":"#D8EADB", "peach-accent":"#F2A894", "studio-teal-deep":"#1D3F3F", "primary":"#104141", "primary-container":"#2b5858", "on-primary":"#ffffff", "on-primary-container":"#E5F0EA", "outline":"#535A56", "outline-variant":"#D5DCD8", "secondary":"#954832", "secondary-fixed":"#F2A894", "on-secondary-fixed-variant":"#522519", "surface":"#fef8f3", "surface-bright":"#fef8f3", "inverse-surface":"#32302d", "menu-bg":"#F4F4EF", "menu-ink":"#232325", "menu-muted":"#5B5B57", "hairline":"#A7A79F", "teal-accent":"#3D6663", "fall-accent":"#8E4A20", "fall-bg":"#EFE4CF"
      },
      spacing: {"margin-mobile":"1.25rem", "margin":"3rem", "gutter":"1.5rem", "space-xl":"3rem", "space-xs":"0.25rem", "space-sm":"0.5rem", "space-md":"1rem", "space-lg":"1.75rem"},
      borderRadius: {DEFAULT:"0.125rem", lg:"0.25rem", xl:"0.5rem"},
      fontFamily: {sans:["Hanken Grotesk","sans-serif"], "display-hero":["Hanken Grotesk"], "display-hero-mobile":["Hanken Grotesk"], "headline-lg":["Hanken Grotesk"], "headline-lg-mobile":["Hanken Grotesk"], "headline-md":["Hanken Grotesk"], "headline-sm":["Hanken Grotesk"], "title-md":["Hanken Grotesk"], "body-lg":["Hanken Grotesk"], "body-md":["Hanken Grotesk"], "body-sm":["Hanken Grotesk"], "label-caps":["Hanken Grotesk"], "label-md":["Hanken Grotesk"]},
      fontSize: {"display-hero":["56px",{lineHeight:"60px",letterSpacing:"-0.04em",fontWeight:"800"}],"display-hero-mobile":["38px",{lineHeight:"42px",letterSpacing:"-0.035em",fontWeight:"800"}],"headline-lg":["40px",{lineHeight:"44px",letterSpacing:"-0.03em",fontWeight:"700"}],"headline-lg-mobile":["28px",{lineHeight:"32px",letterSpacing:"-0.025em",fontWeight:"700"}],"headline-md":["26px",{lineHeight:"32px",letterSpacing:"-0.02em",fontWeight:"700"}],"headline-sm":["20px",{lineHeight:"26px",letterSpacing:"-0.015em",fontWeight:"600"}],"title-md":["18px",{lineHeight:"24px",letterSpacing:"-0.01em",fontWeight:"600"}],"body-lg":["17px",{lineHeight:"26px",letterSpacing:"-0.005em",fontWeight:"400"}],"body-md":["15px",{lineHeight:"22px",fontWeight:"400"}],"body-sm":["13px",{lineHeight:"18px",fontWeight:"400"}],"label-caps":["11px",{lineHeight:"14px",letterSpacing:"0.08em",fontWeight:"700"}],"label-md":["13px",{lineHeight:"18px",letterSpacing:"0.01em",fontWeight:"500"}]}
    }
  },
  plugins: []
};
export default config;
