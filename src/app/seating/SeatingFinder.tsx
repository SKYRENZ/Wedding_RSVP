"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { GuestInfo, searchGuests } from "@/data/seatingData";

export default function SeatingFinder() {
  const [query, setQuery] = useState("");
  const [selectedGuest, setSelectedGuest] = useState<GuestInfo | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter predictions
  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return searchGuests(query, 8);
  }, [query]);

  // Handle outside click to close suggestions dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectGuest = (guest: GuestInfo) => {
    setSelectedGuest(guest);
    setQuery(guest.name);
    setIsDropdownOpen(false);
    setHighlightedIndex(-1);
  };

  const handleClear = () => {
    setQuery("");
    setSelectedGuest(null);
    setIsDropdownOpen(false);
    setHighlightedIndex(-1);
    searchInputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isDropdownOpen || suggestions.length === 0) {
      if (e.key === "Enter" && query.trim()) {
        e.preventDefault();
        const top = searchGuests(query, 1);
        if (top.length > 0) {
          handleSelectGuest(top[0]);
        }
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
        handleSelectGuest(suggestions[highlightedIndex]);
      } else if (suggestions.length > 0) {
        handleSelectGuest(suggestions[0]);
      }
    } else if (e.key === "Escape") {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden bg-[#f5ebe0]">
      {/* Layer 1: Parchment texture background */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: "url('/storybook/parchment.png')",
        }}
        aria-hidden="true"
      />

      {/* Layer 2: Seating BG Photo at 50% opacity */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/image/Seating BG.JPG"
          alt="Wedding Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
      </div>

      {/* Layer 3: Soft ambient overlay to ensure optimal contrast */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#f5ebe0]/30 via-transparent to-[#f5ebe0]/40"
        aria-hidden="true"
      />

      {/* Corner Ornaments */}
      <div className="page-ornament top-left opacity-60" aria-hidden="true" />
      <div className="page-ornament top-right opacity-60" aria-hidden="true" />
      <div className="page-ornament bottom-left opacity-60" aria-hidden="true" />
      <div className="page-ornament bottom-right opacity-60" aria-hidden="true" />

      {/* Foreground Container - Compact width, not stretched */}
      <div className="relative z-10 w-full max-w-[280px] sm:max-w-[300px] flex flex-col items-center text-center">
        {/* Wedding Logo */}
        <div className="w-44 sm:w-52 mb-1 drop-shadow-md">
          <Image
            src="/logo/Wordlogo ate transparent.png"
            alt="Anjo & Pam"
            width={1568}
            height={1088}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Subtitle */}
        <p className="font-serif text-xs uppercase tracking-[0.25em] text-[#6d1a36] font-semibold mb-5 drop-shadow-sm">
          know your seat
        </p>

        {/* Name Search Input Field */}
        {!selectedGuest ? (
          <div className="w-full relative">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIsDropdownOpen(true);
                  setHighlightedIndex(-1);
                }}
                onFocus={() => {
                  if (query.trim() && suggestions.length > 0) {
                    setIsDropdownOpen(true);
                  }
                }}
                onKeyDown={handleKeyDown}
                placeholder="Enter your name..."
                className="w-full pl-4 pr-10 py-3.5 sm:py-4 bg-[#fdfaf5]/90 backdrop-blur-sm border border-[#c4a882] rounded-xl text-base font-serif text-[#24140a] shadow-lg placeholder:text-[#6b4c3b]/60 placeholder:italic focus:outline-none focus:ring-2 focus:ring-[#6d1a36]/40 focus:border-[#6d1a36] transition-all"
                autoComplete="off"
                aria-autocomplete="list"
                aria-expanded={isDropdownOpen}
              />

              {query && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#eddcd2] hover:bg-[#c4a882]/50 text-[#6b4c3b] flex items-center justify-center text-xs font-serif transition-colors"
                  aria-label="Clear name"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Predictive Text Dropdown */}
            {isDropdownOpen && suggestions.length > 0 && (
              <div
                ref={dropdownRef}
                className="absolute left-0 right-0 top-full mt-1.5 bg-[#fdfaf5]/95 backdrop-blur-md border border-[#c4a882] rounded-xl shadow-2xl overflow-hidden z-30 max-h-56 overflow-y-auto divide-y divide-[#c4a882]/20 text-left"
              >
                {suggestions.map((guest, idx) => {
                  const isHighlighted = idx === highlightedIndex;
                  return (
                    <button
                      key={guest.id}
                      type="button"
                      onClick={() => handleSelectGuest(guest)}
                      onMouseEnter={() => setHighlightedIndex(idx)}
                      className={`w-full text-left px-3.5 py-2.5 flex items-center justify-between gap-2 text-xs font-serif transition-colors ${
                        isHighlighted
                          ? "bg-[#c4a882]/35 text-[#2c1810]"
                          : "hover:bg-[#eddcd2]/50 text-[#24140a]"
                      }`}
                    >
                      <span className="font-medium truncate">{guest.name}</span>
                      <span className="text-[10px] text-[#6d1a36] italic shrink-0">
                        Select →
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* No match hint */}
            {query.trim().length >= 2 &&
              !isDropdownOpen &&
              suggestions.length === 0 && (
                <p className="text-center text-[11px] font-serif italic text-[#6d1a36] mt-3 drop-shadow-sm font-medium">
                  No match found. Please check spelling or try first name only.
                </p>
              )}
          </div>
        ) : (
          /* Table Result Reveal - Readable Font, Name & Table Number inside container, Search Again button outside with generous margin */
          <div className="w-full flex flex-col items-center">
            <div className="w-full bg-[#fdfaf5]/95 backdrop-blur-md border border-[#c4a882] rounded-2xl shadow-2xl px-6 py-8 text-center text-[#24140a] animate-slideUp">
              <h2
                className="text-2xl sm:text-3xl font-medium text-[#2c1810] leading-snug tracking-normal mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {selectedGuest.name}
              </h2>

              <div className="h-[1px] w-12 bg-[#c4a882]/50 mx-auto my-3" />

              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#6d1a36] tracking-wide">
                Table {selectedGuest.tableNumber}
              </p>
            </div>

            <button
              type="button"
              onClick={handleClear}
              className="mt-12 px-9 py-3.5 bg-gradient-to-r from-[#6d1a36] to-[#8b2252] text-[#faf6ef] text-xs font-serif font-medium uppercase tracking-[0.2em] rounded-full border border-[#c4a882]/80 shadow-xl hover:shadow-2xl hover:from-[#5a142c] hover:to-[#741b43] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer animate-slideUp"
            >
              Search again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
