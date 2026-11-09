"use client";

import { useState } from "react";
import Image from "next/image";

export default function DetailsPage() {
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  const copyToClipboard = (tag: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(tag).then(() => {
        setCopiedTag(tag);
        setTimeout(() => setCopiedTag(null), 2000);
      });
    }
  };

  return (
    <div className="story-page details-page">
      {/* Chapter indicator */}
      <div className="chapter-heading fade-in">
        <span className="chapter-number">Chapter Five</span>
        <div className="story-divider" aria-hidden="true">
          <span className="divider-vine left" />
          <span className="divider-diamond">◆</span>
          <span className="divider-vine right" />
        </div>
      </div>

      {/* ─── SECTION 1: A GIFT OF LOVE (Monetary Gift) ─── */}
      <section className="details-section gift-section fade-in-delay-1">
        <div className="notebook-title-wrap">
          <span className="notebook-flourish" aria-hidden="true">❦</span>
          <h3 className="notebook-script-title">A Gift of Love</h3>
          <span className="notebook-flourish" aria-hidden="true">❦</span>
        </div>

        <div className="gift-content-layout">
          {/* QR Code Container */}
          <div className="qr-container-card">
            <div className="qr-image-wrapper">
              <Image
                src="/image/QR code.jpg"
                alt="UnionBank / InstaPay QR Code - Anjo Lafayette Banzon Silao"
                width={685}
                height={1005}
                className="qr-real-image"
                priority
              />
            </div>
            <span className="qr-scan-hint">✦ Scan to Send Gift ✦</span>
          </div>

          {/* Text Beside QR Code */}
          <p className="gift-message-text">
            Your presence is the greatest gift of all. If you wish to give something more, a monetary gift or contribution to our future together would be greatly appreciated.
          </p>
        </div>
      </section>

      {/* Gentle Notebook Divider */}
      <div className="notebook-divider" aria-hidden="true">
        <span className="notebook-divider-line" />
        <span className="notebook-divider-icon">◆</span>
        <span className="notebook-divider-line" />
      </div>

      {/* ─── SECTION 2: UNPLUGGED CEREMONY ─── */}
      <section className="details-section unplugged-section fade-in-delay-2">
        <div className="notebook-title-wrap">
          <span className="notebook-flourish" aria-hidden="true">❦</span>
          <h3 className="notebook-script-title">Unplugged Ceremony</h3>
          <span className="notebook-flourish" aria-hidden="true">❦</span>
        </div>
        <p className="details-body-text">
          We have invited a team to help us capture this day. So just be present and keep our ceremony camera free just until we say “I do”
        </p>
      </section>

      {/* Gentle Notebook Divider */}
      <div className="notebook-divider" aria-hidden="true">
        <span className="notebook-divider-line" />
        <span className="notebook-divider-icon">◆</span>
        <span className="notebook-divider-line" />
      </div>

      {/* ─── SECTION 3: WEDDING HASHTAG ─── */}
      <section className="details-section hashtag-section fade-in-delay-3">
        <div className="notebook-title-wrap">
          <span className="notebook-flourish" aria-hidden="true">❦</span>
          <h3 className="notebook-script-title">Wedding Hashtag</h3>
          <span className="notebook-flourish" aria-hidden="true">❦</span>
        </div>
        <p className="details-body-text">
          Help us capture the love and use our official hashtags
        </p>
        <div className="hashtag-list">
          {[
            "#ANJOurneytoforeverwithPAM",
            "#ANJOfoundhisPAMhabambuhay",
          ].map((tag) => (
            <button
              key={tag}
              type="button"
              className={`notebook-hashtag-tag ${copiedTag === tag ? "copied" : ""}`}
              onClick={() => copyToClipboard(tag)}
              title="Click to copy hashtag"
            >
              <span className="hashtag-text">{tag}</span>
              <span className="hashtag-copy-badge">
                {copiedTag === tag ? "✓ Copied" : "copy"}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
