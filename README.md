# Adv3D Product Development & Prototyping Funnel

Marketing landing page for **Advanc3D** targeting medical device startups, inventors, and engineering teams. Parallel to `adv3d-hobbyist-funnel` and `opservices.advanc3dinc.com`.

> **Live URL (target):** https://adv3d-productdev-funnel.vercel.app

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (CSS-based `@theme` tokens, no `tailwind.config.js`)
- Framer Motion (subtle scroll reveals, no loops)
- React Hook Form + Zod (form validation)
- react-dropzone (file upload)
- lucide-react (icons)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Section map (in order)

1. `components/navbar.tsx` — sticky w/ blur backdrop, mobile hamburger
2. `components/hero.tsx` — outcome-first headline + CTA pair + placeholder
3. `components/problem.tsx` — "THE BOTTLENECK" + 4 pain-point cards
4. `components/why-advanc3d.tsx` — 3 value props
5. `components/process.tsx` — 4-step horizontal stepper
6. `components/materials.tsx` — 4 material cards
7. `components/cta-bottom.tsx` — form + file upload
8. `components/footer.tsx` — wordmark + nav + external link

`app/thank-you/page.tsx` is the post-submit confirmation page.

## Image strategy

All 11 photography slots are styled `<div>` placeholders via `components/image-placeholder.tsx`. Each slot has a code comment describing the intended shot. No stock-image hotlinks. Replace with `next/image` once photography is sourced.

| Slot | Section | Comment |
|---|---|---|
| hero-product | Hero | close-up nylon/resin prototype in engineer's hand next to CAD laptop |
| process-1..4 | Process | file upload UI / team review / machine running / finished part |
| materials-1..4 | Materials | MJF nylon / TPU / SLA resin / biocompatible resin macro shots |
| cta-wearable-calipers | CTA | wearable device component on desk beside calipers |

## Production wiring points

`app/api/contact/route.ts` is a scaffold stub. Dev-mode console log only. Wire to:

- **Book a Discovery Call** → Calendly / HubSpot / webhook (set `CALENDLY_URL` or `HUBSPOT_PORTAL_ID` env)
- **Upload Project Files** → S3 / Uploadthing (set `S3_BUCKET` / `UPLOADTHING_SECRET` env)
- **Email notification** → Brevo / SMTP (set `BREVO_API_KEY` or `SMTP_URL` env)

All values are env-driven. Do NOT inject placeholder addresses into shipped source. If a real contact value is missing, the build does NOT auto-fill with a fallback (per the Brevo/SMTP tripwire, 2026-06-28).

## SEO

- `metadataBase` = `https://adv3d-productdev-funnel.vercel.app`
- `og:title` / `og:description` match the brief §7
- `title` template uses absolute metadata (not dynamic)

## Deploy

`vercel.json` pins the framework. `npm run build` produces a Vercel-deployable artifact. The `adv3d-productdev-funnel` Vercel project alias is the canonical production URL.
