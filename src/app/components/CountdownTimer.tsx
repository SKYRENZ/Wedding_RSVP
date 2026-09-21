"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string; // ISO date string
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(target: string): TimeLeft {
  const difference = new Date(target).getTime() - Date.now();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Avoid hydration mismatch — placeholder on server
  if (!timeLeft) {
    return (
      <div className="countdown-wrapper" aria-label="Loading countdown">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="countdown-card">
            <span className="countdown-number">—</span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  const entries: { label: string; value: number }[] = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="countdown-wrapper">
      {entries.map(({ label, value }) => (
        <div key={label} className="countdown-card">
          <span className="countdown-number">
            {String(value).padStart(2, "0")}
          </span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
