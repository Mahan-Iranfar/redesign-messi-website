import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionController from "@/components/MotionController";
import { asset, siteUrl } from "@/lib/site";
const display = localFont({
  src: "../public/assets/fonts/display.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "700",
});
const body = localFont({
  src: "../public/assets/fonts/body.ttf",
  variable: "--font-body",
  display: "swap",
  weight: "400",
});
export const metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: "MESSI — Beyond The Game",
    template: "%s — Messi / Beyond The Game",
  },
  description: "An independent cinematic digital biography of Lionel Messi.",
  icons: { icon: asset("/assets/icons/favicon.svg") },
  openGraph: {
    type: "website",
    title: "MESSI — Beyond The Game",
    description: "The story of a legend. An independent digital biography.",
    images: [
      {
        url: asset("/assets/images/argentina-2022.webp"),
        width: 720,
        height: 744,
        alt: "Messi at Argentina v Mexico, 2022. Hossein Zohrevand / Tasnim, CC BY 4.0.",
      },
    ],
  },
};
export const viewport = { themeColor: "#08090b" };
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="progress" aria-hidden="true" />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MotionController />
      </body>
    </html>
  );
}
