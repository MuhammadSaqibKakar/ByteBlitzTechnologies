"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const animatedSelector = [
  ".reveal-lite",
  ".stagger-item-lite",
  ".service-card-pro",
  ".tech-visual-shell",
].join(",");

export function MotionEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      root.classList.add("motion-reduced");
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(animatedSelector),
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--motion-index", String(index % 8));
    });

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
