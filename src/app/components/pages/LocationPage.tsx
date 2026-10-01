"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

/* ─── Venue data ─── */
const VENUE = {
  name: "Don Jose Heights",
  address:
    "59 Doña Carmen Avenue, Don Jose Heights Subdivision, Brgy. Commonwealth, Quezon City",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=59+Dona+Carmen+Ave,+Don+Jose+Heights+Subdivision,+Brgy.+Commonwealth,+Quezon+City",
  locations: [
    {
      label: "Ceremony",
      place: "The Atrium",
      time: "3:00 PM",
    },
    {
      label: "Reception",
      place: "Clubhouse",
      time: "5:00 PM",
    },
  ],
};

const GALLERY_CARDS = [
  { id: 1, label: "Ceremony", src: "/place/ceremony.jpg" },
  { id: 2, label: "Clubhouse", src: "/place/Don Jose Heights Clubhouse.jpg" },
  { id: 3, label: "The Atrium", src: "/place/Don Jose Heights The Atrium.jpg" },
];

const AUTO_PLAY_MS = 5000;
const SWIPE_THRESHOLD = 50;

export default function LocationPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStartX = useRef(0);
  const dragging = useRef(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = GALLERY_CARDS.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total]
  );

  /* Auto-advance */
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_PLAY_MS);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [total]);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_PLAY_MS);
  }, [total]);

  /* Drag handlers */
  const onDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    dragging.current = true;
  };

  const onDragEnd = (clientX: number) => {
    if (!dragging.current) return;
    dragging.current = false;
    const diff = dragStartX.current - clientX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      goTo(diff > 0 ? activeIndex + 1 : activeIndex - 1);
      resetAutoPlay();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDragStart(e.clientX);
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDragEnd(e.clientX);
  };
  const handleMouseLeave = (e: React.MouseEvent) => {
    if (dragging.current) onDragEnd(e.clientX);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    onDragStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    onDragEnd(e.changedTouches[0].clientX);
  };

  return (
    <div className="story-page location-page">
      {/* Chapter heading */}
      <div className="chapter-heading">
        <span className="chapter-number">Chapter Two</span>
        <div className="story-divider" aria-hidden="true">
          <span className="divider-vine left" />
          <span className="divider-diamond">◆</span>
          <span className="divider-vine right" />
        </div>
        <h2 className="chapter-title">The Celebration</h2>
      </div>

      {/* Venue name */}
      <div className="location-venue">
        <h3 className="venue-name">{VENUE.name}</h3>
        <p className="venue-address">{VENUE.address}</p>
      </div>

      {/* Event timeline */}
      <div className="event-timeline">
        {VENUE.locations.map((loc) => (
          <div key={loc.label} className="timeline-item">
            <div className="timeline-marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="timeline-icon">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div className="timeline-info">
              <span className="timeline-label">{loc.label}</span>
              <span className="timeline-place">{loc.place}</span>
              <span className="timeline-time">{loc.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Photo carousel */}
      <div className="story-carousel">
        <div
          className="carousel-viewport"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: "grab" }}
        >
          {GALLERY_CARDS.map((card, i) => {
            const offset = i - activeIndex;
            return (
              <div
                key={card.id}
                className={`carousel-card ${offset === 0 ? "active" : ""}`}
                style={{
                  transform: `translateX(${offset * 105}%) scale(${offset === 0 ? 1 : 0.88})`,
                  opacity: Math.abs(offset) > 1 ? 0 : offset === 0 ? 1 : 0.5,
                  zIndex: offset === 0 ? 2 : 1,
                  pointerEvents: "none",
                }}
              >
                <Image
                  src={card.src}
                  alt={card.label}
                  fill
                  className="carousel-image"
                  sizes="(max-width: 768px) 55vw, 280px"
                  draggable={false}
                />
                <span className="carousel-image-label">{card.label}</span>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="carousel-dots">
          {GALLERY_CARDS.map((card, i) => (
            <button
              key={card.id}
              className={`carousel-dot ${i === activeIndex ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                goTo(i);
                resetAutoPlay();
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Map Link */}
      <a
        href={VENUE.mapLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="map-button"
        onClick={(e) => e.stopPropagation()}
      >
        <svg
          className="map-button-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
        View on Map
      </a>

      <p className="story-footer-text">Dinner and Dancing to Follow</p>
    </div>
  );
}
