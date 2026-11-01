import Link from "next/link";
import { asset } from "@/lib/site";
import Gallery from "@/components/Gallery";
export const metadata = {
  title: "Iconic moments",
  description:
    "Moments — a researched, independent Lionel Messi digital biography.",
  alternates: { canonical: "./moments/" },
};
export default function Page() {
  return (
    <div data-page="moments">
      <div className="wrap page-head">
        <span className="eyebrow blue">{"The archive / 03"}</span>
        <h1>
          {"Some moments"}
          <br />
          {"become history."}
        </h1>
        <p className="lead muted">
          {
            "An archive of breakthroughs, records and the night in Lusail. Explore the photography, then follow the milestones."
          }
        </p>
      </div>
      <div className="wrap pb-24">
        <Gallery />
        <h2 className="section-title mt-20 mb-12">
          {"The defining chapters."}
        </h2>
        <article className="moment">
          <time className="moment-date">{"2004"}</time>
          <div>
            <h3>{"The first official step."}</h3>
            <p>
              {
                "His competitive Barcelona debut came against Espanyol on 16 October 2004."
              }
            </p>
            <a
              className="source"
              href="https://www.fcbarcelona.com/en/ficha/2214377/leo-messi"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="moment">
          <time className="moment-date">{"2009"}</time>
          <div>
            <h3>{"A season without precedent."}</h3>
            <p>{"Barcelona collected six trophies in 2009."}</p>
            <a
              className="source"
              href="https://www.fcbarcelona.com/en/ficha/2214377/leo-messi"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="moment">
          <time className="moment-date">{"2012"}</time>
          <div>
            <h3>{"Ninety-one."}</h3>
            <p>
              {
                "Messi scored 91 goals for club and country in the 2012 calendar year."
              }
            </p>
            <a
              className="source"
              href="https://www.uefa.com/uefachampionsleague/news/025a-0ea88f68dbf8-ecb0e28b1eca-1000--messi-magic-wrapped-up-in-facts-and-figures/"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="moment">
          <time className="moment-date">{"2021"}</time>
          <div>
            <h3>{"The wait ends."}</h3>
            <p>
              {
                "Argentina beat Brazil 1–0 at the Maracanã to win the Copa América."
              }
            </p>
            <a
              className="source"
              href="https://copaamerica.com/en/news/copa-america-2021-argentina-champions-after-28-years"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="moment">
          <time className="moment-date">{"2022"}</time>
          <div>
            <h3>{"The dream, realized."}</h3>
            <p>
              {
                "Argentina defeated France on penalties after a 3–3 World Cup final. Messi scored twice during the match."
              }
            </p>
            <a
              className="source"
              href="https://www.fifa.com/en/tournaments/mens/worldcup/articles/argentina-france-2022-final-greatest-games"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="moment">
          <time className="moment-date">{"2023"}</time>
          <div>
            <h3>{"Eight Ballons d’Or."}</h3>
            <p>
              {"The 2023 award brought Messi’s Ballon d’Or total to eight."}
            </p>
            <a
              className="source"
              href="https://www.intermiamicf.com/news/inter-miami-cf-signs-leo-messi-to-contract-extension"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="moment">
          <time className="moment-date">{"2025"}</time>
          <div>
            <h3>{"MLS Cup champion."}</h3>
            <p>
              {
                "Inter Miami defeated Vancouver 3–1 to win its first MLS Cup. Messi contributed two assists and won the final’s MVP award."
              }
            </p>
            <a
              className="source"
              href="https://www.mlssoccer.com/news/inter-miami-cf-win-2025-mls-cup-presented-by-audi"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
