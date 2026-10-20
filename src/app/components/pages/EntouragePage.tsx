import React from "react";

/* ─────────────────────────────────────────────
   EntouragePage1.tsx — Chapter Four (Page 1)
   First half: up to Best Man & Matron of Honor
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
};

/* ── Small reusable sub-components ────────── */

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

export default function EntouragePage1() {
  const { principalSponsors: pri } = ENTOURAGE;

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
        <div className="entourage-section-heading">
          <span className="divider-vine left" />
          <span className="entourage-section-title">Principal Sponsors</span>
          <span className="divider-vine right" />
        </div>
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

    </div>
  );
}
