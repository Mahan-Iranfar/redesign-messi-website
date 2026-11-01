import Link from "next/link";
import { asset } from "@/lib/site";
export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <Link className="brand" href="/">
            {"MESSI"}
            <span className="blue">{"."}</span>
            <small>{"THE STORY OF A LEGEND"}</small>
          </Link>
          <div className="footlinks">
            <Link href="/story/">{"The story ↗"}</Link>
            <Link href="/gallery/#credits">{"Image credits ↗"}</Link>
            <a href={asset("/HISTORICAL_RESEARCH.md")}>{"Research ↗"}</a>
            <a href="#main">{"Back to top ↑"}</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p>
            {
              "Independent concept project. Not affiliated with or endorsed by Lionel Messi, his representatives, or associated organizations."
            }
          </p>
          <p>{"RESEARCH EDITION · 31 OCTOBER 2026"}</p>
        </div>
      </div>
    </footer>
  );
}
