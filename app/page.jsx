import Link from "next/link";
import { asset } from "@/lib/site";
export const metadata = {
  title: "The story of a legend",
  description:
    "An independent cinematic journey through Lionel Messi’s life, football and legacy. Researched history and licensed archival photography.",
  alternates: { canonical: "./" },
};
export default function Page() {
  return (
    <div data-page="home">
      <section className="hero" id="intro">
        <img
          className="hero-image"
          src={asset("/assets/images/argentina-2022.webp")}
          width="720"
          height="744"
          alt="Lionel Messi during Argentina’s group-stage match against Mexico."
          fetchPriority="high"
        />
        <div className="wrap hero-inner">
          <div className="hero-kicker eyebrow">
            {"Lionel Andrés Messi · An independent story"}
          </div>
          <h1>
            {"MESSI"}
            <span className="blue">{"."}</span>
          </h1>
          <div className="hero-sub">{"BEYOND THE GAME."}</div>
          <p className="hero-description">
            {
              "From the streets of Rosario to the world's greatest stage. A story written in football."
            }
          </p>
          <a className="link" href="#rosario">
            {"Begin the journey "}
            <span>{"↓"}</span>
          </a>
        </div>
        <div className="hero-number" aria-hidden="true">
          {"10"}
        </div>
        <div className="hero-bottom">
          <span>{"01 — 07   /   Scroll to explore"}</span>
          <span className="photo-note">
            {"Argentina v Mexico · 26.11.2022"}
            <br />
            <Link href="/gallery/#credits">
              {"Hossein Zohrevand / Tasnim · CC BY 4.0 ↗"}
            </Link>
          </span>
        </div>
      </section>
      <div className="wrap chapter-strip">
        <a href="#rosario">{"01 / Rosario"}</a>
        <a href="#barcelona">{"02 / Barcelona"}</a>
        <a href="#art">{"03 / The art"}</a>
        <a href="#argentina">{"04 / Argentina"}</a>
        <a href="#worldcup">{"05 / The dream"}</a>
        <a href="#beyond">{"06 / Beyond"}</a>
        <a href="#legacy">{"07 / Legacy"}</a>
      </div>
      <section className="section rosario" id="rosario">
        <div className="wrap intro-grid">
          <div className="chapter-label">
            <b>{"01"}</b>
            <span className="eyebrow">{"Rosario · 1987–2000"}</span>
          </div>
          <div>
            <h2 className="reveal">
              {"Every legend"}
              <br />
              {"has a "}
              <span className="italic">{"beginning."}</span>
            </h2>
            <p className="lead reveal">
              {
                "Before the stadiums, there was Rosario. Born on 24 June 1987, Lionel Andrés Messi began a journey that would take him across an ocean."
              }
            </p>
            <p className="muted max-w-xl">
              {
                "Newell’s Old Boys became his football home in 1995. Five years later, at thirteen, he joined Barcelona’s youth system."
              }
            </p>
            <div className="route">
              <div>
                <span className="eyebrow">{"The beginning"}</span>
                <br />
                <strong>{"ROSARIO, AR"}</strong>
              </div>
              <div className="text-right">
                <span className="eyebrow">{"The next chapter"}</span>
                <br />
                <strong>{"BARCELONA, ES"}</strong>
              </div>
              <svg
                viewBox="0 0 700 130"
                role="img"
                aria-label="Schematic route from Rosario to Barcelona"
              >
                <path
                  d="M15 110Q350 -90 685 20"
                  fill="none"
                  stroke="#777"
                  strokeDasharray="3 7"
                ></path>
                <circle cx="15" cy="110" r="6" fill="#08090b"></circle>
                <circle cx="685" cy="20" r="6" fill="#08090b"></circle>
                <text
                  x="285"
                  y="92"
                  fill="#555"
                  fontSize="12"
                  letterSpacing="4"
                >
                  {"A NEW WORLD · 2000"}
                </text>
              </svg>
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
        </div>
      </section>
      <section className="section" id="barcelona">
        <div className="wrap">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
            <div className="chapter-label">
              <b>{"02"}</b>
              <span className="eyebrow">{"Barcelona · 2000–2021"}</span>
            </div>
            <h2 className="section-title reveal">
              {"Where a legend"}
              <br />
              {"was built."}
            </h2>
          </div>
          <div className="timeline-layout">
            <div className="timeline-visual">
              <figure className="photo-mask reveal">
                <img
                  src={asset("/assets/images/barcelona-2011.webp")}
                  width="1197"
                  height="1800"
                  alt="Lionel Messi at Camp Nou during Barcelona’s Champions League match against Arsenal."
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="credit">
                  {"Barcelona v Arsenal, Champions League · 2011-03-08"}
                  <br />
                  <a href="https://commons.wikimedia.org/wiki/File:Messi_FC_BARCELONA_-_ARSENAL_8_MAR_2011.jpg">
                    {"m.caimary"}
                  </a>
                  {" · "}
                  <a href="https://creativecommons.org/licenses/by/2.0/">
                    {"CC BY 2.0"}
                  </a>
                  {" · WebP / cropped / tonal treatment."}
                </figcaption>
              </figure>
              <div className="year" aria-hidden="true">
                {"2000—2021"}
              </div>
              <p className="credit">
                {
                  "Archive photograph: 8 March 2011. It remains dated independently of the selected timeline year."
                }
              </p>
            </div>
            <div>
              <article className="timeline-item" data-year="2000">
                <span className="eyebrow blue">{"2000"}</span>
                <h3>{"An ocean. A new beginning."}</h3>
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
              </article>
              <article className="timeline-item" data-year="2004">
                <span className="eyebrow blue">{"2004"}</span>
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
              </article>
              <article className="timeline-item" data-year="2009">
                <span className="eyebrow blue">{"2009"}</span>
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
              </article>
              <article className="timeline-item" data-year="2012">
                <span className="eyebrow blue">{"2012"}</span>
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
              </article>
              <article className="timeline-item" data-year="2015">
                <span className="eyebrow blue">{"2015"}</span>
                <h3>{"The treble returns."}</h3>
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
              </article>
              <article className="timeline-item" data-year="2021">
                <span className="eyebrow blue">{"2021"}</span>
                <h3>{"An era closes."}</h3>
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
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="section art" id="art">
        <div className="wrap art-grid">
          <div>
            <div className="chapter-label">
              <b>{"03"}</b>
              <span className="eyebrow">{"The language of football"}</span>
            </div>
            <h2 className="section-title reveal mt-8">
              {"Not just"}
              <br />
              {"goals. "}
              <span className="italic blue">{"Art."}</span>
            </h2>
            <p className="lead muted mt-8">
              {
                "A change of direction. A pass through a space nobody else sees. A game made to look effortless."
              }
            </p>
            <div className="art-words">
              <span>{"01 / Vision"}</span>
              <span>{"02 / Precision"}</span>
              <span>{"03 / Creativity"}</span>
            </div>
          </div>
          <div className="pitch-scene">
            <svg
              className="pitch"
              viewBox="0 0 600 380"
              role="img"
              aria-label="Artistic football movement illustration, not a reconstruction of a match"
            >
              <rect
                x="20"
                y="20"
                width="560"
                height="340"
                rx="3"
                fill="#131d23"
                stroke="#647c88"
              ></rect>
              <path
                d="M300 20V360 M20 100H110V280H20 M580 100H490V280H580 M20 140H60V240H20 M580 140H540V240H580"
                fill="none"
                stroke="#647c88"
              ></path>
              <circle
                cx="300"
                cy="190"
                r="55"
                fill="none"
                stroke="#647c88"
              ></circle>
              <path
                className="move"
                d="M100 280C240 300 170 130 300 160S370 270 440 190S480 140 550 190"
                stroke="#75bce8"
                strokeWidth="3"
                fill="none"
              ></path>
              <g fill="#75bce8">
                <circle cx="100" cy="280" r="7"></circle>
                <circle cx="300" cy="160" r="7"></circle>
                <circle cx="440" cy="190" r="7"></circle>
              </g>
              <circle cx="550" cy="190" r="8" fill="#f5f3ef"></circle>
            </svg>
            <p className="credit">
              {
                "An original artistic study of movement. Not match tracking data."
              }
            </p>
          </div>
        </div>
      </section>
      <section className="section argentina" id="argentina">
        <div className="wrap intro-grid">
          <div>
            <div className="chapter-label">
              <b>{"04"}</b>
              <span className="eyebrow">{"Argentina · The long road"}</span>
            </div>
            <h2 className="section-title reveal mt-8">
              {"The weight"}
              <br />
              {"of a "}
              <span className="italic">{"nation."}</span>
            </h2>
          </div>
          <div>
            <p className="lead">
              {
                "Olympic gold in 2008. A World Cup final in 2014. And then, at the Maracanã in 2021, the wait for a senior international title ended."
              }
            </p>
            <p className="mt-6 muted">
              {
                "Argentina defeated Brazil in the Copa América final. The next chapter would take them to Qatar."
              }
            </p>
            <div className="score">
              <span className="eyebrow">
                {"Copa América"}
                <br />
                {"10 July 2021"}
              </span>
              <b>{"ARG 1—0 BRA"}</b>
            </div>
            <div className="mt-8">
              <a
                className="source"
                href="https://copaamerica.com/en/news/copa-america-2021-argentina-champions-after-28-years"
                target="_blank"
                rel="noopener"
              >
                {"Historical source ↗"}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section worldcup" id="worldcup">
        <div className="wc-year" aria-hidden="true">
          {"2022"}
        </div>
        <div className="wrap">
          <span className="eyebrow gold">
            {"05 / Lusail, Qatar · 18 December 2022"}
          </span>
          <h2 className="reveal">
            {"The dream."}
            <br />
            <span className="italic gold">{"Realized."}</span>
          </h2>
          <p className="lead muted">
            {
              "A final that refused to end. Six goals. Extra time. A penalty shootout. Argentina, world champions."
            }
          </p>
          <div
            className="sculpture reveal"
            role="img"
            aria-label="Original abstract golden sculpture, not the official trophy"
          ></div>
          <span className="eyebrow">
            {"Argentina 3—3 France   /   4—2 on penalties"}
          </span>
          <figure className="worldcup-photo photo-mask reveal">
            <img
              src={asset("/assets/images/world-cup-final-2022.webp")}
              width="1600"
              height="900"
              alt="Argentina players celebrate with the World Cup trophy at Lusail Stadium on December 18, 2022; a spectator-video still, viewed from behind the podium."
              loading="lazy"
              decoding="async"
            />
            <figcaption className="credit">
              {"Argentina v France, 2022 FIFA World Cup final · 2022-12-18"}
              <br />
              <a href="https://commons.wikimedia.org/wiki/File:Argentina_3-3_Francia_-_Copa_Mundial_2022_-_Argentina_campe%C3%B3n.jpg">
                {"Sebas"}
              </a>
              {" · "}
              <a href="https://creativecommons.org/licenses/by/3.0/">
                {"CC BY 3.0"}
              </a>
              {" · WebP / cropped / tonal treatment."}
            </figcaption>
          </figure>
          <div className="cup-stats">
            <div>
              <strong>{"07"}</strong>
              <span>{"Messi's tournament goals"}</span>
            </div>
            <div>
              <strong>{"02"}</strong>
              <span>{"Goals in the final"}</span>
            </div>
            <div>
              <strong>{"18.12"}</strong>
              <span>{"The day of the dream"}</span>
            </div>
          </div>
          <p className="eyebrow gold mt-16 mb-6">
            {"For the boy who never stopped dreaming."}
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
      </section>
      <section className="section beyond" id="beyond">
        <div className="wrap beyond-grid">
          <div>
            <div className="chapter-label">
              <b>{"06"}</b>
              <span className="eyebrow">{"Beyond football"}</span>
            </div>
            <h2 className="section-title reveal mt-8">
              {"More than"}
              <br />
              {"the "}
              <span className="italic">{"game."}</span>
            </h2>
            <p className="lead">
              {
                "A platform that reaches beyond the touchline. The Leo Messi Foundation supports children through health, education and sport."
              }
            </p>
            <Link className="link" href="/foundation/">
              {"Explore the foundation "}
              <span>{"↗"}</span>
            </Link>
          </div>
          <div className="beyond-aside">
            <span className="eyebrow">{"A different kind of impact"}</span>
            <h3 className="mt-6">
              {"HEALTH."}
              <br />
              {"EDUCATION."}
              <br />
              {"OPPORTUNITY."}
            </h3>
            <p>
              {
                "UNICEF appointed Messi a Goodwill Ambassador in March 2010. Its public record documents his advocacy and support for children."
              }
            </p>
            <a
              className="source"
              href="https://www.unicef.org/goodwill-ambassadors/leo-messi"
            >
              {"UNICEF's public record ↗"}
            </a>
          </div>
        </div>
      </section>
      <section className="section legacy" id="legacy">
        <div className="wrap">
          <div className="legacy-top">
            <div className="chapter-label">
              <b>{"07"}</b>
              <span className="eyebrow">{"The legacy continues"}</span>
            </div>
            <p className="muted max-w-sm text-sm">
              {
                "Barcelona. Paris. Miami. A career across continents, and a place in football history. Explore the dated archive, through October 2026."
              }
            </p>
          </div>
          <h2 className="reveal">
            {"Beyond the game."}
            <br />
            <span className="italic blue">{"Beyond generations."}</span>
          </h2>
          <div className="legacy-links">
            <Link className="link" href="/story/">
              {"Explore the story ↗"}
            </Link>
            <Link className="link" href="/moments/">
              {"Discover the moments ↗"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
