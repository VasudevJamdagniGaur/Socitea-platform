# SociTea Official Website

Marketing site, download center, and product entry points for **SociTea** — an AI-powered social content discovery and creation platform.

Built with React, TypeScript, Vite, Tailwind CSS, React Router, Lucide React, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## SociTea immersive site (Morphos shell)

Black-background SociTea experience with routed pages:

```bash
npm run morphos
```

Open [http://127.0.0.1:5180](http://127.0.0.1:5180).

Routes: `/` `/features` `/discover` `/create` `/extension` `/download`

Details in `morphos-site/README.md`.

## Product URLs

All download and product destinations are configured in:

- `src/config/products.ts` (helpers + availability logic)
- `.env.example` / `.env.local` (`VITE_*` public variables)

Leave URLs empty until they are verified. Unavailable surfaces show honest “Coming soon” states.

## Deploy

- **Vercel:** connect the repo; `vercel.json` rewrites SPA routes to `index.html`.
- **Cloudflare Pages:** build command `npm run build`, output `dist`; `public/_redirects` handles SPA fallback.

Do not deploy secrets. Only `VITE_*` public values belong in frontend env configuration.
