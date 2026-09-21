"use client";

import { useState } from "react";
import { QuarterNote, EighthNote } from "../components/MusicIcons";

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
  { id: 1, label: "Ceremony" },
  { id: 2, label: "Reception" },
  { id: 3, label: "Garden" },
];

export default function PlaceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    const total = GALLERY_CARDS.length;
    setActiveIndex(((index % total) + total) % total);
  };

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

      {/* ── Image Carousel ── */}
      <div className="carousel-container">
        <div className="carousel-viewport">
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
                }}
              >
                {/* Placeholder — replace with <Image> later */}
                <div className="carousel-placeholder">
                  <QuarterNote className="w-6 text-[var(--color-tan)] opacity-40" />
                  <span className="carousel-placeholder-label">{card.label}</span>
                </div>
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
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next slide"
        >
          ›
        </button>
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
