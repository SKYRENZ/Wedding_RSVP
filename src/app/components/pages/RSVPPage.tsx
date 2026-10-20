"use client";

import { useState } from "react";

const FORM_ID =
  "1FAIpQLSdtioik7IDTcJMUC7e9pnlnJokWamsAQpV98KtieQTdJFrm_Q";
const FORM_ACTION = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
const FORM_EMBED = `https://docs.google.com/forms/d/e/${FORM_ID}/viewform?embedded=true`;

/* ─── Field entry IDs ───────────────────────────────────────
   To find the real IDs: open the published form URL in Chrome
   → right-click → View Page Source → Ctrl+F "entry."
   Each <input> / <textarea> will have name="entry.XXXXXXXXXX"
   Update the values below once you have them.
   ─────────────────────────────────────────────────────────── */
const ENTRY = {
  name:    "entry.867755506",  // Name of Guest
  contact: "entry.1557163618", // Contact Number
  email:   "entry.1314086610", // Email Address
  message: "entry.162719962",  // Message
  attend:  "entry.508119117",  // Will you attend?
} as const;

type Status = "idle" | "submitting" | "success" | "error";

export default function RSVPPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [showEmbedded, setShowEmbedded] = useState(false);

  /* ─── Embedded Google Form fallback ─── */
  if (showEmbedded) {
    return (
      <div className="story-page rsvp-page">
        <div className="chapter-heading">
          <span className="chapter-number">Chapter Five</span>
          <div className="story-divider" aria-hidden="true">
            <span className="divider-vine left" />
            <span className="divider-diamond">◆</span>
            <span className="divider-vine right" />
          </div>
          <h2 className="chapter-title">Reply to Our Story</h2>
        </div>
        <p className="rsvp-deadline">
          Kindly reply on or before <strong>November 30, 2026</strong>
        </p>
        <div className="rsvp-iframe-wrap">
          <iframe
            src={FORM_EMBED}
            title="RSVP Form — Anjo & Pam"
            className="rsvp-iframe"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            onClick={(e) => e.stopPropagation()}
          >
            Loading…
          </iframe>
        </div>
        <button
          className="rsvp-fallback-link"
          onClick={(e) => {
            e.stopPropagation();
            setShowEmbedded(false);
          }}
        >
          ← Back to styled form
        </button>
      </div>
    );
  }

  /* ─── Success screen ─── */
  if (status === "success") {
    return (
      <div className="story-page rsvp-page rsvp-success">
        <div className="wax-seal wax-seal-success" aria-hidden="true">
          <span className="seal-monogram">✓</span>
        </div>
        <div className="story-divider" aria-hidden="true">
          <span className="divider-vine left" />
          <span className="divider-diamond">◆</span>
          <span className="divider-vine right" />
        </div>
        <h2 className="rsvp-success-heading">
          Your RSVP has been received!
        </h2>
        <p className="rsvp-success-text">
          Thank you for letting us know. We can&apos;t wait to celebrate
          with you on our special day.
        </p>
        <div className="story-divider" aria-hidden="true">
          <span className="divider-vine left" />
          <span className="divider-diamond">◆</span>
          <span className="divider-vine right" />
        </div>
        <p className="story-vows">
          With love,
          <br />
          Anjo &amp; Pam
        </p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    fetch(FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  return (
    <div className="story-page rsvp-page">

      {/* Chapter heading */}
      <div className="chapter-heading">
        <span className="chapter-number">Chapter Five</span>
        <div className="story-divider" aria-hidden="true">
          <span className="divider-vine left" />
          <span className="divider-diamond">◆</span>
          <span className="divider-vine right" />
        </div>
        <h2 className="chapter-title">Reply to Our Story</h2>
      </div>

      <p className="rsvp-deadline">
        Kindly reply on or before <strong>November 30, 2026</strong>
      </p>

      {/* Reminder callout */}
      <div className="rsvp-reminder">
        <p className="rsvp-reminder-title">📌 RSVP Reminder</p>
        <p className="rsvp-reminder-body">
          We have limited our invites to the people closest to us.
        </p>
        <p className="rsvp-reminder-note">
          Unless otherwise stated, this invite is for{" "}
          <strong>ONE (1) seat ONLY.</strong>
        </p>
      </div>

      {status === "error" && (
        <p className="rsvp-error-msg">
          Oops! Something went wrong.{" "}
          <button
            className="rsvp-fallback-link rsvp-fallback-inline"
            onClick={(e) => {
              e.stopPropagation();
              setShowEmbedded(true);
            }}
          >
            Use Google&apos;s form directly.
          </button>
        </p>
      )}

      <form id="rsvp-form" className="rsvp-form" onSubmit={handleSubmit}>

        {/* Name of Guest */}
        <div className="rsvp-field">
          <label htmlFor="rsvp-name" className="rsvp-label">
            Name of Guest <span className="rsvp-required">*</span>
          </label>
          <input
            id="rsvp-name"
            name={ENTRY.name}
            type="text"
            required
            placeholder="Your full name"
            className="rsvp-input"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {/* Contact Number */}
        <div className="rsvp-field">
          <label htmlFor="rsvp-contact" className="rsvp-label">
            Contact Number <span className="rsvp-required">*</span>
          </label>
          <input
            id="rsvp-contact"
            name={ENTRY.contact}
            type="tel"
            required
            placeholder="e.g. 09XX XXX XXXX"
            className="rsvp-input"
            maxLength={11}
            pattern="[0-9]{11}"
            inputMode="numeric"
            onKeyDown={(e) => {
              const allowed = ["Backspace","Delete","ArrowLeft","ArrowRight","Tab","Home","End"];
              if (!allowed.includes(e.key) && !/^[0-9]$/.test(e.key)) {
                e.preventDefault();
              }
            }}
            onInput={(e) => {
              const el = e.currentTarget;
              el.value = el.value.replace(/\D/g, "").slice(0, 11);
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {/* Email Address */}
        <div className="rsvp-field">
          <label htmlFor="rsvp-email" className="rsvp-label">
            Email Address
          </label>
          <input
            id="rsvp-email"
            name={ENTRY.email}
            type="email"
            placeholder="your@email.com"
            className="rsvp-input"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {/* Will you attend? */}
        <div className="rsvp-field">
          <p className="rsvp-label">
            Will you attend? <span className="rsvp-required">*</span>
          </p>
          <div className="rsvp-radio-group">
            {[
              { value: "Yes! I will be there.", label: "Yes! I will be there." },
              { value: "Sorry, I can't make it.", label: "Sorry, I can't make it." },
            ].map((opt) => (
              <label key={opt.value} className="rsvp-radio-label">
                <input
                  type="radio"
                  name={ENTRY.attend}
                  value={opt.value}
                  required
                  className="rsvp-radio"
                  onClick={(e) => e.stopPropagation()}
                />
                <span className="rsvp-radio-custom" aria-hidden="true" />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="rsvp-field">
          <label htmlFor="rsvp-message" className="rsvp-label">
            Message
          </label>
          <textarea
            id="rsvp-message"
            name={ENTRY.message}
            rows={2}
            placeholder="A note for the couple…"
            className="rsvp-textarea"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        <div className="rsvp-actions">
          <button
            type="submit"
            id="rsvp-submit-btn"
            className="rsvp-submit-btn"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              "Sending…"
            ) : (
              <>
                Send with Love
                <svg
                  className="rsvp-btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22 11 13 2 9l20-7z" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>

      <button
        className="rsvp-fallback-link"
        onClick={(e) => {
          e.stopPropagation();
          setShowEmbedded(true);
        }}
      >
        Prefer to use Google&apos;s form instead?
      </button>
    </div>
  );
}
