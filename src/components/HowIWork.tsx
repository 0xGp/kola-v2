"use client";

import { useRef } from "react";
import { howIWork } from "@/lib/content";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/motion";

export function HowIWork() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".step", {
        y: 32,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: { trigger: ".steps", start: "top 78%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="how" aria-labelledby="how-title">
      <div className="section-head">
        <h2 id="how-title" className="display section-title">
          From problem to product.
        </h2>
        <p className="section-note">How I work</p>
      </div>
      <ol className="steps">
        {howIWork.map((s, i) => (
          <li key={s.title} className="step">
            <span className="step__num mono">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="step__title">{s.title}</h3>
            <p className="step__body">{s.body}</p>
            <span className="step__bar" aria-hidden="true" />
          </li>
        ))}
      </ol>
    </section>
  );
}
