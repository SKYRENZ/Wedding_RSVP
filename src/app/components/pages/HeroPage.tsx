import CountdownTimer from "../CountdownTimer";

const WEDDING_DATE = "2026-12-21T15:00:00";

export default function HeroPage() {
  return (
    <div className="story-page hero-page">
      {/* Decorative wax seal */}
      <div className="wax-seal" aria-hidden="true">
        <span className="seal-monogram">A&P</span>
      </div>

      <p className="story-prelude fade-in">Once Upon a Time,</p>
      <p className="story-subtitle fade-in-delay-1">Two Hearts Found Their Forever.</p>

      <div className="story-divider fade-in-delay-1" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      <p className="story-invitation fade-in-delay-2">
        Together with their families<br />
        you are cordially invited to<br />
        the wedding of
      </p>

      <h1 className="story-names fade-in-delay-2">
        <span className="name-script">Anjo Lafayette</span>
        <span className="name-and">&amp;</span>
        <span className="name-script">Pamila Mae</span>
      </h1>

      <p className="story-vows fade-in-delay-3">
        As they exchange vows<br />
        and begin their greatest adventure together
      </p>

      <div className="story-divider fade-in-delay-3" aria-hidden="true">
        <span className="divider-vine left" />
        <span className="divider-diamond">◆</span>
        <span className="divider-vine right" />
      </div>

      <div className="story-date fade-in-delay-4">
        <span className="date-day">Saturday</span>
        <div className="date-highlight">
          <span className="date-month">December</span>
          <span className="date-number">21</span>
          <span className="date-year">2026</span>
        </div>
        <span className="date-time">At Three O&apos;clock in the Afternoon</span>
      </div>

      {/* Countdown */}
      <div className="story-countdown fade-in-delay-5">
        <CountdownTimer targetDate={WEDDING_DATE} />
      </div>
    </div>
  );
}
