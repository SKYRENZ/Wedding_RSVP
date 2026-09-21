"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { EighthNote } from "../components/MusicIcons";

/* ─── Venue data ─── */
const VENUE = {
  name: "Don Jose Heights",
  address: "59 Doña Carmen Avenue, Don Jose Heights Subdivision, Brgy. Commonwealth, Quezon City",
  mapEmbedUrl:
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Don+Jose+Heights+Subdivision,+Commonwealth,+Quezon+City&zoom=16",
  locations: [
    {
      icon: "🎵",
      label: "Ceremony",
      place: "Don Jose Heights — The Atrium",
    },
    {
      icon: "🎶",
      label: "Reception",
      place: "Don Jose Heights — Clubhouse",
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

export default function PlaceSection() {
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

  /* ── Auto-advance every 5s ── */
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_PLAY_MS);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [total]);

  /* Reset auto-play timer on manual interaction */
  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_PLAY_MS);
  }, [total]);

  /* ── Drag / swipe handlers ── */
  const onDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    dragging.current = true;
  };

  const onDragEnd = (clientX: number) => {
    if (!dragging.current) return;
    dragging.current = false;
    const diff = dragStartX.current - clientX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        goTo(activeIndex + 1);
      } else {
        goTo(activeIndex - 1);
      }
      resetAutoPlay();
    }
  };

  /* Mouse events */
  const handleMouseDown = (e: React.MouseEvent) => onDragStart(e.clientX);
  const handleMouseUp = (e: React.MouseEvent) => onDragEnd(e.clientX);
  const handleMouseLeave = (e: React.MouseEvent) => {
    if (dragging.current) onDragEnd(e.clientX);
  };

  /* Touch events */
  const handleTouchStart = (e: React.TouchEvent) => onDragStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => onDragEnd(e.changedTouches[0].clientX);

  return (
    <section className="place-section">
      {/* ── Heading ── */}
      <div className="place-heading">
        <div className="divider">
          <span className="divider-line" />
          <EighthNote className="w-4 text-[var(--color-tan)]" />
          <span className="divider-line" />
        </div>
        <p className="text-script pre-heading">The Celebration</p>
        <h2 className="text-serif place-title">{VENUE.name}</h2>
        <p className="place-address">{VENUE.address}</p>
      </div>

      {/* ── Venue location cards ── */}
      <div className="venue-cards">
        {VENUE.locations.map((loc) => (
          <div key={loc.label} className="venue-card">
            <div className="venue-card-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="venue-pin"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div className="venue-card-text">
              <span className="venue-card-label">{loc.label}</span>
              <span className="venue-card-place">{loc.place}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Image Carousel (drag + auto-play) ── */}
      <div className="carousel-container">
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
                  sizes="(max-width: 768px) 55vw, 340px"
                  draggable={false}
                />
                <span className="carousel-image-label">{card.label}</span>
              </div>
            );
          })}
        </div>

        {/* Nav dots */}
        <div className="carousel-dots">
          {GALLERY_CARDS.map((card, i) => (
            <button
              key={card.id}
              className={`carousel-dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => { goTo(i); resetAutoPlay(); }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Map ── */}
      <div className="map-container">
        <iframe
          src={VENUE.mapEmbedUrl}
          title="Venue Location"
          className="map-iframe"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
