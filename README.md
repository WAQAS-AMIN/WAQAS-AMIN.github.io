# waqasamin — portfolio

Static portfolio for **Waqas Amin**, frontend software engineer (Angular · React · TypeScript).
Built to the Modernist design handoff: 2px rules, zero border-radius, no shadows, two background
colours, Archivo throughout.

Live: <https://waqas-amin.github.io/>

## Stack

Vite + React 19 + TypeScript, plain CSS custom properties. No UI kit, no CSS framework.
`react-router-dom` for the two routes.

## Routes

| Route | What |
|---|---|
| `/` | Home — intro curtain, hero, marquee, stats, recent projects, about, testimonials, contact |
| `/work/:slug` | Case study (`patient-intake` ships today) |

Deep links survive a refresh on GitHub Pages via `public/404.html`, which stashes the requested
path in `sessionStorage` and hands it back to the router in `src/main.tsx`.

## Content

Everything editable lives in [`src/content.ts`](src/content.ts) — copy, projects, stats, services,
stack, testimonials, case studies, and the motion constants (`MARQUEE_SECONDS`, `INTRO_MS`,
`HERO_REVEAL_BASE_MS`, `TESTIMONIAL_INTERVAL_MS`). No component holds hard-coded copy.

Two rules the content has to keep:

- Every fact comes from `Waqas-Amin-CV.pdf`. Don't invent metrics, clients or years.
- The word **portal** never appears in the UI. The vocabulary is "web apps" / "apps".

## Motion

| Thing | Timing |
|---|---|
| Intro curtain | 2100ms `cubic-bezier(.76,0,.24,1)`, once per session |
| Hero reveal | curtain + 1250ms base, 90ms stagger |
| Scroll reveal | 800ms `cubic-bezier(.2,.7,.2,1)`, IntersectionObserver, 90ms stagger |
| Stat count-up | 1400ms ease-out-cubic on rAF |
| Show-more cards | 700ms `riseIn`, 70ms stagger |
| Marquee | 30s linear, duplicated track |
| Theme swap | 400ms ease |
| Mobile tab bar | slides up 620ms after a 1900ms delay |

`prefers-reduced-motion: reduce` skips the curtain and reveals everything immediately.
Only `transform` and `opacity` animate; the scroll progress bar is a rAF-driven `scaleX` from a
passive scroll listener; hover effects sit behind `@media (hover: hover)`.

## Mobile

Its own design, not a scaled desktop, at a single `820px` breakpoint: 20px gutters, shortened hero
copy, a fixed bottom tab bar (Home / Work / About / accent "Hire me") with active-section
highlighting, 52px minimum tap targets, 2×2 stats, single-column grids.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build && npm run preview
```

`npm run lint` runs oxlint.

## Contact form

Static hosting, so there is no backend. Set `VITE_FORMSPREE_ENDPOINT` (see `.env.example`) to post
to Formspree; without it the form falls back to a `mailto:` submission. Validation is inline: name
required, valid email, project message at least 20 characters.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/` with
`actions/deploy-pages`. Repo **Settings → Pages → Source** must be set to **GitHub Actions**.

### Adding the custom domain

The site currently ships on the `github.io` URL — no `CNAME` file, because a CNAME pointing at
DNS that isn't ready yet takes the site down.

When the DNS for the domain is live:

```bash
echo "waqasamin.pro" > public/CNAME
```

DNS at the registrar:

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `waqas-amin.github.io` |

Then set the domain in **Settings → Pages** and tick **Enforce HTTPS**. Update the `canonical`
and `og:url` tags in `index.html` at the same time.

## Assets still to replace

The striped grayscale blocks are deliberate placeholders, not bugs. Swap them for:

- Portrait, about section — `440×560` display, presented grayscale `contrast(1.06)`
- Featured project #1 — `~1280×640`; #2 — two at `~640×460`; #3 — `~1280×580`
- Case study hero — `~1280×660`

`public/Waqas-Amin-CV.pdf` backs the "Download CV" link.
