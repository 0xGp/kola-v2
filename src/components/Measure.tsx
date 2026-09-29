"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/motion";

type MeasureProps = {
  axis: "x" | "y";
  children: ReactNode;
  className?: string;
  fit?: boolean;
  delay?: number;
  unit?: string;
};

export function Measure({ axis, children, className = "", fit = false, delay = 0, unit = "" }: MeasureProps) {
  const wrap = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = wrap.current!;
      const line = el.querySelector<HTMLElement>(":scope > .dim > .dim__line")!;
      const label = el.querySelector<HTMLElement>(":scope > .dim .dim__value")!;
      const size = { current: 0 };
      const state = { done: false, v: 0 };
      const write = (n: number) => {
        label.textContent = `${Math.round(n)}${unit}`;
      };

      const ro = new ResizeObserver(([entry]) => {
        const box = entry.borderBoxSize[0];
        size.current = axis === "x" ? box.inlineSize : box.blockSize;
        if (state.done) write(size.current);
      });
      ro.observe(el);

      if (prefersReducedMotion()) {
        state.done = true;
        write(axis === "x" ? el.offsetWidth : el.offsetHeight);
        return () => ro.disconnect();
      }

      const tl = gsap.timeline({
        delay,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onComplete: () => {
          state.done = true;
          write(size.current);
        },
      });
      tl.from(line, { [axis === "x" ? "scaleX" : "scaleY"]: 0, duration: 1.2 })
        .from(label.parentElement, { opacity: 0, duration: 0.4, ease: "power2.out" }, 0.35)
        .to(
          state,
          {
            v: () => size.current,
            duration: 1,
            ease: "power3.out",
            onUpdate: () => write(state.v),
          },
          0.35,
        );

      return () => ro.disconnect();
    },
    { scope: wrap },
  );

  return (
    <div ref={wrap} className={`measure measure--${axis}${fit ? " measure--fit" : ""} ${className}`}>
      {children}
      <span className="dim" aria-hidden="true">
        <span className="dim__line" />
        <span className="dim__label">
          <span className="dim__value">0</span>
        </span>
      </span>
    </div>
  );
}
