"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type IntroContextValue = {
  replay: (trigger: HTMLButtonElement) => void;
};

const IntroContext = createContext<IntroContextValue | null>(null);
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function IntroExperience({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);
  const [replayCount, setReplayCount] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const skipRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const wasOpenRef = useRef(false);

  useIsomorphicLayoutEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
    const updateMotionPreference = () => setReducedMotion(motionQuery.matches);
    motionQuery.addEventListener("change", updateMotionPreference);
    let markSeenFrame = 0;

    try {
      if (window.sessionStorage.getItem("gv8-intro-seen") === "1") {
        setOpen(false);
      } else {
        window.sessionStorage.setItem("gv8-intro-seen", "pending");
        markSeenFrame = window.requestAnimationFrame(() => {
          try {
            window.sessionStorage.setItem("gv8-intro-seen", "1");
          } catch {
            // The opener remains usable if storage becomes unavailable mid-session.
          }
        });
      }
    } catch {
      // If session storage is unavailable, omit the automatic intro; the site remains usable.
      setOpen(false);
    }

    return () => {
      window.cancelAnimationFrame(markSeenFrame);
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const replay = useCallback((trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setReplayCount((count) => count + 1);
    setOpen(true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const page = document.querySelector<HTMLElement>("main#top");
    const previousInert = page?.inert ?? false;
    document.body.style.overflow = "hidden";
    if (page) page.inert = true;
    const focusFrame = window.requestAnimationFrame(() => skipRef.current?.focus());
    const dismissAfter = window.setTimeout(close, reducedMotion ? 900 : 3900);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const controls = Array.from(
        document.querySelectorAll<HTMLButtonElement>(
          ".intro-overlay button:not([disabled])",
        ),
      );
      if (!controls.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.clearTimeout(dismissAfter);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (page) page.inert = previousInert;
    };
  }, [open, reducedMotion, close]);

  useIsomorphicLayoutEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      return;
    }
    if (!wasOpenRef.current) return;
    wasOpenRef.current = false;
    const target = triggerRef.current ?? document.querySelector<HTMLElement>("#main-content");
    triggerRef.current = null;
    window.requestAnimationFrame(() => target?.focus());
  }, [open]);

  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches || !("IntersectionObserver" in window) || targets.length === 0) {
      return;
    }

    let observer: IntersectionObserver | null = null;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in-view");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -45px 0px" },
      );
      root.classList.add("motion-ready");
      targets.forEach((target) => observer?.observe(target));
    } catch {
      root.classList.remove("motion-ready");
      observer?.disconnect();
      return;
    }

    // Fail open if an observer target is not reached or the browser suspends observation.
    const failOpen = window.setTimeout(() => root.classList.remove("motion-ready"), 9000);
    return () => {
      window.clearTimeout(failOpen);
      root.classList.remove("motion-ready");
      observer?.disconnect();
    };
  }, []);

  return (
    <IntroContext.Provider value={{ replay }}>
      {children}
      <noscript>
        <style>{`.intro-overlay { display: none !important; }`}</style>
      </noscript>
      {open && (
        <div
          aria-describedby="gv8-intro-description"
          aria-labelledby="gv8-intro-title"
          aria-modal="true"
          className="intro-overlay"
          data-reduced={reducedMotion ? "true" : "false"}
          key={replayCount}
          role="dialog"
        >
          <div aria-hidden="true" className="intro-grid" />
          <div aria-hidden="true" className="intro-light-sweep" />
          <div className="intro-topline">
            <span className="intro-wordmark"><i>GV</i> GV8 <b>GLOBAL SOLUTIONS</b></span>
            <button className="intro-skip" onClick={close} ref={skipRef} type="button">
              Skip intro <span aria-hidden="true">↗</span>
            </button>
          </div>

          <div aria-hidden="true" className="intro-route-art">
            <span className="intro-orbit intro-orbit-one" />
            <span className="intro-orbit intro-orbit-two" />
            <span className="intro-route-line" />
            <span className="intro-route-pin intro-route-pin-gh">GH</span>
            <span className="intro-route-pin intro-route-pin-uk">UK</span>
            <span className="intro-route-spark">✦</span>
            <span className="intro-emblem">GV8</span>
          </div>

          <div className="intro-copy">
            <p className="intro-kicker"><span /> GHANA <i>→</i> UNITED KINGDOM</p>
            <h2 id="gv8-intro-title">From origin <em>to opportunity.</em></h2>
            <p id="gv8-intro-description">
              A clearer route from Ghanaian products to UK customers.
            </p>
            <button className="intro-enter" onClick={close} type="button">
              Explore GV8 <span aria-hidden="true">↗</span>
            </button>
          </div>

          <div aria-hidden="true" className="intro-bottomline">
            <span>PREPARE&nbsp; / &nbsp;STORE&nbsp; / &nbsp;DISPATCH</span>
            <span className="intro-progress"><i /></span>
            <span>AN EXPORT ROUTE, MADE PRACTICAL</span>
          </div>
        </div>
      )}
    </IntroContext.Provider>
  );
}

export function IntroReplayButton() {
  const context = useContext(IntroContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  if (!context) return null;

  return (
    <button
      aria-label="Replay the GV8 brand introduction"
      className="intro-replay"
      onClick={() => {
        if (buttonRef.current) context.replay(buttonRef.current);
      }}
      ref={buttonRef}
      type="button"
    >
      Play brand intro <span aria-hidden="true">↗</span>
    </button>
  );
}
