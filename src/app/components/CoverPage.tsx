"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface CoverPageProps {
  onOpen: () => void;
}

/* Image is approximately 940 × 1248 px (portrait). */
const IMG_W = 940;
const IMG_H = 1248;

export default function CoverPage({ onOpen }: CoverPageProps) {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    if (exiting) return;
    setExiting(true);
    setTimeout(() => onOpen(), 700);
  };

  return (
    <div
      className={`cover-scene ${mounted ? "cover-visible" : ""} ${exiting ? "cover-exiting" : ""}`}
    >
      {/* ── Aspect-ratio-locked frame (entire area is clickable) ── */}
      <button
        className="cover-book-frame"
        style={{ aspectRatio: `${IMG_W} / ${IMG_H}` }}
        onClick={handleOpen}
        aria-label="Open wedding invitation"
      >
        <Image
          src="/storybook/Vintage Burgundy AP Music Journal Flat Lay.png"
          alt="Wedding Keepsake Book Cover"
          fill
          priority
          sizes="(max-aspect-ratio: 940/1248) 100vw, calc(100vh * 940 / 1248)"
          className="cover-img"
        />

        {/* ── Hint text – anchored to the bottom of the book frame ── */}
        <div className="cover-hint-bar" aria-hidden="true">
          <span className="cover-tap-hint">✦ Tap the Book to Open ✦</span>
        </div>
      </button>
    </div>
  );
}
