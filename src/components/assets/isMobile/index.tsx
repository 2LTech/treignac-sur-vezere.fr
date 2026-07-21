"use client";

import { useSyncExternalStore } from "react";

const mediaQuery = "(max-width: 915px)";

const subscribe = (callback: () => void) => {
  const query = window.matchMedia(mediaQuery);
  query.addEventListener("change", callback);

  return () => query.removeEventListener("change", callback);
};

const getSnapshot = () => window.matchMedia(mediaQuery).matches;
const getServerSnapshot = () => false;

const useMobile = () => {
  const isMobile = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return { isMobile };
};

export default useMobile;
