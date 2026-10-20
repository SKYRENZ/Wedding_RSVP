import Image from "next/image";

const PALETTE = [
  { name: "BURGUNDY",   hex: "#6d1a36" },
  { name: "ROSE GOLD",  hex: "#b07d62" },
  { name: "CHAMPAGNE",  hex: "#e8d5c4" },
  { name: "NAVY BLUE",  hex: "#1a2a5e" },
];

export default function MotifPage() {
  return (
    <div className="story-page motif-page">

      {/* Chapter heading */}
      <div className="chapter-heading">
        <span className="chapter-number">Chapter Three</span>
        <div className="story-divider" aria-hidden="true">
          <span className="divider-vine left" />
          <span className="divider-diamond">◆</span>
          <span className="divider-vine right" />
        </div>
        <h2 className="chapter-title">Attire</h2>
      </div>

      {/* ── Color Palette (circle ring, no label) ── */}
      <section className="motif-section" aria-label="Color palette">
        <div className="palette-ring-wrap">
          {/* Centre image */}
          <div className="palette-center-img">
            <Image
              src="/Color pallete/ebb384de-0100-41d7-a6e1-9ea20398736b.png"
              alt="Wedding color palette"
              fill
              sizes="(max-width: 600px) 80px, 100px"
              className="palette-img-inner"
            />
          </div>

          {/* Four swatches arranged in a ring */}
          {PALETTE.map((c, i) => (
            <div
              key={c.name}
              className={`swatch swatch-${i}`}
              title={c.name}
            >
              <span
                className="swatch-circle"
                style={{ background: c.hex }}
              />
              <span className="swatch-name">{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="story-divider" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      {/* ── Principal Sponsors (2 images side by side) ── */}
      <section className="motif-section" aria-label="Principal Sponsors attire">
        <p className="attire-role-title">Principal Sponsors</p>
        <div className="attire-principal-two-images">
          <div className="attire-principal-img-wrap">
            <Image
              src="/clothes/Final clothes for prinicpal.png"
              alt="Principal Sponsor attire — Burgundy & Navy Blue Gowns with Barong Tagalog"
              width={480}
              height={320}
              className="attire-principal-img"
            />
          </div>
        </div>
        <div className="attire-principal-text">
          <p className="attire-desc">Ninong: Barong Tagalog</p>
          <p className="attire-desc">Ninang: Burgundy or Navy Blue</p>
          <p className="attire-desc">Gown or Formal Dress</p>
        </div>
      </section>

      <div className="story-divider" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      {/* ── Guests ── */}
      <section className="motif-section" aria-label="Guest attire">
        <p className="attire-role-title">Guests</p>
        <p className="attire-desc">Formal / Semi Formal</p>
        <p className="attire-color-note">
          We would love to see you in these colors
        </p>
      </section>

    </div>
  );
}
