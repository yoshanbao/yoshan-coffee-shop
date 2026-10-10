import { ImageResponse } from "next/og";

export const alt = "A&J’s Bean Machine — coffee and handcrafted drinks in Southeast Nampa, Idaho";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#104141", color: "#FCFAF7", padding: "68px", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", color: "#D8EADB", fontSize: 24, letterSpacing: "3px" }}>SOUTHEAST NAMPA, IDAHO</div>
        <svg width="90" height="90" viewBox="0 0 64 64"><path d="M13 20h29v15c0 9-5 14-14 14s-15-5-15-14V20Zm29 3h4c6 0 9 3 9 8s-4 8-10 8h-3M11 55h33M22 5c-4 4 4 5 0 9M34 5c-4 4 4 5 0 9" fill="none" stroke="#D8EADB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 78, lineHeight: 1.08, fontWeight: 700 }}>A&amp;J’s</div>
        <div style={{ display: "flex", fontSize: 78, lineHeight: 1.08, fontWeight: 700 }}>Bean Machine</div>
        <div style={{ display: "flex", marginTop: 24, color: "#D8EADB", fontSize: 30 }}>Your friendly neighborhood coffee stop.</div>
      </div>
      <div style={{ display: "flex", borderTop: "1px solid #6A9090", paddingTop: 22, fontSize: 25 }}>Coffee · Chai · Matcha · Handcrafted drinks</div>
    </div>,
    size,
  );
}
