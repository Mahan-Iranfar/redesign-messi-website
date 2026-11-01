import { siteUrl, routes } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap() {
  return routes.map((route) => ({ url: `${siteUrl}${route}` }));
}
