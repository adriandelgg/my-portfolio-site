"use client";
import type { IStaticMethods } from "preline/preline";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export const PrelineScript = () => {
  const path = usePathname();

  useEffect(() => {
    async function loadPreline() {
      await import("preline/preline");

      window.HSStaticMethods.autoInit();
    }

    void loadPreline();
  }, [path]);

  return null;
};
