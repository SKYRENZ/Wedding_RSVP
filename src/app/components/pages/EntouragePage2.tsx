import React from "react";

/* ─────────────────────────────────────────────
   EntouragePage2.tsx — Chapter Four (Page 2)
   Second half: Secondary Sponsors onwards
   No chapter heading on this page.
   ───────────────────────────────────────────── */

const ENTOURAGE2 = {
  secondarySponsors: {
    candle: { label: "To light our path", groom: "Mr. Mark Daniel Torrente", bride: "Ms. Jennica Pico" },
    veil:   { label: "To clothes us as one", groom: "Mr. Leonardo Aris Putan", bride: "Mrs. Mary Grace Putan" },
    cord:   { label: "To bind us together", groom: "Mr. Richard Jimenez", bride: "Mrs. Junylen Jimenez" },
  },

  groomsmen: [
    "Mr. Mark Laurenz Listangco",
    "Mr. John Carlo Ederio",
    "Ptr. Kristian Clavecillas",
    "Mr. Kevin Aquino",
    "Mr. John Carlo Perillo",
  ],
  bridesmaids: [
    "Ms. Danica Rose Aricayos",
    "Ms. Joan Battung",
    "Ms. Trisha Mae Lingad",
    "Ms. Alpha Joy Fallesgon",
    "Ms. Stephanie Jane Gonzales",
    "Ms. Kyla Clavecillas",
    "Ms. Merapie Pacatan",
  ],

  ringBearer:   "Mr. Xhandroe Palaña",
  bibleBearer:  "Ms. Psalm Silao",
  coinBearer:   "Ms. AG Aranas",

  flowerGirls: [
    "Amari Isibel Putan",
    "Samantha Abia Sabio",
    "Gaily Andrea Verdejo",
    "Lasuli Eill David",
    "Zameerah Erich Rodriguez",
    "Marchie Palaña",
    "Athena Cithtrine Mendoza",
  ],

  whiteAisleRunners: [
    "Mr. George Ethan Matthew Palaña",
    "Mr. Jabez James Mancio",
  ],

  hereComesTheBride: "Zatthu Jehiah Ernacio",
};

/* ── Small reusable sub-components ────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="entourage-section-heading">
      <span className="divider-vine left" />
      <span className="entourage-section-title">{children}</span>
      <span className="divider-vine right" />
    </div>
  );
}

function RoleTag({ children }: { children: React.ReactNode }) {
  return <p className="entourage-role-tag">{children}</p>;
}

function NameList({ names }: { names: string[] }) {
  return (
    <ul className="entourage-name-list">
      {names.map((n) => (
        <li key={n} className="entourage-name">{n}</li>
      ))}
    </ul>
  );
}

/* ── Main component ───────────────────────── */

export default function EntouragePage2() {
  const { secondarySponsors: sec } = ENTOURAGE2;

  return (
    <div className="story-page entourage-page">

      {/* ── Secondary Sponsors ── */}
      <div className="entourage-block entourage-block-center">
        <SectionHeading>Secondary Sponsors</SectionHeading>
        <div className="entourage-secondary-sponsors">
          {Object.values(sec).map((s) => (
            <div key={s.label} className="secondary-sponsor-item">
              <p className="secondary-sponsor-label">{s.label}</p>
              <p className="entourage-name">{s.groom}</p>
              <p className="entourage-name">{s.bride}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="story-divider entourage-divider" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      {/* ── Groomsmen & Bridesmaids ── */}
      <div className="entourage-two-col">
        <div className="entourage-block">
          <RoleTag>Groomsmen</RoleTag>
          <NameList names={ENTOURAGE2.groomsmen} />
        </div>
        <div className="entourage-block">
          <RoleTag>Bridesmaids</RoleTag>
          <NameList names={ENTOURAGE2.bridesmaids} />
        </div>
      </div>

      <div className="story-divider entourage-divider" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      {/* ── Bearers ── */}
      <div className="entourage-three-col">
        <div className="entourage-block">
          <RoleTag>Ring Bearer</RoleTag>
          <p className="entourage-name">{ENTOURAGE2.ringBearer}</p>
        </div>
        <div className="entourage-block">
          <RoleTag>Bible Bearer</RoleTag>
          <p className="entourage-name">{ENTOURAGE2.bibleBearer}</p>
        </div>
        <div className="entourage-block">
          <RoleTag>Coin Bearer</RoleTag>
          <p className="entourage-name">{ENTOURAGE2.coinBearer}</p>
        </div>
      </div>

      <div className="story-divider entourage-divider" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      {/* ── Flower Girls ── */}
      <div className="entourage-block entourage-block-center">
        <RoleTag>Flower Girls</RoleTag>
        <div className="entourage-flower-girls">
          {ENTOURAGE2.flowerGirls.map((n) => (
            <span key={n} className="entourage-name">{n}</span>
          ))}
        </div>
      </div>

      <div className="story-divider entourage-divider" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      {/* ── White Aisle Runner ── */}
      <div className="entourage-block entourage-block-center">
        <RoleTag>White Aisle Runner</RoleTag>
        <NameList names={ENTOURAGE2.whiteAisleRunners} />
      </div>

      <div className="story-divider entourage-divider" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      {/* ── Here Comes the Bride ── */}
      <div className="entourage-block entourage-block-center entourage-block-last">
        <RoleTag>&ldquo;Here Comes the Bride&rdquo;</RoleTag>
        <p className="entourage-name">{ENTOURAGE2.hereComesTheBride}</p>
      </div>

    </div>
  );
}
