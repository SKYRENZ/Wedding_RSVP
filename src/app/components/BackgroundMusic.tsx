"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface BackgroundMusicProps {
  autoPlayTrigger?: boolean;
}

export default function BackgroundMusic({ autoPlayTrigger }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Smooth fade-in
  const fadeIn = useCallback(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    audio.volume = 0;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          let vol = 0;
          const targetVol = 0.45;
          const step = 0.05;
          const fadeInterval = setInterval(() => {
            if (!audio) {
              clearInterval(fadeInterval);
              return;
            }
            vol = Math.min(targetVol, vol + step);
            audio.volume = vol;
            if (vol >= targetVol) clearInterval(fadeInterval);
          }, 100);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  // Play / Pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    setHasInteracted(true);

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.45;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  // Trigger when book opens
  useEffect(() => {
    if (autoPlayTrigger && !hasInteracted && !isPlaying) {
      fadeIn();
    }
  }, [autoPlayTrigger, hasInteracted, isPlaying, fadeIn]);

  // Global listener for page-flip or custom audio events if needed
  useEffect(() => {
    const handleStartAudio = () => {
      if (!isPlaying && !hasInteracted) {
        fadeIn();
      }
    };

    window.addEventListener("storybook:open-book", handleStartAudio);
    return () => {
      window.removeEventListener("storybook:open-book", handleStartAudio);
    };
  }, [isPlaying, hasInteracted, fadeIn]);

  return (
    <div className="music-player-container">
      <audio
        ref={audioRef}
        src="/Audio/background-music.mp3"
        loop
        preload="auto"
      />

      <button
        type="button"
        className={`music-toggle-btn ${isPlaying ? "playing" : "paused"}`}
        onClick={togglePlay}
        aria-label={isPlaying ? "Mute background music" : "Play background music"}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        <span className="music-btn-inner">
          {isPlaying ? (
            /* Playing State: animated sound waves & note */
            <span className="music-icon-wrap" aria-hidden="true">
              <span className="sound-wave wave-1" />
              <span className="sound-wave wave-2" />
              <span className="sound-wave wave-3" />
            </span>
          ) : (
            /* Muted/Paused State: speaker with slash */
            <svg
              className="music-icon-muted"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
