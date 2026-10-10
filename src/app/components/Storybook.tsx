"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import HeroPage from "./pages/HeroPage";
import LocationPage from "./pages/LocationPage";
import RSVPPage from "./pages/RSVPPage";
import CoverPage from "./CoverPage";

const PAGES = [
  { id: "hero", Component: HeroPage },
  { id: "location", Component: LocationPage },
  { id: "rsvp", Component: RSVPPage },
];

/* Pre-computed particle positions — fixed seeds avoid hydration mismatch */
const PARTICLE_COUNT = 12;
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  left:     `${((i * 37 + 13) % 97).toFixed(4)}%`,
  delay:    `${((i * 1.618 + 0.5) % 8).toFixed(4)}s`,
  duration: `${(6 + (i * 0.9 + 0.3) % 6).toFixed(4)}s`,
}));

export default function Storybook() {
  const [showCover, setShowCover] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [flipTarget, setFlipTarget] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleOpenBook = useCallback(() => {
    setShowCover(false);
  }, []);

  /* Swipe support */
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const totalPages = PAGES.length;

  const goToPage = useCallback(
    (direction: "next" | "prev") => {
      if (isFlipping) return;
      if (direction === "next" && currentPage >= totalPages - 1) return;
      if (direction === "prev" && currentPage <= 0) return;

      const target = direction === "next" ? currentPage + 1 : currentPage - 1;

      setFlipDirection(direction);
      setFlipTarget(target);
      setIsFlipping(true);

      setTimeout(() => {
        setCurrentPage(target);
        setIsFlipping(false);
        setFlipTarget(null);
      }, 800);
    },
    [currentPage, totalPages, isFlipping]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 60 && dy < 100) {
      if (dx > 0) goToPage("next");
      else goToPage("prev");
    }
  };

  const canGoNext = currentPage < totalPages - 1 && !isFlipping;
  const canGoPrev = currentPage > 0 && !isFlipping;

  /*
   * NEXT: current page flips AWAY → next page revealed underneath
   *   Base  = next page (static, underneath)
   *   Flip  = current page (animates 0° → -180°, flips away)
   *
   * PREV: previous page flips back INTO view → covers current page
   *   Base  = current page (static, underneath)
   *   Flip  = previous page (animates -180° → 0°, flips into view)
   */
  let BaseComponent = PAGES[currentPage].Component;
  let FlipComponent = PAGES[currentPage].Component;

  if (isFlipping && flipTarget !== null) {
    if (flipDirection === "next") {
      BaseComponent = PAGES[flipTarget].Component;   // next page underneath
      FlipComponent = PAGES[currentPage].Component;  // current flips away
    } else {
      BaseComponent = PAGES[currentPage].Component;  // current stays underneath
      FlipComponent = PAGES[flipTarget].Component;   // previous flips into view
    }
  }

  if (showCover) {
    return (
      <div className="storybook-wrapper">
        <CoverPage onOpen={handleOpenBook} />
      </div>
    );
  }

  return (
    <div className="storybook-wrapper">
      {/* Ambient particles — rendered client-side only to avoid hydration mismatch */}
      {mounted && (
        <div className="ambient-particles" aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              className="particle"
              style={{
                left: p.left,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>
      )}

      <div
        className="book-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`book ${isFlipping ? `flipping-${flipDirection}` : ""}`}>
          {/* Base layer — sits underneath */}
          <div className="book-page book-page-base">
            <div className="page-inner">
              <div className="page-ornament top-left" aria-hidden="true" />
              <div className="page-ornament top-right" aria-hidden="true" />
              <div className="page-ornament bottom-left" aria-hidden="true" />
              <div className="page-ornament bottom-right" aria-hidden="true" />
              <div className="page-border" aria-hidden="true" />
              <div className="page-content">
                <BaseComponent />
              </div>
            </div>
          </div>

          {/* Flip layer — animates on top */}
          {isFlipping && (
            <div className={`book-page book-page-flip flip-${flipDirection}`}>
              <div className="page-inner">
                <div className="page-ornament top-left" aria-hidden="true" />
                <div className="page-ornament top-right" aria-hidden="true" />
                <div className="page-ornament bottom-left" aria-hidden="true" />
                <div className="page-ornament bottom-right" aria-hidden="true" />
                <div className="page-border" aria-hidden="true" />
                <div className="page-content">
                  <FlipComponent />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Page curl — bottom right to go next */}
        {canGoNext && (
          <button
            className="page-curl page-curl-next"
            onClick={() => goToPage("next")}
            aria-label="Next page"
          >
            <div className="curl-fold" aria-hidden="true">
              <svg className="curl-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </button>
        )}

        {/* Page curl — bottom left to go back */}
        {canGoPrev && (
          <button
            className="page-curl page-curl-prev"
            onClick={() => goToPage("prev")}
            aria-label="Previous page"
          >
            <div className="curl-fold" aria-hidden="true">
              <svg className="curl-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
          </button>
        )}

        {/* Page indicator dots */}
        <div className="page-indicator" aria-hidden="true">
          {PAGES.map((_, i) => (
            <span
              key={i}
              className={`page-ind-dot ${i === currentPage ? "active" : ""}`}
            />
          ))}
        </div>

        {/* Hint on first page */}
        {currentPage === 0 && !isFlipping && (
          <div className="turn-hint fade-in-delay-5">
            <span>Turn the page</span>
            <span className="hint-arrow">→</span>
          </div>
        )}
      </div>
    </div>
  );
}
