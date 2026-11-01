import Link from "next/link";
import { asset } from "@/lib/site";
export default function Page() {
  return (
    <div data-page="not-found">
      <div className="wrap page-head">
        <span className="eyebrow blue">{"The archive / 404"}</span>
        <h1>{"Off the pitch."}</h1>
        <p className="lead muted">{"This page could not be found."}</p>
      </div>
      <div className="wrap pb-24">
        <Link className="link" href="/">
          {"Return to the story ↗"}
        </Link>
      </div>
    </div>
  );
}
