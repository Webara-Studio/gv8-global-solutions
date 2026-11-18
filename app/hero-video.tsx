"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: EventTarget & { saveData?: boolean; effectiveType?: string } }).connection;
    const constrained = () => Boolean(connection?.saveData || ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? ""));
    let observer: IntersectionObserver | undefined;

    const stop = () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
    const start = () => {
      if (motionPreference.matches || constrained()) {
        stop();
        return;
      }
      video.src = "/videos/gv8-export-hero.mp4";
      video.load();
      void video.play().catch(() => undefined);
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      });
      observer.observe(video);
    } else {
      start();
    }

    const onPreferenceChange = () => motionPreference.matches ? stop() : start();
    const onConnectionChange = () => constrained() ? stop() : start();
    motionPreference.addEventListener("change", onPreferenceChange);
    connection?.addEventListener?.("change", onConnectionChange);

    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", onPreferenceChange);
      connection?.removeEventListener?.("change", onConnectionChange);
      stop();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-image hero-video"
      muted
      loop
      playsInline
      preload="none"
      poster="/images/gv8-export-hero-poster.jpg"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
