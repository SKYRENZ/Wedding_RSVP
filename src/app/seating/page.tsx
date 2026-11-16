import type { Metadata, Viewport } from "next";
import SeatingFinder from "./SeatingFinder";

export const metadata: Metadata = {
  title: "Find Your Table — Anjo & Pam's Wedding",
  description:
    "Search your name to find your table assignment and seatmates for the wedding reception of Anjo & Pam.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function SeatingPage() {
  return (
    <main className="w-full min-h-screen">
      <SeatingFinder />
    </main>
  );
}
