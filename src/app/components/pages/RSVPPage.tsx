"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

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

/* Hand-written calligraphy checkmark */
function HandwrittenCheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 24 C12.5 26.5 16 32 19 37 C24 26.8 31 16.5 39.5 10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface SavedRsvpState {
  status: Status;
  name: string;
  contact: string;
  attend: string;
  message: string;
}

/* In-memory state preserved across page flips; resets only on page reload */
const savedRsvpState: SavedRsvpState = {
  status: "idle",
  name: "",
  contact: "",
  attend: "",
  message: "",
};

export default function RSVPPage() {
  const [status, setStatus] = useState<Status>(savedRsvpState.status);
  const [showEmbedded, setShowEmbedded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!showModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

  const confirmationModal =
    showModal && mounted && typeof document !== "undefined"
      ? createPortal(
          <div
            className="rsvp-floating-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="rsvp-modal-title"
            onClick={() => setShowModal(false)}
          >
            <div
              className="rsvp-floating-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="rsvp-modal-close-icon"
                onClick={() => setShowModal(false)}
                aria-label="Close confirmation"
              >
                ✕
              </button>

              <div className="wax-seal wax-seal-success" aria-hidden="true">
                <HandwrittenCheckIcon className="handwritten-check-icon" />
              </div>

              <h3 id="rsvp-modal-title" className="rsvp-modal-title">
                RSVP Confirmed
              </h3>

              <div className="story-divider" aria-hidden="true">
                <span className="divider-vine left" />
                <span className="divider-diamond">◆</span>
                <span className="divider-vine right" />
              </div>

              <p className="rsvp-modal-message">
                Thank you for confirming! We’re delighted to have you be part of our special day. We look forward to celebrating this beautiful chapter with you
              </p>

              <div className="story-divider" aria-hidden="true">
                <span className="divider-vine left" />
                <span className="divider-diamond">◆</span>
                <span className="divider-vine right" />
              </div>

              <div className="rsvp-modal-assistance-card">
                <p className="rsvp-modal-assistance">
                  For assistance kindly Contact Mrs Vicky Derla:{" "}
                  <a href="tel:09162728940" className="rsvp-modal-phone">
                    0916 272 8940
                  </a>
                </p>
              </div>

              <p className="rsvp-modal-couple">
                With love,
                <br />
                <span className="name-script">Anjo &amp; Pam</span>
              </p>

              <button
                type="button"
                className="rsvp-modal-action-btn"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>,
          document.body
        )
      : null;

  /* ─── Embedded Google Form fallback ─── */
  if (showEmbedded) {
    return (
      <div className="story-page rsvp-page">
        <div className="chapter-heading">
          <span className="chapter-number">Chapter Six</span>
          <div className="story-divider" aria-hidden="true">
            <span className="divider-vine left" />
            <span className="divider-diamond">◆</span>
            <span className="divider-vine right" />
          </div>
          <h2 className="chapter-title">Reply to Our Story</h2>
        </div>
        <p className="rsvp-deadline">
          Kindly reply on or before <strong>November 21, 2026</strong>
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
          <HandwrittenCheckIcon className="handwritten-check-icon" />
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
          Thank you for confirming! We’re delighted to have you be part of our special day. We look forward to celebrating this beautiful chapter with you
        </p>
        <div className="rsvp-modal-assistance-card" style={{ maxWidth: 360 }}>
          <p className="rsvp-modal-assistance">
            For assistance kindly Contact Mrs Vicky Derla:{" "}
            <a href="tel:09162728940" className="rsvp-modal-phone">
              0916 272 8940
            </a>
          </p>
        </div>
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
        <button
          type="button"
          className="rsvp-reopen-btn"
          onClick={() => setShowModal(true)}
        >
          View Confirmation Details
        </button>
        {confirmationModal}
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    savedRsvpState.status = "submitting";
    const formData = new FormData(e.currentTarget);
    savedRsvpState.name = (formData.get(ENTRY.name) as string) || "";
    savedRsvpState.contact = (formData.get(ENTRY.contact) as string) || "";
    savedRsvpState.attend = (formData.get(ENTRY.attend) as string) || "";
    savedRsvpState.message = (formData.get(ENTRY.message) as string) || "";

    fetch(FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        savedRsvpState.status = "success";
        setStatus("success");
        setShowModal(true);
      })
      .catch(() => {
        savedRsvpState.status = "error";
        setStatus("error");
      });
  };

  return (
    <div className="story-page rsvp-page">

      {/* Chapter heading */}
      <div className="chapter-heading">
        <span className="chapter-number">Chapter Six</span>
        <div className="story-divider" aria-hidden="true">
          <span className="divider-vine left" />
          <span className="divider-diamond">◆</span>
          <span className="divider-vine right" />
        </div>
        <h2 className="chapter-title">Reply to Our Story</h2>
      </div>

      <p className="rsvp-deadline">
        Kindly reply on or before <strong>November 21, 2026</strong>
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
            defaultValue={savedRsvpState.name}
            onChange={(e) => {
              savedRsvpState.name = e.target.value;
            }}
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
            defaultValue={savedRsvpState.contact}
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
              savedRsvpState.contact = el.value;
            }}
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
                  defaultChecked={savedRsvpState.attend === opt.value}
                  onChange={(e) => {
                    savedRsvpState.attend = e.target.value;
                  }}
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
            defaultValue={savedRsvpState.message}
            onChange={(e) => {
              savedRsvpState.message = e.target.value;
            }}
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

      {confirmationModal}
    </div>
  );
}
