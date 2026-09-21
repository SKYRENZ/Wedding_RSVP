import CountdownTimer from "../components/CountdownTimer";
import {
  QuarterNote,
  EighthNote,
  DoubleEighthNote,
} from "../components/MusicIcons";

/* Change this date when ready */
const WEDDING_DATE = "2026-12-25T15:00:00";

export default function HeroSection() {
  return (
    <section className="hero">
      {/* ── Subtle music note accents scattered around ── */}
      <QuarterNote className="note-accent w-5 top-[12%] left-[10%] rotate-[-12deg]" />
      <EighthNote className="note-accent w-4 top-[18%] right-[12%] rotate-[8deg]" />
      <DoubleEighthNote className="note-accent w-7 bottom-[15%] left-[8%] rotate-[15deg] note-hide-mobile" />
      <QuarterNote className="note-accent w-4 bottom-[20%] right-[10%] rotate-[-20deg]" />
      <EighthNote className="note-accent w-3 top-[45%] left-[4%] rotate-[25deg] note-hide-mobile" />
      <QuarterNote className="note-accent w-3 top-[50%] right-[5%] rotate-[-10deg] note-hide-mobile" />

      {/* ── Content ── */}
      <p className="text-script pre-heading tracking-wide fade-in">
        Together with their families
      </p>

      <div className="divider fade-in-delay-1">
        <span className="divider-line" />
        <DoubleEighthNote className="w-5 text-[var(--color-tan)]" />
        <span className="divider-line" />
      </div>

      <h1 className="text-serif couple-names fade-in-delay-2">
        Anjo
        <span className="text-script couple-amp">&amp;</span>
        Pam
      </h1>

      <div className="divider fade-in-delay-3">
        <span className="divider-line" />
        <QuarterNote className="w-3 text-[var(--color-tan)]" />
        <span className="divider-line" />
      </div>

      <p className="invitation-text fade-in-delay-4">
        Request the honour of your presence
        <br />
        at the celebration of their marriage
      </p>

      {/* ── Countdown ── */}
      <div className="countdown-section fade-in-delay-5">
        <p className="text-serif date-label">
          December 25, 2026
        </p>
        <CountdownTimer targetDate={WEDDING_DATE} />
      </div>
    </section>
  );
}
