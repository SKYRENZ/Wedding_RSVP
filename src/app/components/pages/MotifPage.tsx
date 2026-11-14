import Image from "next/image";

const GUEST_PALETTE = [
  { name: "Rose Gold",  hex: "#B76E79" },
  { name: "Dusty Blue", hex: "#8C9DAD" },
  { name: "Warm Beige", hex: "#cfb997" },
  { name: "Mocha",      hex: "#9D7651" },
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

      {/* ── Principal Sponsors (moved up) ── */}
      <section className="motif-section attire-section-principal" aria-label="Principal Sponsors attire">
        <p className="attire-role-title">Principal Sponsors</p>
        <div className="attire-principal-two-images">
          <div className="attire-principal-img-wrap">
            <Image
              src="/clothes/Final clothes for prinicpal.png"
              alt="Principal Sponsor attire — Burgundy & Navy Blue Gowns with Barong Tagalog"
              width={480}
              height={320}
              className="attire-principal-img"
              priority
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

      {/* ── Guests (horizontal color palette) ── */}
      <section className="motif-section attire-section-guests" aria-label="Guest attire">
        <h3 className="attire-guest-title">Guests</h3>

        <div className="attire-guest-palette" role="group" aria-label="Guest color palette">
          {GUEST_PALETTE.map((c) => (
            <span
              key={c.name}
              className="attire-guest-swatch"
              style={{ backgroundColor: c.hex }}
              title={`${c.name} (${c.hex})`}
              aria-label={c.name}
            />
          ))}
        </div>

        <p className="attire-desc attire-formal-text">Formal / Semi Formal</p>
        <p className="attire-color-note">
          We would love to see you in these colors
        </p>
      </section>

    </div>
  );
}
