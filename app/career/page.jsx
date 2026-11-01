import Link from "next/link";
import { asset } from "@/lib/site";
export const metadata = {
  title: "Career",
  description:
    "Career — a researched, independent Lionel Messi digital biography.",
  alternates: { canonical: "./career/" },
};
export default function Page() {
  return (
    <div data-page="career">
      <div className="wrap page-head">
        <span className="eyebrow blue">{"The archive / 02"}</span>
        <h1>
          {"Beyond"}
          <br />
          <span className="italic blue">{"the numbers."}</span>
        </h1>
        <p className="lead muted">
          {
            "Every record has a story. Scroll through six chapters of a career that changed the scale of possibility."
          }
        </p>
      </div>
      <div className="wrap career-intro">
        <span className="eyebrow">
          {"Six milestones · One extraordinary journey"}
        </span>
        <a className="link" href="#career-journey">
          {"Enter the archive ↓"}
        </a>
      </div>
      <section
        id="career-journey"
        className="career-journey"
        aria-label="Six career milestones"
      >
        <div className="career-layout wrap">
          <div className="career-stage" aria-hidden="true">
            <div className="stage-top">
              <span className="eyebrow">{"THE CAREER / IN FOCUS"}</span>
              <span className="stage-index">{"01 — 06"}</span>
            </div>
            <div className="stage-art">
              <div className="stage-orbit"></div>
              <div className="stage-orbit orbit-two"></div>
              <div className="stage-axis"></div>
              <div className="stat-layer is-current" data-stat="0">
                <span className="stage-context">{"BARCELONA / 2004–2021"}</span>
                <span className="stage-number">{"672"}</span>
                <span className="stage-name">{"Barcelona goals"}</span>
              </div>
              <div className="stat-layer" data-stat="1">
                <span className="stage-context">
                  {"BARCELONA / TEAM HONOURS"}
                </span>
                <span className="stage-number">{"35"}</span>
                <span className="stage-name">{"Barcelona trophies"}</span>
              </div>
              <div className="stat-layer" data-stat="2">
                <span className="stage-context">{"CLUB + COUNTRY / 2012"}</span>
                <span className="stage-number">{"91"}</span>
                <span className="stage-name">{"Goals in 2012"}</span>
              </div>
              <div className="stat-layer" data-stat="3">
                <span className="stage-context">{"EUROPE / 2006–2015"}</span>
                <span className="stage-number">{"4"}</span>
                <span className="stage-name">{"Champions Leagues"}</span>
              </div>
              <div className="stat-layer" data-stat="4">
                <span className="stage-context">
                  {"INDIVIDUAL / THROUGH 2023"}
                </span>
                <span className="stage-number">{"8"}</span>
                <span className="stage-name">{"Ballons d’Or by 2023"}</span>
              </div>
              <div className="stat-layer" data-stat="5">
                <span className="stage-context">
                  {"ARGENTINA / QATAR 2022"}
                </span>
                <span className="stage-number">{"1"}</span>
                <span className="stage-name">{"World Cup in 2022"}</span>
              </div>
            </div>
            <div className="stage-bottom">
              <span>{"SCROLL TO DISCOVER"}</span>
              <div className="stage-track">
                <i></i>
              </div>
              <span>{"↓"}</span>
            </div>
          </div>
          <div className="career-chapters">
            <article className="career-chapter" data-chapter="0" id="record-0">
              <div className="chapter-copy">
                <span className="eyebrow blue">
                  {"01 / BARCELONA / 2004–2021"}
                </span>
                <div className="accessible-stat">
                  <strong>{"672"}</strong>
                  {" Barcelona goals"}
                </div>
                <h2>{"A lifetime in one shirt."}</h2>
                <p className="career-description">
                  {
                    "Seventeen senior seasons. Hundreds of nights at Camp Nou. A number built one finish at a time."
                  }
                </p>
                <div className="career-fact">
                  <span className="eyebrow">{"The record"}</span>
                  <p>{"Official senior goals, 2004–2021"}</p>
                </div>
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
            <article className="career-chapter" data-chapter="1" id="record-1">
              <div className="chapter-copy">
                <span className="eyebrow blue">
                  {"02 / BARCELONA / TEAM HONOURS"}
                </span>
                <div className="accessible-stat">
                  <strong>{"35"}</strong>
                  {" Barcelona trophies"}
                </div>
                <h2>{"Success, shared."}</h2>
                <p className="career-description">
                  {
                    "League campaigns, cup nights and European journeys. A collection built alongside generations of teammates."
                  }
                </p>
                <div className="career-fact">
                  <span className="eyebrow">{"The record"}</span>
                  <p>{"Club total at his 2021 departure"}</p>
                </div>
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
            <article className="career-chapter" data-chapter="2" id="record-2">
              <div className="chapter-copy">
                <span className="eyebrow blue">
                  {"03 / CLUB + COUNTRY / 2012"}
                </span>
                <div className="accessible-stat">
                  <strong>{"91"}</strong>
                  {" Goals in 2012"}
                </div>
                <h2>{"A year beyond belief."}</h2>
                <p className="career-description">
                  {
                    "One calendar year, across club and country. The rhythm of a season became a landmark in football history."
                  }
                </p>
                <div className="career-fact">
                  <span className="eyebrow">{"The record"}</span>
                  <p>{"Club and country, calendar year"}</p>
                </div>
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
            <article className="career-chapter" data-chapter="3" id="record-3">
              <div className="chapter-copy">
                <span className="eyebrow blue">
                  {"04 / EUROPE / 2006–2015"}
                </span>
                <div className="accessible-stat">
                  <strong>{"4"}</strong>
                  {" Champions Leagues"}
                </div>
                <h2>{"Under European lights."}</h2>
                <p className="career-description">
                  {
                    "Four titles across a decade. Different teams, different finals, one place at the heart of Barcelona’s story."
                  }
                </p>
                <div className="career-fact">
                  <span className="eyebrow">{"The record"}</span>
                  <p>{"2006 · 2009 · 2011 · 2015"}</p>
                </div>
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
            <article className="career-chapter" data-chapter="4" id="record-4">
              <div className="chapter-copy">
                <span className="eyebrow blue">
                  {"05 / INDIVIDUAL / THROUGH 2023"}
                </span>
                <div className="accessible-stat">
                  <strong>{"8"}</strong>
                  {" Ballons d’Or by 2023"}
                </div>
                <h2>{"Excellence, repeated."}</h2>
                <p className="career-description">
                  {
                    "Eight individual awards by 2023. A career measured across eras, rather than a single extraordinary season."
                  }
                </p>
                <div className="career-fact">
                  <span className="eyebrow">{"The record"}</span>
                  <p>
                    {"2009 · 2010 · 2011 · 2012 · 2015 · 2019 · 2021 · 2023"}
                  </p>
                </div>
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
            <article className="career-chapter" data-chapter="5" id="record-5">
              <div className="chapter-copy">
                <span className="eyebrow blue">
                  {"06 / ARGENTINA / QATAR 2022"}
                </span>
                <div className="accessible-stat">
                  <strong>{"1"}</strong>
                  {" World Cup in 2022"}
                </div>
                <h2>{"The one he waited for."}</h2>
                <p className="career-description">
                  {
                    "Lusail. December 18, 2022. The World Cup title that brought the long Argentina journey to its defining moment."
                  }
                </p>
                <div className="career-fact">
                  <span className="eyebrow">{"The record"}</span>
                  <p>{"Argentina, Qatar 2022"}</p>
                </div>
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
          </div>
        </div>
      </section>
      <section className="career-finale section">
        <div className="wrap">
          <span className="eyebrow gold">{"The measure of a legacy"}</span>
          <h2 className="section-title reveal">
            {"Numbers remain."}
            <br />
            <span className="italic">{"The feeling stays."}</span>
          </h2>
          <p className="lead muted reveal">
            {
              "The archive records the achievements. The game remembers the moments."
            }
          </p>
          <Link className="link" href="/moments/">
            {"Experience the moments ↗"}
          </Link>
        </div>
      </section>
      <div className="wrap pb-24">
        <div className="career-next-head">
          <span className="eyebrow blue">{"A story across continents"}</span>
          <h2 className="section-title">
            {"The next"}
            <br />
            {"chapter."}
          </h2>
        </div>
        <article className="moment">
          <div className="moment-date">{"2021–23"}</div>
          <div>
            <h3>{"Paris, a new chapter."}</h3>
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
        <article className="moment">
          <div className="moment-date">{"2023"}</div>
          <div>
            <h3>{"A new shore."}</h3>
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
        <article className="moment">
          <div className="moment-date">{"2024"}</div>
          <div>
            <h3>{"Continental champions again."}</h3>
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
        <article className="moment">
          <div className="moment-date">{"2024"}</div>
          <div>
            <h3>{"Setting the pace."}</h3>
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
        <article className="moment">
          <div className="moment-date">{"2025"}</div>
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
        <article className="moment">
          <div className="moment-date">{"2026"}</div>
          <div>
            <h3>{"Another title in Miami."}</h3>
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
      </div>
    </div>
  );
}
