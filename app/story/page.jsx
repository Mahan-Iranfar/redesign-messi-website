import Link from "next/link";
import { asset } from "@/lib/site";
export const metadata = {
  title: "The story",
  description:
    "The story — a researched, independent Lionel Messi digital biography.",
  alternates: { canonical: "./story/" },
};
export default function Page() {
  return (
    <div data-page="story">
      <div className="wrap page-head">
        <span className="eyebrow blue">{"The archive / 01"}</span>
        <h1>
          {"One life."}
          <br />
          {"A world of football."}
        </h1>
        <p className="lead muted">
          {
            "From Rosario to a global stage. A chronological archive of the places, turning points and achievements that shaped the journey."
          }
        </p>
      </div>
      <div className="wrap pb-24">
        <div className="filters">
          <a className="pill" href="#Rosario">
            {"Rosario"}
          </a>
          <a className="pill" href="#Barcelona">
            {"Barcelona"}
          </a>
          <a className="pill" href="#Argentina">
            {"Argentina"}
          </a>
          <a className="pill" href="#Later-career">
            {"Later career"}
          </a>
        </div>
        <article className="story-event" id="Rosario">
          <time>{"1987"}</time>
          <div>
            <span className="eyebrow">{"Rosario · 1987-06-24"}</span>
            <h2 className="mt-4">{"Every legend has a beginning."}</h2>
            <p>{"Born in Rosario, Argentina, on 24 June 1987."}</p>
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
        <article className="story-event">
          <time>{"1995"}</time>
          <div>
            <span className="eyebrow">{"Rosario · 1995"}</span>
            <h2 className="mt-4">{"The first colours."}</h2>
            <p>
              {
                "Messi joined Newell’s Old Boys in 1995 and remained there until 2000."
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
        <article className="story-event" id="Barcelona">
          <time>{"2000"}</time>
          <div>
            <span className="eyebrow">{"Barcelona · 2000"}</span>
            <h2 className="mt-4">{"An ocean. A new beginning."}</h2>
            <p>
              {
                "At thirteen, he crossed to Spain and joined Barcelona’s youth system."
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
        <article className="story-event">
          <time>{"2003"}</time>
          <div>
            <span className="eyebrow">{"Barcelona · 2003"}</span>
            <h2 className="mt-4">{"A first glimpse."}</h2>
            <p>
              {
                "His first-team friendly debut came against Porto during the 2003–04 season."
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
        <article className="story-event">
          <time>{"2004"}</time>
          <div>
            <span className="eyebrow">{"Barcelona · 2004-10-16"}</span>
            <h2 className="mt-4">{"The first official step."}</h2>
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
        <article className="story-event" id="Argentina">
          <time>{"2005"}</time>
          <div>
            <span className="eyebrow">{"Argentina · 2005"}</span>
            <h2 className="mt-4">{"A world stage."}</h2>
            <p>
              {
                "Argentina won the U-20 World Cup. Messi received the tournament’s Golden Ball and Golden Boot."
              }
            </p>
            <a
              className="source"
              href="https://www.fifa.com/en/the-best-fifa-football-awards/articles/the-world-cup-the-best-and-all-of-lionel-messis-trophy-wins"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="story-event">
          <time>{"2005"}</time>
          <div>
            <span className="eyebrow">{"Argentina · 2005-08-17"}</span>
            <h2 className="mt-4">{"The senior shirt."}</h2>
            <p>
              {
                "Messi made his senior Argentina debut against Hungary in Budapest."
              }
            </p>
            <a
              className="source"
              href="https://www.fifa.com/en/articles/lionel-messi-argentina-career"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="story-event">
          <time>{"2006"}</time>
          <div>
            <span className="eyebrow">{"Barcelona · 2006"}</span>
            <h2 className="mt-4">{"European champion."}</h2>
            <p>
              {
                "Barcelona won the 2005–06 Champions League, the first of Messi’s four titles with the club."
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
        <article className="story-event">
          <time>{"2008"}</time>
          <div>
            <span className="eyebrow">{"Argentina · 2008"}</span>
            <h2 className="mt-4">{"Olympic gold."}</h2>
            <p>
              {"Messi was part of Argentina’s gold-medal team at Beijing 2008."}
            </p>
            <a
              className="source"
              href="https://www.fifa.com/en/the-best-fifa-football-awards/articles/the-world-cup-the-best-and-all-of-lionel-messis-trophy-wins"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="story-event">
          <time>{"2009"}</time>
          <div>
            <span className="eyebrow">{"Barcelona · 2009"}</span>
            <h2 className="mt-4">{"A season without precedent."}</h2>
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
        <article className="story-event" id="Foundation">
          <time>{"2010"}</time>
          <div>
            <span className="eyebrow">{"Foundation · 2010-03"}</span>
            <h2 className="mt-4">{"A voice for children."}</h2>
            <p>
              {
                "UNICEF appointed Messi a Goodwill Ambassador in March 2010. He subsequently visited Haiti following the earthquake."
              }
            </p>
            <a
              className="source"
              href="https://www.unicef.org/goodwill-ambassadors/leo-messi"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="story-event">
          <time>{"2011"}</time>
          <div>
            <span className="eyebrow">{"Barcelona · 2011"}</span>
            <h2 className="mt-4">{"Europe, again."}</h2>
            <p>{"Barcelona won the 2010–11 Champions League."}</p>
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
        <article className="story-event">
          <time>{"2012"}</time>
          <div>
            <span className="eyebrow">{"Barcelona · 2012"}</span>
            <h2 className="mt-4">{"Ninety-one."}</h2>
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
        <article className="story-event">
          <time>{"2014"}</time>
          <div>
            <span className="eyebrow">{"Argentina · 2014-07-13"}</span>
            <h2 className="mt-4">{"So close."}</h2>
            <p>
              {
                "Argentina lost the World Cup final to Germany after extra time. Messi received the Golden Ball."
              }
            </p>
            <a
              className="source"
              href="https://www.fifa.com/en/articles/lionel-messi-argentina-career"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="story-event">
          <time>{"2015"}</time>
          <div>
            <span className="eyebrow">{"Barcelona · 2015"}</span>
            <h2 className="mt-4">{"The treble returns."}</h2>
            <p>
              {
                "Barcelona won the league, Copa del Rey and Champions League in 2015."
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
        <article className="story-event">
          <time>{"2021"}</time>
          <div>
            <span className="eyebrow">{"Argentina · 2021-07-10"}</span>
            <h2 className="mt-4">{"The wait ends."}</h2>
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
        <article className="story-event">
          <time>{"2021"}</time>
          <div>
            <span className="eyebrow">{"Barcelona · 2021"}</span>
            <h2 className="mt-4">{"An era closes."}</h2>
            <p>
              {
                "Messi departed Barcelona after a senior career of 778 official appearances, 672 goals and 35 major trophies."
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
        <article className="story-event" id="Later-career">
          <time>{"2021–23"}</time>
          <div>
            <span className="eyebrow">{"Later career · 2021–2023"}</span>
            <h2 className="mt-4">{"Paris, a new chapter."}</h2>
            <p>
              {
                "At Paris Saint-Germain, Messi won Ligue 1 in 2021–22 and 2022–23, and the Trophée des Champions."
              }
            </p>
            <a
              className="source"
              href="https://messi.com/en/honours-and-achievements/"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="story-event" id="World-Cup">
          <time>{"2022"}</time>
          <div>
            <span className="eyebrow">{"World Cup · 2022-12-18"}</span>
            <h2 className="mt-4">{"The dream, realized."}</h2>
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
        <article className="story-event">
          <time>{"2023"}</time>
          <div>
            <span className="eyebrow">{"Later career · 2023"}</span>
            <h2 className="mt-4">{"A new shore."}</h2>
            <p>
              {
                "Messi joined Inter Miami in summer 2023 and helped the club win its first trophy, the Leagues Cup."
              }
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
        <article className="story-event">
          <time>{"2023"}</time>
          <div>
            <span className="eyebrow">{"Later career · 2023"}</span>
            <h2 className="mt-4">{"Eight Ballons d’Or."}</h2>
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
        <article className="story-event">
          <time>{"2024"}</time>
          <div>
            <span className="eyebrow">{"Argentina · 2024"}</span>
            <h2 className="mt-4">{"Continental champions again."}</h2>
            <p>{"Argentina retained the Copa América title in 2024."}</p>
            <a
              className="source"
              href="https://www.fifa.com/en/the-best-fifa-football-awards/articles/the-world-cup-the-best-and-all-of-lionel-messis-trophy-wins"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="story-event">
          <time>{"2024"}</time>
          <div>
            <span className="eyebrow">{"Later career · 2024"}</span>
            <h2 className="mt-4">{"Setting the pace."}</h2>
            <p>
              {
                "Inter Miami won the Supporters’ Shield. Messi was named the 2024 MLS Most Valuable Player."
              }
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
        <article className="story-event">
          <time>{"2025"}</time>
          <div>
            <span className="eyebrow">{"Later career · 2025-10-23"}</span>
            <h2 className="mt-4">{"The next chapter."}</h2>
            <p>
              {
                "Inter Miami announced a contract extension through the 2028 MLS season. Messi also won the 2025 MLS Golden Boot with 29 goals."
              }
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
        <article className="story-event">
          <time>{"2025"}</time>
          <div>
            <span className="eyebrow">{"Later career · 2025-12-06"}</span>
            <h2 className="mt-4">{"MLS Cup champion."}</h2>
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
        <article className="story-event">
          <time>{"2026"}</time>
          <div>
            <span className="eyebrow">{"Later career · 2026-09"}</span>
            <h2 className="mt-4">{"Another title in Miami."}</h2>
            <p>
              {
                "Inter Miami won the Campeones Cup 2–0 against Cruz Azul. Messi scored in the victory."
              }
            </p>
            <a
              className="source"
              href="https://www.intermiamicf.com/news/match-recap-inter-miami-cf-crowned-2026-michelob-ultra-campeones-cup-champions-with-2-0-victory-over-cruz-azul"
              target="_blank"
              rel="noopener"
            >
              {"Historical source ↗"}
            </a>
          </div>
        </article>
        <article className="story-event">
          <time>{"2026"}</time>
          <div>
            <span className="eyebrow">{"Argentina · 2026-10-06"}</span>
            <h2 className="mt-4">{"A farewell in Buenos Aires."}</h2>
            <p>
              {
                "Messi played his final Argentina match at the Monumental, closing a senior international journey that began in 2005."
              }
            </p>
            <a
              className="source"
              href="https://copaamerica.com/en/news/lionel-messi-said-goodbye-to-argentina-national-team"
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
