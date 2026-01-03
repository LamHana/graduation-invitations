"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      // Ensure settings are correct before playing
      audio.volume = 0.7;
      audio.muted = false;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            hasStartedRef.current = true;
          })
          .catch(() => {
            // Silently handle play errors
          });
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume to 70% and ensure it's not muted
    audio.volume = 0.7;
    audio.muted = false;

    // Add event listeners for user interaction
    // Note: Only click, touchstart, and keydown are valid user gestures for audio
    // Scroll events do NOT count as valid user gestures

    const playAudioDirectly = () => {
      if (!audio || hasStartedRef.current) return;

      // Ensure settings are correct
      audio.volume = 0.7;
      audio.muted = false;

      // Play directly - this must be called synchronously from user gesture
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            hasStartedRef.current = true;
            setIsPlaying(true);
          })
          .catch(() => {
            // Silently handle play errors
          });
      }
    };

    const clickHandler = () => {
      playAudioDirectly();
    };

    const touchHandler = () => {
      playAudioDirectly();
    };

    const keyHandler = () => {
      playAudioDirectly();
    };

    // Use capture phase and make sure we catch the event early
    document.addEventListener("click", clickHandler, { capture: true, once: false });
    document.addEventListener("touchstart", touchHandler, { capture: true, once: false });
    document.addEventListener("keydown", keyHandler, { capture: true, once: false });

    // Track play/pause state changes
    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      document.removeEventListener("click", clickHandler, { capture: true });
      document.removeEventListener("touchstart", touchHandler, { capture: true });
      document.removeEventListener("keydown", keyHandler, { capture: true });
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/mom/audio.mp3"
        loop
        preload="auto"
      />
      <button
        onClick={togglePlayPause}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#5C4A3E] text-white shadow-lg transition-all hover:scale-110 hover:bg-[#4a3a2f] active:scale-95"
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        title={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 ml-0.5"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </>
  );
}
