"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Mock } from "./Mocks";
import { T } from "./T";
import { playground, type PlaygroundItem } from "@/lib/content";
import { gsap, useGSAP, prefersReducedMotion, getLenis } from "@/lib/motion";

function Visual({ item, large = false }: { item: PlaygroundItem; large?: boolean }) {
  const [w, h] = item.ratio.split("/").map(Number);
  const style = { aspectRatio: item.ratio, "--r": w / h } as React.CSSProperties;
  return (
    <div className="pg__visual" style={style}>
      {item.image ? (
        <Image
          src={item.image.src}
          alt={large ? item.image.alt : ""}
          fill
          sizes={large ? "90vw" : "(max-width: 760px) 80vw, 33vw"}
          className="pg__img"
        />
      ) : item.mock ? (
        <div className="pg__mock" aria-hidden="true">
          <Mock id={item.mock} />
        </div>
      ) : (
        <div className="pg__empty" aria-hidden="true">
          <span className="mono">{item.ratio.replace(/\s/g, "")}</span>
          <span>{item.kind}</span>
        </div>
      )}
    </div>
  );
}

export function Playground() {
  const root = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".pg__item", {
        y: 32,
        opacity: 0,
        stagger: 0.06,
        scrollTrigger: { trigger: ".pg", start: "top 80%", once: true },
      });
    },
    { scope: root },
  );

  const open = (i: number, btn: HTMLButtonElement) => {
    opener.current = btn;
    setIndex(i);
  };

  const close = useCallback(() => {
    const d = dialog.current;
    if (!d?.open) return;
    const done = () => {
      d.close();
      setIndex(null);
    };
    if (prefersReducedMotion()) return done();
    gsap.to(d, { opacity: 0, duration: 0.25, ease: "power2.in", onComplete: done });
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i === null ? i : (i + dir + playground.length) % playground.length));
  }, []);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (index !== null && !d.open) {
      d.showModal();
      getLenis()?.stop();
      if (!prefersReducedMotion()) {
        gsap.fromTo(d, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" });
        gsap.fromTo(".lb__stage", { scale: 0.96, y: 16 }, { scale: 1, y: 0, duration: 0.6 });
      } else {
        gsap.set(d, { opacity: 1 });
      }
    }
  }, [index]);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const onClose = () => {
      getLenis()?.start();
      setIndex(null);
      opener.current?.focus();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onCancel = (e: Event) => {
      e.preventDefault();
      close();
    };
    d.addEventListener("close", onClose);
    d.addEventListener("cancel", onCancel);
    d.addEventListener("keydown", onKey);
    return () => {
      d.removeEventListener("close", onClose);
      d.removeEventListener("cancel", onCancel);
      d.removeEventListener("keydown", onKey);
    };
  }, [close, step]);

  const current = index === null ? null : playground[index];

  return (
    <section id="playground" ref={root} className="playground" aria-labelledby="pg-title">
      <div className="section-head">
        <h2 id="pg-title" className="display section-title">
          Playground
        </h2>
        <p className="section-note">Explorations and experiments</p>
      </div>

      <ul className="pg">
        {playground.map((item, i) => (
          <li key={item.id} className="pg__item">
            <button type="button" className="pg__btn" onClick={(e) => open(i, e.currentTarget)}>
              <Visual item={item} />
              <span className="pg__meta">
                <span className="pg__title">
                  <T>{item.title}</T>
                </span>
                <span className="pg__kind">{item.kind}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="lb"
        aria-label={current ? `${current.kind}: ${current.title}` : "Playground item"}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {current && (
          <div className="lb__inner">
            <div className="lb__bar">
              <p className="lb__title">
                <T>{current.title}</T>
                <span>{current.kind}</span>
              </p>
              <p className="mono lb__count">
                {index! + 1} / {playground.length}
              </p>
              <button type="button" className="lb__close" onClick={close} aria-label="Close">
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
            <div className="lb__stage">
              <Visual item={current} large />
            </div>
            <div className="lb__nav">
              <button type="button" className="btn-ghost" onClick={() => step(-1)}>
                Previous
              </button>
              <button type="button" className="btn-ghost" onClick={() => step(1)}>
                Next
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
