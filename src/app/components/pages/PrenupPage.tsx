"use client";

/* Subtle decorative musical accents around the page margins */
const DECO = [
  { symbol: "𝄞", top: "4%", left: "8%", size: "1.5rem", rotate: "-10deg" },
  { symbol: "♪", top: "5%", left: "90%", size: "1.3rem", rotate: "15deg" },
  { symbol: "♫", top: "92%", left: "12%", size: "1.3rem", rotate: "12deg" },
  { symbol: "♪", top: "93%", left: "88%", size: "1.4rem", rotate: "-15deg" },
];

const YOUTUBE_VIDEO_ID = "avxbUl-qzxY";

export default function PrenupPage() {

  return (
    <div className="story-page prenup-page">
      {/* Musical accents */}
      {DECO.map((d, i) => (
        <span
          key={i}
          className="prenup-deco"
          aria-hidden="true"
          style={{
            top: d.top,
            left: d.left,
            fontSize: d.size,
            transform: `rotate(${d.rotate})`,
          }}
        >
          {d.symbol}
        </span>
      ))}

      {/* Chapter / Prologue Heading */}
      <div className="chapter-heading fade-in">
        <h2 className="chapter-title">Our Prenup Film</h2>
      </div>

      <p className="prenup-tagline fade-in-delay-1">
          And now, a new chapter awaits...
      </p>

      {/* YouTube Embed in decorative parchment frame */}
      <div className="prenup-video-wrapper fade-in-delay-2">
        <div className="prenup-video-frame">
          <iframe
            className="prenup-video"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
            title="Anjo & Pam – Save the Date prenup video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: 0, width: "100%", height: "100%", aspectRatio: "16/9" }}
          />
        </div>
      </div>

      {/* Footer / Caption */}
      <div className="prenup-footer fade-in-delay-3">
        <div className="story-divider" aria-hidden="true">
          <span className="divider-vine left" />
          <span className="divider-diamond">◆</span>
          <span className="divider-vine right" />
        </div>
      </div>
    </div>
  );
}
