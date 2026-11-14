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
    },
    {
      label: "Reception",
      place: "Clubhouse",
    },
  ],
};

const VENUE_PHOTOS = [
  {
    id: "atrium",
    label: "The Atrium",
    src: "/place/Don Jose Heights The Atrium.jpg",
    alt: "The Atrium Ceremony Venue",
  },
  {
    id: "clubhouse",
    label: "Clubhouse",
    src: "/place/Don Jose Heights Clubhouse.jpg",
    alt: "Clubhouse Reception Venue",
  },
];

export default function LocationPage() {
  return (
    <div className="story-page location-page">
      {/* Chapter heading */}
      <div className="chapter-heading fade-in">
        <span className="chapter-number">Chapter Two</span>
        <div className="story-divider" aria-hidden="true">
          <span className="divider-vine left" />
          <span className="divider-diamond">◆</span>
          <span className="divider-vine right" />
        </div>
        <h2 className="chapter-title">The Celebration</h2>
      </div>

      {/* Venue name */}
      <div className="location-venue fade-in-delay-1">
        <h3 className="venue-name">{VENUE.name}</h3>
        <p className="venue-address">{VENUE.address}</p>
      </div>

      {/* Event timeline */}
      <div className="event-timeline fade-in-delay-2">
        {VENUE.locations.map((loc) => (
          <div key={loc.label} className="timeline-item">
            <div className="timeline-marker">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="timeline-icon"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div className="timeline-info">
              <span className="timeline-label">{loc.label}</span>
              <span className="timeline-place">{loc.place}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Photos Showcase (No Carousel) */}
      <div className="location-gallery-grid fade-in-delay-3">
        {VENUE_PHOTOS.map((photo) => (
          <div key={photo.id} className="location-gallery-card">
            <div className="location-gallery-image-wrap">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="location-gallery-img"
                sizes="(max-width: 640px) 45vw, 240px"
              />
              <div className="location-gallery-overlay">
                <span className="location-gallery-label">{photo.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Link */}
      <a
        href={VENUE.mapLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="map-button fade-in-delay-4"
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
    </div>
  );
}
