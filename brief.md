# Adv3D Product Dev & Prototyping Funnel — Build Brief (v1, clean stack)

> **Status:** Fresh build (2026-06-28). Distinct from prior `adv3d-product-dev` builds — simpler stack (no Payload, no Brevo, no Postgres), new repo, new workspace.
> **Operator intent:** Build and deploy a third marketing funnel variant for Advanc3D targeting medical device startups, inventors, and engineering teams.
> **Workflow skill:** `/opt/data/skills/devops/autonomous-build-workflow/SKILL.md` (binding — defines the contract every worker must obey).
> **Reference visual benchmarks:**
>   - https://opservices.advanc3dinc.com/ (B2B contract-mfg funnel)
>   - https://adv3d-hobbyist-funnel.vercel.app/ (hobbyist funnel, live)

---

## 1. Project

**Name:** Adv3D Product Development & Prototyping Funnel
**Audience:** Medical device startups, inventors, and engineering teams
**Goal:** Book a discovery call / upload project details
**Positioning:** Third funnel — parallel to live `adv3d-hobbyist-funnel.vercel.app` and `opservices.advanc3dinc.com`. Does NOT replace either.

---

## 2. Repo, workspace, deploy

- **Target repo:** `https://github.com/crob04/adv3d-productdev-funnel` (NEW — create via `gh repo create crob04/adv3d-productdev-funnel --public --source=. --remote=origin`)
- **Workspace orchestrator:** `/opt/data/hermes-orchestrator/adv3d-productdev-funnel-v1/`
- **Workspace dev server:** `/home/codex/hermes-orchestrator/adv3d-productdev-funnel-v1/` (absolute path — ignore `HERMES_KANBAN_WORKSPACE` if it conflicts)
- **Board slug:** `adv3d-productdev-funnel-v1`
- **Deploy:** Vercel → expected alias `https://adv3d-productdev-funnel.vercel.app`

---

## 3. Tech stack (locked)

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (subtle scroll reveals only — no loops)
- **Forms:** React Hook Form + Zod validation
- **File upload:** react-dropzone (for project file upload CTA)
- **Icons:** lucide-react
- **Deployment:** Vercel
- **No backend:** No Payload, no Postgres, no Brevo, no Brevo/SMTP. API route is a scaffold stub.
- **Committer identity (per-repo, NOT global):** `crob04 <45148987+crob04@users.noreply.github.com>`

---

## 4. Design system (locked tokens)

Define in `tailwind.config.js`:

```js
colors: {
  brand: {
    black: '#0A0A0A',
    white: '#F5F5F5',
    accent: '#F97316',   // orange — matches advanc3d brand energy
    muted: '#1A1A1A',
    border: '#2A2A2A',
    text: '#C4C4C4',
  }
}
```

- Dark background throughout (`#0A0A0A` base)
- Typography: Inter for body, Syne (or Space Grotesk as fallback) for headings (Google Fonts via `next/font`)
- Headings: large, tight letter-spacing, white (`#F5F5F5`)
- Body text: `#C4C4C4`, 16–18px, `max-w-2xl` for readability
- CTA buttons: solid orange `#F97316` with black text, `rounded-full`, `px-8 py-4`
- Secondary buttons: ghost style, white border, white text
- Section padding: `py-24` desktop, `py-16` mobile
- Max content width: `max-w-6xl mx-auto px-6`
- Responsive: mobile-first. `sm: 640px, md: 768px, lg: 1024px, xl: 1280px`

---

## 5. Site structure (locked order)

Single long-form landing page `/` with these 8 sections in order:

1. **Navbar** — sticky with subtle blur backdrop, mobile hamburger
2. **Hero** — 2-col desktop (copy left, image placeholder right), stacked mobile
3. **Problem** — "THE BOTTLENECK" section label, 2x2 pain-point card grid
4. **Why Advanc3D** — 3 value prop cards (horizontal desktop, stacked mobile)
5. **Process** — 4-step horizontal stepper desktop, vertical mobile
6. **Materials** — 4 material cards (2x2 grid or 4-col large)
7. **CTA Bottom** — 2-col (Book a Call form left, File Upload right)
8. **Footer** — wordmark + tagline + nav + external link + copyright

Optional: `/thank-you` confirmation page after form submit.

---

## 6. Section-by-section copy (binding — T5 implements verbatim)

### 6.1 NAVBAR
- Logo: text "Advanc3D" in white, bold, left-aligned
- Nav links: `How It Works` | `Materials` | `Get a Quote` (scroll anchors)
- Sticky on scroll, subtle blur backdrop
- Mobile: hamburger menu

### 6.2 HERO

**Layout:** Two-column on desktop (copy left, image placeholder right). Stacked on mobile.

**Headline:**
```
From CAD File to Functional Prototype —
Without the 6-Week Wait.
```

**Subheadline:**
```
Advanc3D is the additive manufacturing partner for medical device teams
that need design iteration at the speed of a startup. Design collaboration,
short-run production, material flexibility, and accelerated iteration —
from first concept to production-intent part.
```

**Primary CTA button:** `Book a Discovery Call`
**Secondary CTA button:** `Upload Project Files → 24hr Quote`

**Trust line beneath buttons:**
```
NDA-ready · US-based · HP MJF, SLA, FDM & TPU in-house
```

**Image area (right column):** Styled placeholder div, dark card, dashed border, label "Hero Product Photo", `aspect-ratio 4/3`. Code comment: `// Replace with: close-up nylon/resin prototype in engineer's hand next to CAD laptop, warm workshop lighting`

### 6.3 PROBLEM

**Section label:** `THE BOTTLENECK`

**Heading:**
```
Most Contract Manufacturers Are Built for Volume.
Your Prototype Isn't.
```

**Body:**
```
Early-stage medical device development doesn't follow a linear path — it cycles.
You validate a concept, find a flaw, redesign overnight, and need the next
iteration in your hands before your investor meeting or IRB submission.
Standard contract manufacturers quote in weeks, require production-level
drawings, and charge tooling fees before they've touched your file.
That's not a manufacturing partner. That's a delay.
```

**Four pain point cards (Lucide icons, 2x2 grid):**
1. `Clock` — "Long quoting processes that assume finalized engineering drawings"
2. `Package` — "MOQ requirements forcing 500-unit orders when you need 5 to validate"
3. `AlertTriangle` — "Material limitations that compromise mechanical properties during testing"
4. `XCircle` — "No design feedback — vendors who print what you sent, even when a wall change would prevent failure"

Cards: dark bg `#1A1A1A`, orange left border accent, `rounded-lg`.

### 6.4 WHY ADVANC3D

**Section label:** `WHY US`

**Heading:**
```
Built for Iteration. Priced for Early Stage. Ready for Production.
```

**Three value prop cards:**

**Card 1 — Design Collaboration**
- Icon: `Users`
- Title: `We Review the Part, Not Just the File.`
- Body: `Our team flags DFM issues, tolerance risks, and material mismatches before we start the machine. You get feedback that makes the next version better — not just a print of what you submitted.`

**Card 2 — Material Flexibility**
- Icon: `Layers`
- Title: `The Right Material for What the Part Has to Do.`
- Body: `HP MJF nylon for structural load. TPU at calibrated shore hardness for soft interfaces. SLA resin for fine-detail validation. Biocompatible-grade materials for patient-contact applications.`

**Card 3 — Short-Run Production**
- Icon: `Zap`
- Title: `One Prototype or Fifty Pilot Units — Same Workflow.`
- Body: `No minimum order. No gated quote process. When you're ready to scale, we scale with you.`

Cards: dark bg, orange icon, subtle border, hover lift via Framer Motion.

### 6.5 PROCESS (HOW IT WORKS)

**Section label:** `HOW IT WORKS`

**Heading:**
```
Four Steps From Concept to Production-Intent Part
```

**Step 1:** Upload Files or a Design Brief
`STL, STEP, or a plain description of what the part needs to do. We meet teams where their design actually is.`

**Step 2:** Review and Response Within 24 Hours
`DFM feedback, material recommendation, lead time, and quote. No black-box pricing.`

**Step 3:** Approve and We Build
`Production runs in 3–7 business days. Progress updates provided — not silence.`

**Step 4:** Parts Arrive Ready for Testing
`Post-processed, finished, and documented. Ready for bench testing, clinical validation, or investor demonstration.`

### 6.6 MATERIALS

**Section label:** `MATERIALS`

**Heading:**
```
Material Matched to Function — Not to What's Loaded in the Machine.
```

| Material | Use Case | Property callout |
|---|---|---|
| HP MJF Nylon (PA12) | Structural components, housings | High tensile strength, isotropic |
| TPU | Soft interfaces, gaskets, liners | Shore A 85–95, flexible |
| SLA Resin | Fine-detail validation models | High resolution, smooth surface |
| Biocompatible Resin | Patient-contact applications | ISO 10993 compatible |

Cards: dark bg, material name in white bold, use case in muted text, property callout as an orange badge.

### 6.7 CTA BOTTOM

**Heading:**
```
Your Next Iteration Shouldn't Take 6 Weeks.
```

**Subhead:**
```
Tell us what you're building. We'll tell you what's possible —
and when we can have it in your hands.
```

**Left — Book a Call form (React Hook Form + Zod):**
- Name (text, required)
- Email (email, required)
- Company (text, optional)
- Brief project description (textarea, required)
- Submit button: `Book a Discovery Call`
- On submit: POST to `/api/contact`. Log to console in dev. Comment: `// Wire to Calendly, HubSpot, or webhook in production`

**Right — Upload Project Files (react-dropzone):**
- Accept `.stl`, `.step`, `.stp`, `.pdf`, `.zip`
- Label: `Drop your files here or click to browse`
- Subtext: `STL · STEP · PDF · ZIP accepted`
- Button below: `Submit for 24hr Quote`
- On file drop: show file name confirmation. Comment: `// Wire to S3 or Uploadthing in production`

**Trust footer line beneath both forms:**
```
US-based · HP MJF + SLA + FDM + TPU · NDA-ready · Short-run & pilot production · Biocompatible materials available
```

### 6.8 FOOTER
- Left: "Advanc3D" wordmark + tagline `Additive manufacturing for teams that move fast.`
- Center: Nav links — `How It Works` | `Materials` | `Book a Call`
- Right: `advanc3dinc.com` external link
- Bottom bar: `© 2026 Advanced 3D Inc. All rights reserved.`
- Dark bg `#0A0A0A`, subtle top border `#2A2A2A`

---

## 7. SEO / Head (binding)

```html
<title>Medical Device Prototyping & Short-Run Production | Advanc3D</title>
<meta name="description" content="Advanc3D helps medical device startups and engineering teams iterate faster — 24hr quotes, 3–7 day builds, no MOQ, biocompatible materials. Book a discovery call." />
<meta property="og:title" content="From CAD File to Functional Prototype — Without the 6-Week Wait." />
<meta property="og:description" content="Design collaboration, material flexibility, and short-run production for medical device teams." />
```

Set `metadataBase` to the production canonical URL (NOT `example.com` or `localhost`). T5 must verify post-build.

---

## 8. Animation spec (binding)

- Framer Motion `fadeInUp` on section entry (staggered children where applicable)
- Subtle only: `0.4s` duration, `y: 20` offset
- **NO loop animations**
- Smooth scroll on all anchor links (CSS `scroll-behavior: smooth` + `next/link` for nav)

---

## 9. Image strategy (binding)

**Every image slot is a styled dark placeholder div with a code comment** describing the intended photograph. Do NOT use lorem picsum or external placeholder services. Image slots:

| Section | Slot | Comment |
|---|---|---|
| Hero | `hero-product` | "close-up nylon/resin prototype in engineer's hand next to CAD laptop, warm workshop lighting" |
| Problem | `problem-bottleneck` | "split visual — clean CAD render (left) vs warped/failed print on build plate (right)" |
| Materials | `materials-grid-1..4` | "macro shot of MJF nylon surface texture" / "TPU sample at shore A hardness" / "SLA resin fine-detail model" / "biocompatible resin sample" |
| Process | `process-1..4` | "file upload UI" / "team review on screen" / "machine running (HP MJF/SLA)" / "finished part in output tray" |
| CTA bottom | `cta-wearable-calipers` | "wearable device component on desk beside calipers, warm natural light" |

Per v3 workflow: T2 produces an image-strategy.md noting these slots are intentionally placeholder (no photography available yet). T5 implements the placeholders as styled `<div>` elements with descriptive comments. Do NOT attempt to download stock images.

---

## 10. API route (binding scaffold)

`app/api/contact/route.ts` — accepts POST, validates body with Zod, returns `{ success: true }`. Logs submission to console. Comment block:
```ts
// Wire to production integrations in this handler:
//   - Calendly / HubSpot / webhook for "Book a Discovery Call"
//   - S3 / Uploadthing for "Upload Project Files"
//   - Email notification via Brevo or SMTP (use env vars, NOT hardcoded)
```

**Do NOT inject placeholder emails or contact values into shipped source code.** Env-driven only. If a real contact value is missing, the build blocks on T7 — it does NOT auto-fill with `info@crobinson-consulting.com` or any fallback. (Per the Brevo/SMTP tripwire from 2026-06-28.)

---

## 11. Repo & deployment (binding)

1. `npx create-next-app@latest adv3d-productdev-funnel --typescript --tailwind --eslint --app`
2. Install: `framer-motion react-hook-form zod @hookform/resolvers react-dropzone lucide-react`
3. `git init`, initial commit `init: adv3d product dev funnel scaffold`
4. `gh repo create crob04/adv3d-productdev-funnel --public --source=. --remote=origin --push`
5. Add `vercel.json` at root: `{ "framework": "nextjs" }`
6. Include `README.md` documenting: purpose, tech stack, section map, wiring points (Calendly, HubSpot, S3/Uploadthing, webhook)

---

## 12. Acceptance criteria (binding)

- [ ] Repo exists at `crob04/adv3d-productdev-funnel` with clean commit history
- [ ] Site runs locally via `npm run dev` with no errors
- [ ] All 8 sections render on mobile and desktop
- [ ] Both CTA forms functional (client-side Zod validation, submit handler, success state)
- [ ] File upload accepts `.stl/.step/.stp/.pdf/.zip` and shows confirmation
- [ ] API route accepts POST and returns `{ success: true }`
- [ ] Smooth scroll + Framer Motion animations + responsive layout working
- [ ] README documents all production wiring points
- [ ] All 5 deployability checks PASS (build, no placeholder domains, local 200, no localhost metadata, self-canonical URL)
- [ ] Vercel deploy succeeds, alias URL returns HTTP 200 (NOT 302 to Vercel login)
- [ ] Pre-push `git remote -v | grep origin` matches `crob04/adv3d-productdev-funnel` EXACTLY

---

## 13. Workspace discipline (binding)

- All build/test/commit/push on dev server at `/home/codex/hermes-orchestrator/adv3d-productdev-funnel-v1/`
- Workers use terminal/file/code_execution directly (v3 RESCINDED MCP-only lockdown)
- Workers cap MCP wrapper polling at 3 polls then verify filesystem
- Workers verify `ls -la <artifact>` for every output before `kanban_complete`
- T5 (coder) must NOT skip git remote verification before push
- T8 (vercel-deploy) must check `vercel project protection` BEFORE `vercel deploy --prod` — disable SSO if on