"use client";

import { useState, useCallback, useRef } from "react";
import HeroPage from "./pages/HeroPage";
import LocationPage from "./pages/LocationPage";

const PAGES = [
  { id: "hero", Component: HeroPage },
  { id: "location", Component: LocationPage },
];

export default function Storybook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [flipTarget, setFlipTarget] = useState<number | null>(null);

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

  return (
    <div className="storybook-wrapper">
      {/* Ambient particles */}
      <div className="ambient-particles" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

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
