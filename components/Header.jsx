"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const links = [
  ["story", "The story"],
  ["career", "Career"],
  ["moments", "Moments"],
  ["gallery", "Gallery"],
  ["foundation", "Foundation"],
];
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const nav = useRef(null);
  const toggle = useRef(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const controller = new AbortController();
    const { signal } = controller;
    document.body.classList.add("no-scroll");
    nav.current?.querySelector("a")?.focus();
    const close = () => {
      setOpen(false);
      toggle.current?.focus();
    };
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") close();
        if (e.key === "Tab") {
          const items = [...nav.current.querySelectorAll("a"), toggle.current];
          const first = items[0],
            last = items.at(-1);
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      },
      { signal },
    );
    const query = matchMedia("(min-width:768px)");
    query.addEventListener(
      "change",
      (e) => {
        if (e.matches) close();
      },
      { signal },
    );
    return () => {
      controller.abort();
      document.body.classList.remove("no-scroll");
    };
  }, [open]);
  return (
    <header>
      <Link className="brand" href="/" aria-label="Messi Beyond the game home">
        M<span className="blue">.</span>
        <small>BEYOND THE GAME</small>
      </Link>
      <nav
        ref={nav}
        id="navigation"
        className={open ? "open" : ""}
        aria-label="Main navigation"
      >
        {links.map(([slug, label]) => (
          <Link
            key={slug}
            href={`/${slug}/`}
            aria-current={
              pathname.replace(/\/$/, "") === `/${slug}` ? "page" : undefined
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>
    </header>
  );
}
