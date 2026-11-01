# MESSI — Beyond The Game · Next.js App Router

A cinematic, unofficial Lionel Messi digital biography. Version 2.0 migrates the approved v1.1 design to real React components and Next.js App Router routes, preserving the Career scroll experience, licensed imagery and editorial visual system.

## Stack

- Next.js 16.4.3, App Router (`app/`)
- React / React DOM 19.3.1
- Tailwind CSS 3.4.17 and custom CSS
- Native IntersectionObserver, CSS perspective and requestAnimationFrame
- Self-hosted fonts through `next/font/local`
- Static export for GitHub Pages: no runtime Node server, database or API key

The package lock pins the dependency tree. Use Node 22 or newer.

## Quick start

```bash
npm ci
npm run dev
```

Visit http://localhost:3000. Production verification:

```bash
npm test
npm run build
npm run check
npm start
```

`npm start` serves the actual `out/` static export at http://localhost:8080. It is a local preview utility, not a required production backend. Do not open HTML through file://.

## Routing and rendering

| URL | Source |
| --- | --- |
| `/` | `app/page.jsx` |
| `/story/` | `app/story/page.jsx` |
| `/career/` | `app/career/page.jsx` |
| `/moments/` | `app/moments/page.jsx` |
| `/gallery/` | `app/gallery/page.jsx` |
| `/foundation/` | `app/foundation/page.jsx` |
| Not found | `app/not-found.jsx` |

`next/link` provides client-side navigation. Editorial page content is rendered at build time as Server Components. Interactive components are client boundaries. This is **App Router with a static export**, not a single HTML file with a simulated router. GitHub Pages cannot run Next.js request-time server features. `output: 'export'` and `trailingSlash: true` generate real directory indexes so direct URLs and refreshes work.

Do not rewrite every request to the homepage. Upload the entire `out/` directory, including `_next`, route payload files and `.nojekyll`. Removing Next route payloads can break client navigation while reload still appears to work.

## Project structure

```text
app/                     # React route pages, root layout, metadata, global CSS
components/
  Header.jsx             # Next Links, active route, accessible mobile menu
  Footer.jsx             # Shared footer and native route links
  Gallery.jsx            # React filters and native-dialog lightbox
  MotionController.jsx   # Route-aware effects and forward-navigation scroll reset
lib/
  motion.js              # Scoped observers/listeners/frames with complete cleanup
  site.js                # Base-path-aware assets and site URLs
  data/                  # Research, timeline, achievement and image license records
public/
  assets/                # Local photography, SVG and font license files
  HISTORICAL_RESEARCH.md
  IMAGE_CREDITS.md
scripts/
  postbuild.mjs          # .nojekyll and local preview base-path metadata
  check-export.mjs       # Verify routes, asset paths and route payload presence
  serve.mjs              # Serve the real exported build locally
.github/workflows/
  deploy.yml             # GitHub Pages build/check/upload/deploy
```

No old `pages/` router, HTML generator or legacy script bootstrap remains. Route files are editable JSX. Update `lib/data` and corresponding editorial JSX when changing historical copy; there is no automatic historical news feed.

## GitHub Pages — first deployment

1. Create an empty GitHub repository, for example `messi-beyond-the-game`.
2. Extract this ZIP and open a terminal inside its project directory.
3. Push the source using the commands below, replacing the URL with your repository.
4. On GitHub open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Open **Actions → Deploy Next.js to GitHub Pages → Run workflow**, or push a new commit.
6. Wait for both `build` and `deploy` to pass. The deployment job reports the exact site URL.

```bash
git init
git add .
git commit -m "Migrate Messi biography to Next.js App Router"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

The included workflow uses `actions/configure-pages` outputs to set `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL`. This supports project repositories, `USERNAME.github.io` root repositories and configured custom domains without hardcoding your username or repo name.

If Actions starts before Pages is enabled, enable Pages and rerun the workflow. GitHub Pages availability for private repositories depends on your account; public repositories are the simplest portfolio setup.

Do not upload `node_modules`, `.next` or `out` manually into the source repository. The workflow builds `out` and publishes it as an artifact.

## Updating an existing repository

Back up any personal changes before replacing old source. Remove the old root `index.html`, `pages/`, `src/`, `assets/`, `dist/`, static-generation scripts and old workflow when replacing the v1.x project. Copy this version's complete source while preserving your repository's `.git` directory. This avoids two competing entrypoints.

```bash
npm ci
npm test
npm run build
npm run check
git add -A
git commit -m "Upgrade Messi site to Next.js App Router"
git push
```

## Local repository-path test

The base path is baked into the build. Rebuild whenever it changes.

macOS/Linux/Git Bash:

```bash
NEXT_PUBLIC_BASE_PATH=/messi-beyond-the-game NEXT_PUBLIC_SITE_URL=https://YOUR_USERNAME.github.io npm run build
NEXT_PUBLIC_BASE_PATH=/messi-beyond-the-game npm run check
npm start
```

PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = "/messi-beyond-the-game"
$env:NEXT_PUBLIC_SITE_URL = "https://YOUR_USERNAME.github.io"
npm run build
npm run check
npm start
```

Visit http://localhost:8080/messi-beyond-the-game/ and test `/career/` directly. To return to root development in PowerShell:

```powershell
Remove-Item Env:NEXT_PUBLIC_BASE_PATH -ErrorAction SilentlyContinue
Remove-Item Env:NEXT_PUBLIC_SITE_URL -ErrorAction SilentlyContinue
npm run dev
```

`NEXT_PUBLIC_SITE_URL` is the origin only; `NEXT_PUBLIC_BASE_PATH` is either empty or `/repository-name` without a trailing slash. `.env.example` documents both.

## Other hosts

Vercel and Netlify can build this static configuration with `npm run build`, output `out`. For root-domain hosting, leave base path empty. This version intentionally keeps a static output; it does not use server actions, route handlers requiring a server, image optimization APIs or request-time authentication.

## Motion and navigation reliability

Career has six scroll-directed chapters, a sticky number stage, subtle perspective rings and progress tracking. Other pages reveal editorial content as it enters the viewport. `MotionController` reinitializes on pathname changes; cleanup aborts listeners, disconnects observers and cancels pending frames. No perpetual animation loop runs at rest. Forward route changes reset to the top while hash links and browser history are left to native/Next behavior.

Gallery filters and photo selection use React state. The native dialog supports Escape, left/right navigation, focus containment and restoration. Mobile navigation closes on route changes and traps keyboard focus while open.

Reduced-motion preferences switch Career to static readable records. Content remains present without JavaScript. Font loading is local and handled by Next; no external font request is needed at build or runtime.

## Research, assets and limitations

Historical content was carried forward unchanged from the researched edition dated 31 October 2026. This migration is not a new historical audit. See `HISTORICAL_RESEARCH.md` and `IMAGE_CREDITS.md`.

Four authentic images are included with source, photographer and Creative Commons license records. Chapters lacking reusable event-specific photos retain typography. The 2011 Barcelona image is explicitly dated and does not pretend to depict the other timeline years.

Original code is MIT licensed. Photos retain their individual CC licenses. Font SIL OFL files are bundled. No official affiliation or endorsement is implied. No numerical Lighthouse, Core Web Vitals or frame-rate score is claimed; see `QA_REPORT.md` for actual checks.

Independent concept project. Not affiliated with or endorsed by Lionel Messi, his representatives, or associated organizations.
