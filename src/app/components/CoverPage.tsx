"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface CoverPageProps {
  onOpen: () => void;
}

/*
 * The source image is 928 × 1169 px (portrait).
 * The gold wax seal centre sits at roughly:
 *   x ≈ 48.5 %   y ≈ 47 %   (measured from top-left of the image)
 * We lock the frame to the same aspect ratio so these percentages
 * stay accurate on every viewport size.
 */
const IMG_W = 928;
const IMG_H = 1169;
const SEAL_X = 48.5; // % from left
const SEAL_Y = 47;   // % from top

export default function CoverPage({ onOpen }: CoverPageProps) {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleSealClick = () => {
    if (exiting) return;
    setExiting(true);
    setTimeout(() => onOpen(), 700);
  };

  return (
    <div
      className={`cover-scene ${mounted ? "cover-visible" : ""} ${exiting ? "cover-exiting" : ""}`}
    >
      {/*
       * Dark wooden-table ambience behind the book frame
       * (matches the body background so the wood table bleeds naturally)
       */}

      {/* ── Aspect-ratio-locked frame ── */}
      <div
        className="cover-book-frame"
        style={{ aspectRatio: `${IMG_W} / ${IMG_H}` }}
      >
        <Image
          src="/storybook/Burgundy Wedding Keepsake with AP Seal.png"
          alt="Wedding Keepsake Book Cover"
          fill
          priority
          sizes="(max-aspect-ratio: 928/1169) 100vw, calc(100vh * 928 / 1169)"
          className="cover-img"
        />

        {/* ── Seal hotspot – pinned to the printed gold seal ── */}
        <button
          id="cover-seal-btn"
          className="cover-seal-btn"
          onClick={handleSealClick}
          aria-label="Open wedding invitation"
          style={{
            left: `${SEAL_X}%`,
            top: `${SEAL_Y}%`,
          }}
        >
          <span className="seal-glow-ring seal-glow-ring-1" aria-hidden="true" />
          <span className="seal-glow-ring seal-glow-ring-2" aria-hidden="true" />
          <span className="seal-glow-ring seal-glow-ring-3" aria-hidden="true" />
        </button>

        {/* ── Hint text – anchored to the bottom of the book frame ── */}
        <div className="cover-hint-bar" aria-hidden="true">
          <span className="cover-tap-hint">✦ Tap the Seal to Open ✦</span>
        </div>
      </div>
    </div>
  );
}
