"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapperRef.current || !contentRef.current) return;

      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.2,
        effects: true,
        smoothTouch: false, // native momentum scrolling on touch devices
      });

      // Smooth scroll for anchor clicks (e.g. #services, #home)
      const handleAnchorClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement).closest("a");
        if (!target) return;

        const href = target.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            smoother.scrollTo(el, true, "top top");
          }
        }
      };

      document.addEventListener("click", handleAnchorClick);

      return () => {
        document.removeEventListener("click", handleAnchorClick);
        smoother.kill();
      };
    },
    { scope: wrapperRef }
  );

  return (
    <div id="smooth-wrapper" ref={wrapperRef} className="w-full min-h-screen overflow-hidden">
      <div id="smooth-content" ref={contentRef} className="w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
