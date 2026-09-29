"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { site } from "@/lib/content";
import { gsap, useGSAP, prefersReducedMotion, scrollToTarget } from "@/lib/motion";

const links = [
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function useLocalTime() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: site.timeZone });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = window.setInterval(update, 15_000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export function onAnchorClick(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href") ?? "";
  const hash = href.slice(href.indexOf("#"));
  if (!hash.startsWith("#") || window.location.pathname !== "/") return;
  e.preventDefault();
  scrollToTarget(hash);
  history.replaceState(null, "", hash);
}

export function Nav() {
  const time = useLocalTime();
  const pathname = usePathname();
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(root.current!.children, { y: -12, opacity: 0, duration: 0.9, stagger: 0.05, delay: 0.4 });
    },
    { scope: root },
  );

  useEffect(() => {
    if (pathname !== "/") {
      setActive(pathname.startsWith("/work") ? "work" : null);
      return;
    }
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) setActive(id);
          else setActive((current) => (current === id ? null : current));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <header ref={root} className="rail">
      <Link href="/" className="rail__name">
        {site.name}
      </Link>
      <nav aria-label="Primary" className="rail__links">
        {links.map((l) => (
          <Link
            key={l.id}
            href={`/#${l.id}`}
            onClick={onAnchorClick}
            className={`navlink${active === l.id ? " is-active" : ""}`}
            aria-current={active === l.id ? "true" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <p className="rail__meta">
        <span className="mono rail__time">
          Lagos <time>{time}</time>
        </span>
      </p>
      <Link href="/#contact" className="rail__cta" onClick={onAnchorClick}>
        Contact
      </Link>
    </header>
  );
}
