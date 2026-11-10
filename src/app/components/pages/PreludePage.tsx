export default function PreludePage() {
  return (
    <div className="story-page prelude-page">
      {/* ── Header: Title & Divider ── */}
      <header className="prelude-header fade-in">
        <h2 className="prelude-title">Prelude</h2>
        <div className="story-divider" aria-hidden="true">
          <span className="divider-vine left" />
          <span className="divider-diamond">◆</span>
          <span className="divider-vine right" />
        </div>
      </header>

      {/* ── Letter Body ── */}
      <article className="prelude-letter-body fade-in-delay-1">
        <p className="prelude-para">
          A local church at the corner of a street, with only its roof visible
          from afar and its dusty concrete floor that often triggers an asthmatic
          member in coughing fits.
        </p>

        <p className="prelude-para prelude-accent-line">
          That&apos;s where they first met.
        </p>

        <p className="prelude-para">
          She had heard tales of his quirkiness, while he got to know her through
          church activities. Eventually, they developed a real camaraderie after
          going through good and bad times in the ministry. They were what you
          would call &ldquo;frenemies&rdquo;. They argued, exchanged opinions, and
          challenged each other, yet would still pat each other on the back at
          the end of every program they worked on.
        </p>

        <p className="prelude-para">
          Throughout their years in ministry, they wore many hats: the drummer
          and the worship singer preparing Sunday&apos;s worship, co-leaders in
          the youth ministry, the level head and the secretary, the event
          director and the program coordinator. Like two different instruments
          playing in harmony, each with its own rhythm, yet beautifully
          complementing the other.
        </p>

        <p className="prelude-para">
          From being good companions till the moment when she finally confessed,
          <br />
          &ldquo;I&apos;ve been admiring you for a while now,&rdquo; to which he
          simply replied,
          <br />
          &ldquo;Thank you. I appreciate it.&rdquo;
        </p>

        <p className="prelude-para">
          Then, they never spoke of it again. It was as if she hadn&apos;t just
          bared her heart and as if his own hadn&apos;t trembled at the thought of
          her.
          <br />
          And so they spent more years just being each other&apos;s companions,
          praying and waiting patiently, and all the same serving God faithfully.
        </p>

        <p className="prelude-para">
          Until one day, he asked, &ldquo;Can I court you?&rdquo;
          <br />
          She asked if he was serious and eventually answered, &ldquo;Sure.&rdquo;
        </p>

        <p className="prelude-para">
          Just as their courtship began, the pandemic came and brought their
          meetings and dates to a halt. You can only imagine the agony! Yet, as
          persistent as he was, the man found countless ways, almost like magic,
          to deliver goods and necessities to her.
        </p>

        <p className="prelude-para">
          And the lady? She couldn&apos;t contain her kilig; she said yes and
          officially hired him as her lover. Not really, but you get the idea.
        </p>

        <p className="prelude-para">
          Many more yesses followed. And one particular &ldquo;yes&rdquo; brought
          them to this very moment.
        </p>

        {/* ── Closing Sign-off ── */}
        <div className="prelude-closing">
          <p className="prelude-forever">A journey to forever.</p>
        </div>
      </article>
    </div>
  );
}
