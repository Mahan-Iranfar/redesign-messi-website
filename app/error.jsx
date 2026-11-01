"use client";
export default function ErrorPage({ reset }) {
  return (
    <div className="wrap page-head">
      <span className="eyebrow blue">A brief pause</span>
      <h1>
        Let’s try
        <br />
        that again.
      </h1>
      <p className="lead muted">The page could not finish loading.</p>
      <button className="pill mt-8" onClick={reset}>
        Try again
      </button>
      <a
        className="link ml-8"
        href=""
        onClick={(e) => {
          e.preventDefault();
          location.reload();
        }}
      >
        Reload this page ↗
      </a>
    </div>
  );
}
