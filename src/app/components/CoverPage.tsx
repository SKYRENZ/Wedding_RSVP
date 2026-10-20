"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface CoverPageProps {
  onOpen: () => void;
}

/* Image is approximately 960 × 1280 px (portrait). */
const IMG_W = 960;
const IMG_H = 1280;

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
          src="/storybook/final cover book.png"
          alt="Wedding Keepsake Book Cover"
          fill
          priority
          sizes="(max-aspect-ratio: 960/1280) 100vw, calc(100vh * 960 / 1280)"
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
