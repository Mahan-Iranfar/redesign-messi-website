export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (path) => `${basePath}/${path.replace(/^\/+/, "")}`;
export const origin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://messi-beyond-the-game-mahan.sweetlotus7.chatgpt.site";
export const siteUrl = `${origin.replace(/\/$/, "")}${basePath}`;
export const routes = [
  "/",
  "/story/",
  "/career/",
  "/moments/",
  "/gallery/",
  "/foundation/",
];
