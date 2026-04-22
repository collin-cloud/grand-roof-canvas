import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Scroll behavior on route change:
 * - PUSH / REPLACE (normal navigation): scroll to top.
 * - POP (browser back/forward): restore the scroll position the user had on
 *   that page when they navigated away.
 *
 * Restoration is robust against late-loading content (lazy routes, images,
 * animated sections that mount over time): we retry the scroll on each
 * animation frame until either the document is tall enough to reach the
 * target, or we hit a timeout.
 */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const RESTORE_TIMEOUT_MS = 1500;

export default function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef<Map<string, number>>(new Map());
  const currentKey = useRef<string>(location.key);
  const rafId = useRef<number | null>(null);
  const restoreDeadline = useRef<number>(0);

  // Continuously record the current page's scroll position, keyed by history
  // entry, so we can restore it on POP.
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        positions.current.set(currentKey.current, window.scrollY);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Cancel any in-flight restore loop from a previous navigation.
    if (rafId.current !== null) {
      window.cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }

    // Save the latest scroll position for the page we're leaving.
    positions.current.set(currentKey.current, window.scrollY);
    currentKey.current = location.key;

    if (navigationType !== "POP") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const target = positions.current.get(location.key) ?? 0;

    if (target <= 0) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    // Retry scrolling on each frame until the document is tall enough to
    // actually land on `target`, or we run out of time.
    restoreDeadline.current = performance.now() + RESTORE_TIMEOUT_MS;

    const tryRestore = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      window.scrollTo({ top: target, left: 0, behavior: "instant" });

      const reached = Math.abs(window.scrollY - target) <= 2;
      const tallEnough = maxScroll >= target - 2;
      const expired = performance.now() >= restoreDeadline.current;

      if ((reached && tallEnough) || expired) {
        rafId.current = null;
        return;
      }

      rafId.current = window.requestAnimationFrame(tryRestore);
    };

    rafId.current = window.requestAnimationFrame(tryRestore);

    return () => {
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, [location.key, navigationType]);

  return null;
}
