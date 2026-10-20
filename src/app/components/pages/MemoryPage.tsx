import Image from "next/image";

/* Scattered music notes & drumstick decorations — margins only, no overlap with photo */
const DECO = [
  /* Top area */
  { symbol: "♪",  top: "3%",  left: "12%", size: "1.6rem", rotate: "-15deg" },
  { symbol: "🥢", top: "2%",  left: "75%", size: "1.3rem", rotate: "45deg" },
  { symbol: "♫",  top: "6%",  left: "45%", size: "1.4rem", rotate: "12deg" },
  { symbol: "𝄞",  top: "4%",  left: "88%", size: "1.8rem", rotate: "-8deg" },
  /* Left side */
  { symbol: "♪",  top: "35%", left: "4%",  size: "1.3rem", rotate: "20deg" },
  { symbol: "🥢", top: "55%", left: "3%",  size: "1.2rem", rotate: "-40deg" },
  /* Right side */
  { symbol: "♫",  top: "40%", left: "92%", size: "1.3rem", rotate: "25deg" },
  { symbol: "🥢", top: "60%", left: "91%", size: "1.2rem", rotate: "-55deg" },
  /* Bottom area */
  { symbol: "𝄞",  top: "92%", left: "10%", size: "1.7rem", rotate: "10deg" },
  { symbol: "♪",  top: "94%", left: "50%", size: "1.4rem", rotate: "-20deg" },
  { symbol: "🥢", top: "93%", left: "85%", size: "1.3rem", rotate: "50deg" },
  { symbol: "♫",  top: "88%", left: "30%", size: "1.2rem", rotate: "18deg" },
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

      <div className="memory-image-wrapper">
        <Image
          src="/image/Anjo (2).png"
          alt="Anjo & Pam Portrait"
          width={400}
          height={600}
          className="memory-image"
        />
      </div>
      <p className="memory-phrase">A Symphony of Love</p>
    </div>
  );
}
