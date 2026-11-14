import Image from "next/image";

/* Scattered music notes — margins only, no overlap with photo or text */
const DECO = [
  /* Top area */
  { symbol: "♪",  top: "3%",  left: "10%", size: "1.5rem", rotate: "-15deg" },
  { symbol: "𝄞",  top: "3.5%", left: "88%", size: "1.7rem", rotate: "-8deg" },
  /* Left side */
  { symbol: "♪",  top: "38%", left: "4%",  size: "1.3rem", rotate: "20deg" },
  /* Right side */
  { symbol: "♫",  top: "42%", left: "92%", size: "1.3rem", rotate: "25deg" },
  /* Bottom area */
  { symbol: "𝄞",  top: "92%", left: "8%",  size: "1.6rem", rotate: "10deg" },
  { symbol: "♪",  top: "93%", left: "90%", size: "1.4rem", rotate: "-20deg" },
];

export default function MemoryPage() {
  return (
    <div className="story-page memory-page">
      {/* Printed musical decorations */}
      {DECO.map((d, i) => (
        <span
          key={i}
          className="memory-deco"
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

      {/* Title above the photo */}
      <h2 className="memory-phrase fade-in">A Symphony of Love</h2>

      {/* Keepsake Portrait Frame */}
      <div className="memory-image-wrapper fade-in-delay-1">
        <Image
          src="/image/Anjo (2).png"
          alt="Anjo & Pam Portrait"
          width={400}
          height={600}
          className="memory-image"
          priority
        />
      </div>

      {/* Bible Verse below the photo, left-aligned like a letter */}
      <div className="memory-verse-wrap fade-in-delay-2">
        <p className="memory-verse-quote">
          &ldquo;I have found the one, whom my soul loves...&rdquo;
        </p>
        <p className="memory-verse-ref">Song of Solomon 3:4</p>
      </div>
    </div>
  );
}
