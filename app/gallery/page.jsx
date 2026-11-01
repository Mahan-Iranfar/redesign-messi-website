import Link from "next/link";
import { asset } from "@/lib/site";
import Gallery from "@/components/Gallery";
export const metadata = {
  title: "Gallery",
  description:
    "Gallery — a researched, independent Lionel Messi digital biography.",
  alternates: { canonical: "./gallery/" },
};
export default function Page() {
  return (
    <div data-page="gallery">
      <div className="wrap page-head">
        <span className="eyebrow blue">{"The archive / 04"}</span>
        <h1>
          {"The photographic"}
          <br />
          {"archive."}
        </h1>
        <p className="lead muted">
          {
            "Four photographs. Four documented contexts. Real moments, credited to the people who captured them."
          }
        </p>
      </div>
      <div className="wrap pb-24">
        <Gallery />
        <section id="credits" className="rule pt-12 mt-16">
          <h2 className="section-title mb-8">{"Behind the lens."}</h2>
          <p className="muted max-w-2xl mb-8">
            {
              "Images are resized and converted to WebP. Editorial layouts crop images and apply tonal treatments. Each original retains its Creative Commons license. No endorsement is implied."
            }
          </p>
          <p className="credit mb-4">
            <a href="https://commons.wikimedia.org/wiki/File:Lionel_Messi_WC2022.jpg">
              {"Argentina v Mexico, 2022 FIFA World Cup"}
            </a>
            {" — Hossein Zohrevand / Tasnim News Agency · "}
            <a href="https://creativecommons.org/licenses/by/4.0/">
              {"CC BY 4.0"}
            </a>
          </p>
          <p className="credit mb-4">
            <a href="https://commons.wikimedia.org/wiki/File:Messi_FC_BARCELONA_-_ARSENAL_8_MAR_2011.jpg">
              {"Barcelona v Arsenal, Champions League"}
            </a>
            {" — m.caimary · "}
            <a href="https://creativecommons.org/licenses/by/2.0/">
              {"CC BY 2.0"}
            </a>
          </p>
          <p className="credit mb-4">
            <a href="https://commons.wikimedia.org/wiki/File:CINvMIA_2023-08-23_-_Lionel_Messi%2C_Tata_Martino_%28PXL_20230824_010525464%29_%28Messi_crop%29.jpg">
              {"FC Cincinnati v Inter Miami, U.S. Open Cup semifinal"}
            </a>
            {" — Hayden Schiff · "}
            <a href="https://creativecommons.org/licenses/by/4.0/">
              {"CC BY 4.0"}
            </a>
          </p>
          <p className="credit mb-4">
            <a href="https://commons.wikimedia.org/wiki/File:Argentina_3-3_Francia_-_Copa_Mundial_2022_-_Argentina_campe%C3%B3n.jpg">
              {"Argentina v France, 2022 FIFA World Cup final"}
            </a>
            {" — Sebas · "}
            <a href="https://creativecommons.org/licenses/by/3.0/">
              {"CC BY 3.0"}
            </a>
          </p>
          <p className="credit mt-8">
            {
              "No reusable archival imagery was acquired for childhood, the 2004 debut, the 2021 Copa América, PSG or charitable initiatives. These chapters intentionally use typography. "
            }
            <a href={asset("/IMAGE_CREDITS.md")}>{"Full asset inventory ↗"}</a>
          </p>
        </section>
      </div>
    </div>
  );
}
