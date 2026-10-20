import React from "react";

/* ─────────────────────────────────────────────
   EntouragePage.tsx — Chapter Four
   ───────────────────────────────────────────── */

const ENTOURAGE = {
  solemnizingOfficer: "Pastor Jonathan F. Ernacio",

  parentsOfGroom: ["Mr. Noel A. Silao", "Mrs. Jonna B. Palaña"],
  parentsOfBride: ["Mr. Miller F. Listangco", "Mrs. Paz R. Listangco"],

  principalSponsors: {
    groom: [
      "Pastor Jonathan Ernacio",
      "Pastor Rhenald Lagrimas",
      "Pastor Reynaldo Fallesgon",
      "Pastor Rodolfo Mancio",
      "Pastor Joel Abegonia",
      "Mr. Boy Gutang",
      "Mr. Aniano Silao, Jr.",
      "Mr. Indoy Urbizfondo",
      "Mr. Cleto Sescon",
      "Mr. John Elven Vega",
      "Mr. Loreto Sayson",
    ],
    bride: [
      "Mrs. Vanessa Lynn Ernacio",
      "Mrs. Thelma Lagrimas",
      "Mrs. Grace Jeanette Fallesgon",
      "Mrs. Estelita Mancio",
      "Mrs. Imee Abegonia",
      "Mrs. Belinda Gutang",
      "Mrs. Jennifer Silao",
      "Mrs. Linda Urbiztondo",
      "Mrs. Arlyn Sescon",
      "Mrs. Nelissa Vega",
      "Mrs. Shirley Sayson",
      "Mrs. Nenita Putan",
      "Mrs. Gabriela Tañedo",
      "Mrs. Rosemarie Velasco",
      "Mrs. Ruby Watanabe",
    ],
  },

  bestMan: "Mr. Christian Joel Silao",
  matronOfHonor: "Mrs. Kristene Joy Molina",

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

export default function EntouragePage() {
  const { secondarySponsors: sec, principalSponsors: pri } = ENTOURAGE;

  return (
    <div className="story-page entourage-page">

      {/* Chapter heading */}
      <div className="chapter-heading">
        <span className="chapter-number">Chapter Four</span>
        <div className="story-divider" aria-hidden="true">
          <span className="divider-vine left" />
          <span className="divider-diamond">◆</span>
          <span className="divider-vine right" />
        </div>
        <h2 className="chapter-title">The Entourage</h2>
      </div>

      {/* ── Solemnizing Officer ── */}
      <div className="entourage-block entourage-block-center">
        <RoleTag>Solemnizing Officer</RoleTag>
        <p className="entourage-name">{ENTOURAGE.solemnizingOfficer}</p>
      </div>

      <div className="story-divider entourage-divider" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      {/* ── Parents ── */}
      <div className="entourage-two-col">
        <div className="entourage-block">
          <RoleTag>Parents of the Groom</RoleTag>
          <NameList names={ENTOURAGE.parentsOfGroom} />
        </div>
        <div className="entourage-block">
          <RoleTag>Parents of the Bride</RoleTag>
          <NameList names={ENTOURAGE.parentsOfBride} />
        </div>
      </div>

      <div className="story-divider entourage-divider" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      {/* ── Principal Sponsors ── */}
      <div className="entourage-block entourage-block-center">
        <SectionHeading>Principal Sponsors</SectionHeading>
        <div className="entourage-two-col entourage-two-col-sponsors">
          <NameList names={pri.groom} />
          <NameList names={pri.bride} />
        </div>
      </div>

      <div className="story-divider entourage-divider" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      {/* ── Best Man & Matron of Honor ── */}
      <div className="entourage-two-col">
        <div className="entourage-block">
          <RoleTag>Best Man</RoleTag>
          <p className="entourage-name">{ENTOURAGE.bestMan}</p>
        </div>
        <div className="entourage-block">
          <RoleTag>Matron of Honor</RoleTag>
          <p className="entourage-name">{ENTOURAGE.matronOfHonor}</p>
        </div>
      </div>

      <div className="story-divider entourage-divider" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

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
          <NameList names={ENTOURAGE.groomsmen} />
        </div>
        <div className="entourage-block">
          <RoleTag>Bridesmaids</RoleTag>
          <NameList names={ENTOURAGE.bridesmaids} />
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
          <p className="entourage-name">{ENTOURAGE.ringBearer}</p>
        </div>
        <div className="entourage-block">
          <RoleTag>Bible Bearer</RoleTag>
          <p className="entourage-name">{ENTOURAGE.bibleBearer}</p>
        </div>
        <div className="entourage-block">
          <RoleTag>Coin Bearer</RoleTag>
          <p className="entourage-name">{ENTOURAGE.coinBearer}</p>
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
          {ENTOURAGE.flowerGirls.map((n) => (
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
        <NameList names={ENTOURAGE.whiteAisleRunners} />
      </div>

      <div className="story-divider entourage-divider" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      {/* ── Here Comes the Bride ── */}
      <div className="entourage-block entourage-block-center entourage-block-last">
        <RoleTag>&ldquo;Here Comes the Bride&rdquo;</RoleTag>
        <p className="entourage-name entourage-name-featured">{ENTOURAGE.hereComesTheBride}</p>
      </div>

    </div>
  );
}
