import Link from "next/link";
import { asset } from "@/lib/site";
export const metadata = {
  title: "The Foundation",
  description:
    "Foundation — a researched, independent Lionel Messi digital biography.",
  alternates: { canonical: "./foundation/" },
};
export default function Page() {
  return (
    <div data-page="foundation">
      <div className="wrap page-head">
        <span className="eyebrow blue">{"The archive / 05"}</span>
        <h1>
          {"A platform."}
          <br />
          {"A purpose."}
        </h1>
        <p className="lead muted">
          {
            "An informational look at publicly documented work beyond football. Follow the original organizations to learn more."
          }
        </p>
      </div>
      <div className="wrap pb-24">
        <div className="foundation-word blue">{"FOR CHILDREN."}</div>
        <div className="foundation-grid">
          <div>
            <span className="eyebrow">{"Leo Messi Foundation"}</span>
            <h2 className="mt-6">
              {"Health. Education."}
              <br />
              {"Sport."}
            </h2>
            <p className="muted">
              {
                "The foundation's public mission focuses on children and adolescents, including access to health, education and sport. It supports medical, educational and sporting facilities."
              }
            </p>
            <a
              className="link mt-6"
              href="https://messi.com/ca/fundacion-leo-messi/"
            >
              {"Official foundation information ↗"}
            </a>
          </div>
          <div>
            <span className="eyebrow">{"UNICEF · Since March 2010"}</span>
            <h2 className="mt-6">
              {"A voice for"}
              <br />
              {"children."}
            </h2>
            <p className="muted">
              {
                "UNICEF appointed Messi a Goodwill Ambassador in 2010. Its biography documents a visit to Haiti after the earthquake and support for its COVID-19 response."
              }
            </p>
            <a
              className="link mt-6"
              href="https://www.unicef.org/goodwill-ambassadors/leo-messi"
            >
              {"Read UNICEF's account ↗"}
            </a>
          </div>
        </div>
        <p className="credit rule pt-8">
          {
            "This independent project does not collect donations or represent either organization. No charitable-initiative photographs are reproduced without verified reuse rights."
          }
        </p>
      </div>
    </div>
  );
}
