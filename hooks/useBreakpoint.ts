"use client";

import { useCallback, useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "@/tailwind.config";

function useBreakpoint() {
  const screens = resolveConfig(tailwindConfig).theme.screens;
  type Screen = keyof typeof screens;

  const media = useCallback(() => {
    setBreakpoint(
      Object.keys(screens)
        .reverse()
        .find(
          (x) =>
            window.matchMedia(`(min-width: ${screens[x as Screen]})`).matches
        )
    );
  }, [screens]);

  const [breakpoint, setBreakpoint] = useState<string | undefined>();

  useEffect(() => {
    media();
    window.addEventListener("resize", media, false);
    return () => window.removeEventListener("resize", media, false);
  }, [media]);

  return {
    breakpoint,
    index: breakpoint ? Object.keys(screens).indexOf(breakpoint) : -1,
  };
}

export default useBreakpoint;
