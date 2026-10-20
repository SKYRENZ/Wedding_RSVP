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
        <h2 className="chapter-title">Our Motif</h2>
      </div>

      {/* ── Color Palette ── */}
      <section className="motif-section" aria-label="Color palette">
        <p className="motif-section-label">Color Palette</p>

        <div className="palette-ring-wrap">
          {/* Centre image */}
          <div className="palette-center-img">
            <Image
              src="/Color pallete/ebb384de-0100-41d7-a6e1-9ea20398736b.jfif"
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

      {/* ── Preferred Clothing ── */}
      <section className="motif-section" aria-label="Preferred clothing">
        <p className="motif-section-label">Preferred Clothing</p>

        {/* Principal Sponsor — full width */}
        <div className="clothing-block clothing-block-full">
          <div className="clothing-img-wrap clothing-img-principal">
            <Image
              src="/clothes/principal sponsor.jfif"
              alt="Principal Sponsor attire"
              fill
              sizes="(max-width: 600px) 70vw, 280px"
              className="clothing-img"
            />
          </div>
          <p className="clothing-label">Principal Sponsor</p>
        </div>

        {/* Bridesmaids + Groomsmen — two columns */}
        <div className="clothing-row">
          <div className="clothing-block">
            <div className="clothing-img-wrap clothing-img-maid">
              <Image
                src="/clothes/bride's maid.jfif"
                alt="Bridesmaid attire"
                fill
                sizes="(max-width: 600px) 40vw, 160px"
                className="clothing-img"
              />
            </div>
            <p className="clothing-label">Bridesmaids</p>
          </div>

          <div className="clothing-block">
            <div className="clothing-img-wrap clothing-img-men">
              <Image
                src="/clothes/groom men.jfif"
                alt="Groomsmen attire"
                fill
                sizes="(max-width: 600px) 40vw, 160px"
                className="clothing-img"
              />
            </div>
            <p className="clothing-label">Groomsmen</p>
          </div>
        </div>
      </section>

    </div>
  );
}
