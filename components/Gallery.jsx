"use client";
import { useEffect, useRef, useState } from "react";
import media from "@/lib/data/historical-media.json";
import { asset } from "@/lib/site";
const category = (m) =>
  m.id.includes("barcelona")
    ? "Barcelona"
    : m.id.includes("miami")
      ? "Miami"
      : "Argentina";
export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const opener = useRef(null);
  const visible = media
    .map((m, i) => ({ m, i }))
    .filter(({ m }) => filter === "All" || category(m) === filter);
  useEffect(() => {
    if (selected === null) return;
    const el = dialog.current;
    el.showModal();
    document.body.classList.add("no-scroll");
    closeButton.current.focus();
    return () => {
      el.close();
      document.body.classList.remove("no-scroll");
    };
  }, [selected !== null]);
  const close = () => {
    setSelected(null);
    opener.current?.focus();
  };
  const step = (d) =>
    setSelected(
      (i) =>
        visible[
          (visible.findIndex((x) => x.i === i) + d + visible.length) %
            visible.length
        ].i,
    );
  const photo = selected === null ? null : media[selected];
  return (
    <>
      <div className="filters" role="group" aria-label="Filter archive">
        {["All", "Barcelona", "Argentina", "Miami"].map((c) => (
          <button
            key={c}
            className="pill"
            aria-pressed={c === filter}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} photographs shown
      </p>
      <div className="gallery-grid">
        {visible.map(({ m, i }) => (
          <article key={m.id} className="gallery-card">
            <button
              aria-label={`Open photograph: ${m.event}`}
              onClick={(e) => {
                opener.current = e.currentTarget;
                setSelected(i);
              }}
            >
              <img
                src={asset(m.image)}
                width={m.width}
                height={m.height}
                alt={m.description}
                loading="lazy"
                decoding="async"
              />
              <h3>{m.event}</h3>
              <p>{m.date} &nbsp; ↗ View photograph</p>
            </button>
            <p className="credit">
              <a href={m.sourceUrl}>{m.photographer}</a> ·{" "}
              <a href={m.licenseUrl}>{m.license}</a>
            </p>
          </article>
        ))}
      </div>
      <dialog
        ref={dialog}
        aria-label="Photograph viewer"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            step(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            step(-1);
          }
        }}
      >
        <div className="dialog-controls">
          <button onClick={() => step(-1)} aria-label="Previous photograph">
            ← Previous
          </button>
          <button ref={closeButton} onClick={close}>
            Close ×
          </button>
          <button onClick={() => step(1)} aria-label="Next photograph">
            Next →
          </button>
        </div>
        {photo && (
          <>
            <img
              src={asset(photo.image)}
              width={photo.width}
              height={photo.height}
              alt={photo.description}
            />
            <p>
              {photo.event} · {photo.date} — {photo.photographer} ·{" "}
              <a href={photo.licenseUrl}>{photo.license}</a> · Resized / WebP.{" "}
              <a href={photo.sourceUrl}>View source ↗</a>
            </p>
          </>
        )}
      </dialog>
    </>
  );
}
