# Sound Fire & Safety LLC — Website

Marketing website for Sound Fire & Safety LLC, a Washington-based fire protection company.
Built with **React 18 + Vite + TypeScript + Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  data/           All site copy and config — edit here, not in components
    site.ts       Company details, phone numbers, address, nav, credentials
    services.ts   The three services + industries served
    company.ts    About, mission, vision, values, why-choose-us, leadership bios
  components/
    layout/       Header (top bar, nav, mobile drawer), Footer, Layout shell
    ui/           Container, Button, SectionHeading, PageHero, Reveal
    home/         Homepage-only sections (Hero, TrustStrip, Services, About)
    sections/     Sections reused across pages (CoreValues, ReasonsGrid,
                  IndustriesGrid, FeatureSplit, CtaBand, ContactForm/Section,
                  Credentials, LeadershipPreview)
  pages/          One file per route
  lib/            cn() class helper, useSeo() per-route title/meta
public/images/    Logo, leadership photos, stock photography
  industries/     One photo per industry served
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us — who we are, mission, vision, commitment, values, credentials |
| `/services` | All three services in detail |
| `/services/:slug` | Individual service page |
| `/industries` | Industries we serve |
| `/why-choose-us` | All 7 reasons |
| `/leadership` | Full leadership bios |
| `/contact` | Contact form, details and map |

## How enquiries reach the company

Two paths, both landing in the company inbox:

1. **"Request Service" buttons** (header, hero, every CTA band) open the visitor's mail
   client addressed to `contact.email` with a pre-filled subject and a short template
   asking for name, phone, site address and service needed. Built by
   `requestServiceMailto` in `src/data/site.ts` — change the template there.
2. **The contact form** (`/contact`, and the block at the foot of most pages) posts JSON
   to `VITE_CONTACT_ENDPOINT` when it is set (see `.env.example`) — Formspree, Netlify
   Forms, Web3Forms or a custom endpoint. Without an endpoint it also falls back to
   opening the visitor's mail client, so it is never a dead end.

```bash
cp .env.example .env
# VITE_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Because the Request Service buttons mail the company directly, **`contact.email` in
`src/data/site.ts` must be correct before launch** — it is currently a placeholder.

## Before launch — items needing client confirmation

1. **Email address (blocking)** — `info@soundfireandsafety.com` in `src/data/site.ts` is
   a placeholder; the content document listed `info@.........`. Every "Request Service"
   button mails this address directly, so it must be replaced before launch.
2. **Address vs. headquarters** — the content document gives the contact address as
   *11400 Airport Rd, Suite 200, Everett, WA 98024* but describes the company as
   *headquartered in Bothell, Washington*. Both appear on the site as written; confirm
   which is public-facing. Note the ZIP `98024` is a Fall City ZIP — verify it.
3. **Leadership photos** — Abdoulie Lowe and Nixon Kwaku Duah Junior have headshots.
   Haddy Saho and Mass Lowe show branded initials placeholders; drop a file into
   `public/images/team/` and add a `photo` path in `src/data/company.ts` to swap one in.
   Post-nominal qualifications go in the optional `credentials` array on a leader
   (Nixon's are already set); they render as chips on the bio and under the card name.
4. **Business license** — `src/data/site.ts` lists it as "On request"; update once the
   documentation is available.
5. **Domain** — `site.url`, `index.html`'s canonical/OG tags, `public/robots.txt` and
   `public/sitemap.xml` all assume `https://www.soundfireandsafety.com`.
6. **Photography** — hero, service, industry and page-header imagery is licensed stock
   from Pexels (see `public/images/CREDITS.md`). Swap in the client's own equipment, van
   and job-site photos when available; paths are referenced from `src/data/services.ts`
   (services and the nine industries) and the section components.

## Deployment

The site is a static SPA — any static host works. SPA fallback config is included for
Netlify (`public/_redirects`) and Vercel (`vercel.json`).

```bash
npm run build   # outputs dist/
```
