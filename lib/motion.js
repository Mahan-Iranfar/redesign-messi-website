/** Scoped to one App Router page. Every observer, listener and frame is disposed. */
export function mountMotion(page) {
  const host = document.querySelector("main");
  if (!host) return () => {};
  const controller = new AbortController(),
    signal = controller.signal;
  const disposers = [];
  let disposed = false,
    frame = 0,
    pointerFrame = 0;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const on = (target, event, handler, options = {}) =>
    target?.addEventListener(event, handler, { ...options, signal });
  const observe = (callback, options) => {
    const o = new IntersectionObserver(callback, options);
    disposers.push(() => o.disconnect());
    return o;
  };
  const header = document.querySelector("header"),
    bar = document.querySelector(".progress");
  const journey = host.querySelector(".career-journey"),
    stage = host.querySelector(".career-stage");
  const chapters = [...host.querySelectorAll(".career-chapter")],
    layers = [...host.querySelectorAll(".stat-layer")];
  const stageIndex = host.querySelector(".stage-index"),
    track = host.querySelector(".stage-track i"),
    orbit = host.querySelector(".stage-orbit");
  const mobile = matchMedia("(max-width:767px)");
  let sceneVisible = false,
    current = -1;
  const clamp = (n) => Math.min(1, Math.max(0, n));
  function render() {
    frame = 0;
    if (disposed || document.hidden) return;
    const total = document.documentElement.scrollHeight - innerHeight;
    let next = current,
      progress = 0;
    if (journey && sceneVisible && !reduced.matches) {
      const stageBottom = stage.getBoundingClientRect().bottom;
      const focus = mobile.matches
        ? stageBottom + (innerHeight - stageBottom) * 0.46
        : innerHeight * 0.5;
      const boxes = chapters.map((el) => el.getBoundingClientRect());
      let nearest = Infinity;
      boxes.forEach((r, i) => {
        const d = Math.abs(r.top + r.height * 0.5 - focus);
        if (d < nearest) {
          nearest = d;
          next = i;
        }
      });
      progress = clamp(
        (focus - boxes[0].top) / (boxes.at(-1).bottom - boxes[0].top),
      );
    }
    // Writes after all reads: compositor-only scroll-driven styles.
    if (bar)
      bar.style.transform = `scaleX(${total > 0 ? clamp(scrollY / total) : 0})`;
    header?.classList.toggle("scrolled", scrollY > 30);
    if (journey && sceneVisible && !reduced.matches) {
      if (next !== current) {
        current = next;
        layers.forEach((el, i) =>
          el.classList.toggle("is-current", i === next),
        );
        chapters.forEach((el, i) =>
          el.classList.toggle("is-active", i === next),
        );
        stageIndex.textContent = `0${next + 1} — 0${chapters.length}`;
      }
      track.style.transform = `scaleX(${progress})`;
      orbit.style.transform = `rotateX(58deg) rotateZ(${-25 + progress * 85}deg)`;
    }
  }
  const schedule = () => {
    if (!disposed && !frame && !document.hidden)
      frame = requestAnimationFrame(render);
  };
  on(window, "scroll", schedule, { passive: true });
  on(window, "resize", schedule, { passive: true });
  on(window, "pageshow", schedule);
  on(document, "visibilitychange", schedule);
  if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("motion-ready");
    const reveal = observe(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible", "active", "in-view");
            reveal.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    host
      .querySelectorAll(
        ".reveal,.pitch,.story-event,.moment,.gallery-card,.foundation-word,.foundation-grid>div",
      )
      .forEach((el) => {
        if (
          el.matches(
            ".story-event,.moment,.gallery-card,.foundation-word,.foundation-grid>div",
          )
        )
          el.classList.add("editorial-reveal");
        reveal.observe(el);
      });
    const timelineItems = [...host.querySelectorAll(".timeline-item")];
    timelineItems[0]?.classList.add("active");
    const timeline = observe(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            timelineItems.forEach((el) =>
              el.classList.toggle("active", el === e.target),
            );
            const year = host.querySelector(".timeline-visual .year");
            if (year) year.textContent = e.target.dataset.year;
          }
        }),
      { rootMargin: "-20% 0px -30%", threshold: 0.1 },
    );
    timelineItems.forEach((el) => timeline.observe(el));
    const sectionObserver = observe(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            host.querySelectorAll(".chapter-strip a").forEach((a) => {
              const active = a.hash === `#${e.target.id}`;
              a.classList.toggle("blue", active);
              active
                ? a.setAttribute("aria-current", "location")
                : a.removeAttribute("aria-current");
            });
        }),
      { rootMargin: "-25% 0px -55%" },
    );
    host
      .querySelectorAll("section[id]")
      .forEach((el) => sectionObserver.observe(el));
    if (journey) {
      const scene = observe(
        (entries) => {
          sceneVisible = entries[0].isIntersecting;
          schedule();
        },
        { rootMargin: "150px" },
      );
      scene.observe(journey);
    }
  }
  const image = host.querySelector(".hero-image"),
    hero = host.querySelector(".hero");
  let pointerX = 0,
    pointerY = 0;
  if (image && matchMedia("(pointer:fine)").matches) {
    on(hero, "pointermove", (e) => {
      if (reduced.matches) return;
      pointerX = (e.clientX / innerWidth - 0.5) * 5;
      pointerY = (e.clientY / innerHeight - 0.5) * 4;
      if (!pointerFrame)
        pointerFrame = requestAnimationFrame(() => {
          pointerFrame = 0;
          if (!disposed)
            image.style.transform = `perspective(1500px) rotateY(${pointerX}deg) rotateX(${-pointerY}deg) scale(1.025)`;
        });
    });
    on(hero, "pointerleave", () => {
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
      image.style.transform = "none";
    });
  }
  function preference() {
    document.documentElement.classList.toggle(
      "cinema-enabled",
      page !== "home" && !reduced.matches && "IntersectionObserver" in window,
    );
    if (reduced.matches && image) image.style.transform = "none";
    schedule();
  }
  on(reduced, "change", preference);
  preference();
  document.fonts?.ready.then(() => {
    if (!disposed) schedule();
  });
  return () => {
    disposed = true;
    controller.abort();
    disposers.forEach((fn) => fn());
    cancelAnimationFrame(frame);
    cancelAnimationFrame(pointerFrame);
    document.documentElement.classList.remove("cinema-enabled", "motion-ready");
  };
}
