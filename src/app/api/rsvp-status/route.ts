import { NextResponse } from "next/server";

// Set RSVP_STATUS_URL in your .env.local (and in your hosting env vars) to the
// deployed Google Apps Script web app URL. See README or docs for setup steps.
// If not set, falls back to FORM_CLOSED env var ("true" = closed).
const GAS_URL = process.env.RSVP_STATUS_URL ?? "";
const FORM_CLOSED_OVERRIDE = process.env.FORM_CLOSED === "true";

// Cache the result for 2 minutes
export const revalidate = 120;

export async function GET() {
  // --- Fallback: manual override via env var ---
  if (!GAS_URL) {
    return NextResponse.json({ accepting: !FORM_CLOSED_OVERRIDE });
  }

  // --- Primary: ask the Google Apps Script endpoint ---
  try {
    const res = await fetch(GAS_URL, {
      next: { revalidate: 120 },
    });
    const data = (await res.json()) as { accepting: boolean };
    return NextResponse.json({ accepting: data.accepting });
  } catch {
    // If the GAS endpoint is unreachable, fall back to the override
    return NextResponse.json({ accepting: !FORM_CLOSED_OVERRIDE });
  }
}
