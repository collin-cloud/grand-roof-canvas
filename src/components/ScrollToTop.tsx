import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Scroll behavior on route change:
 * - PUSH / REPLACE (normal navigation): scroll to top.
 * - POP (browser back/forward): restore the scroll position the user had on
 *   that page when they navigated away, so they land exactly where they left
 *   off (e.g. the same spot on the homepage).
 *
 * We track positions per `key` from React Router's location, which is unique
 * per history entry — this correctly distinguishes multiple visits to the
 * same pathname.
 */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef<Map<string, number>>(new Map());
  const currentKey = useRef<string>(location.key);

  // Continuously record the current page's scroll position, keyed by history
  // entry, so we can restore it on POP.
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleScroll = () => {
      positions.current.set(currentKey.current, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Save the latest scroll position for the page we're leaving.
    positions.current.set(currentKey.current, window.scrollY);
    currentKey.current = location.key;

    if (navigationType === "POP") {
      const saved = positions.current.get(location.key) ?? 0;
      window.scrollTo({ top: saved, left: 0, behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.key, navigationType]);

  return null;
}
