import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Scroll behavior on route change:
 * - PUSH / REPLACE (normal navigation): scroll to top.
 * - POP (browser back/forward): let the browser restore the previous scroll
 *   position so users land exactly where they left off.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Opt out of the browser's automatic scroll restoration so we control it
    // explicitly — but only override on PUSH/REPLACE navigation.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (navigationType === "POP") {
      // Browser back/forward — preserve scroll position. The browser will
      // restore it on its own once the new route renders.
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, navigationType]);

  return null;
}
