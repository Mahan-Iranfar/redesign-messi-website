"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { mountMotion } from "@/lib/motion";
export default function MotionController() {
  const pathname = usePathname(),
    previous = useRef(pathname),
    restoring = useRef(false);
  useEffect(() => {
    const restore = () => {
      restoring.current = true;
    };
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);
  useLayoutEffect(() => {
    if (previous.current !== pathname) {
      if (!restoring.current && !location.hash)
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      previous.current = pathname;
      restoring.current = false;
    }
  }, [pathname]);
  useEffect(
    () =>
      mountMotion(
        document.querySelector("[data-page]")?.dataset.page || "home",
      ),
    [pathname],
  );
  return null;
}
