# Daleon Dynamics — Company Website

Official marketing website for **Daleon Dynamics**, a Nairobi-based web design and custom software development company serving Kenyan businesses.

🔗 **Live site:** [daleondynamics.com](https://daleondynamics.com)

---

## 📖 About This Project

This repository powers the full public-facing website for Daleon Dynamics — a service-area business (no physical office) offering web design, custom software development, business automation, and biometric access control systems, primarily to clients across Kenya.

The site is built with a strong focus on:
- **SEO** — structured data (Schema.org JSON-LD) on every page, a dynamic sitemap, clean metadata, and accurate canonical URLs
- **Performance** — server-rendered with the Next.js App Router, optimized images, no client-side bloat on static pages
- **A distinct visual identity** — a dark, techy, violet/teal design system built around the fact that this is, itself, a software company

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16 (App Router, Turbopack) |
| Language | TypeScript |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Icons | [lucide-react](https://lucide.dev) |
| Class utilities | `clsx` + `tailwind-merge` (via a shared `cn()` helper) |
| Hosting | [Vercel](https://vercel.com) |
| Domain / DNS | [Namecheap](https://namecheap.com) |
| Contact form backend | [Web3Forms](https://web3forms.com) |
| Submission logging + auto-reply | Google Apps Script + Google Sheets (see below) |
| Images | Next.js Image Optimization, sourced from Unsplash and Cloudinary |

No traditional database is used — see [Data & Content](#-data--content) below for how content and form submissions are handled instead.

---

## ✨ Features

- Fully responsive, dark-themed marketing site (Home, About, Services + 3 sub-service pages, Projects, Careers, Blog, Contact)
- Dynamic, filterable **Projects** portfolio
- Full **Blog** system with a single shared data source, per-article `BlogPosting` + `FAQPage` schema, and rich content support (tables, callout quotes, FAQs)
- Working **contact form** (Web3Forms) with a secondary, non-blocking integration that logs every submission to a Google Sheet and sends the submitter a branded HTML confirmation email
- Newsletter signup on the blog page (Web3Forms)
- Full technical SEO: `sitemap.ts`, `robots.ts`, per-page `alternates.canonical`, Open Graph + Twitter Card metadata, and a global `Organization` schema referenced by `@id` across every page (no duplicate/conflicting entity data)
- Floating WhatsApp contact button
- Careers page with an honest "no open positions" state (no fabricated job postings)

---

## 📁 Project Structure

```
app/
├── layout.tsx                        # Root layout — Navbar, Footer, global Organization schema, WhatsApp button
├── page.tsx                          # Homepage
├── sitemap.ts                        # Dynamic sitemap (includes blog posts from shared data)
├── robots.ts                         # robots.txt generation
├── about/page.tsx
├── careers/page.tsx
├── projects/
│   ├── page.tsx                      # Server component — metadata + schema
│   └── ProjectsGrid.tsx              # Client component — interactive category filter
├── services/
│   ├── page.tsx                      # Services hub
│   ├── high-converting-website/page.tsx
│   └── custom-web-apps/page.tsx
├── contact/
│   ├── page.tsx                      # Server component — metadata + schema
│   └── ContactClient.tsx             # Client component — the actual form
├── blogs/
│   ├── page.tsx                      # Blog listing
│   └── NewsletterForm.tsx            # Client component — newsletter signup
└── blog/
    └── [slug]/page.tsx               # Individual article template (shared across all posts)

src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ShareButton.tsx
├── data/
│   └── blog-posts.ts                 # Single source of truth for ALL blog content
└── lib/
    └── utils.ts                      # cn() class-merging helper

public/
├── assets/logo.png
└── icon.png
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ (Next.js 16 requirement)
- npm

### Installation

```bash
git clone <repository-url>
cd daleon-next
npm install
```

### Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

---

## 🎨 Design System

The site uses a consistent dark, techy palette across every page:

| Token | Hex | Usage |
|---|---|---|
| Background | `#0A0A0F` | Base page background |
| Surface | `#0F141B` / `#0F0F14` | Cards, panels |
| Border | `#232330` | Hairlines, dividers |
| **Signal** (primary accent) | `#7B5CFF` | CTAs, links, active states — violet |
| **Circuit** (secondary accent) | `#38E1C6` | Hover states, checkmarks, success — teal |
| Text | `#F2F1F7` | Primary text |
| Text muted | `#8E8CA3` | Secondary text |

Monospace type (`font-mono`) is used for small "// eyebrow" labels above headings throughout the site — a recurring signature detail rather than a one-off.

---

## 📝 Data & Content

### Blog posts
All blog content lives in **`src/data/blog-posts.ts`** — a single shared array imported by both the blog listing page and the individual article template. **Never duplicate post data elsewhere** — add a new post by adding one entry to this array; the listing page, the article page, the sitemap, and all structured data update automatically.

Each post supports:
- Standard fields (title, excerpt, category, dates, image)
- Rich HTML `content` (headings, tables, blockquotes, internal links)
- An optional `faqs` array — when present, a matching `FAQPage` schema block is generated automatically for that article

### Contact form flow
1. Submission → **Web3Forms** — this is what the user's "Message Sent" confirmation depends on, and what emails the business inbox
2. In parallel, a **fire-and-forget** call goes to a Google Apps Script Web App, which:
   - Appends the submission to a Google Sheet (acting as a lightweight database)
   - Sends the business a plain-text notification
   - Sends the submitter a branded HTML confirmation email

This second call is intentionally non-blocking — if it fails, the user's actual submission experience (driven by Web3Forms) is unaffected.

---

## 🔍 SEO Notes

- Every page defines its own `metadata` export (title, description, canonical, Open Graph, Twitter Card)
- **Titles use `title: { absolute: '...' }`** wherever a page's title already contains the brand suffix, to avoid the root layout's `title.template` doubling it (a bug pattern that hit this project more than once — see git history)
- A single global `Organization` entity is defined once in `app/layout.tsx` and referenced by `@id` everywhere else — never redefine `Organization`/`LocalBusiness` inline on individual pages
- `app/sitemap.ts` pulls blog post entries from `src/data/blog-posts.ts` directly — no manually duplicated URL list
- No physical office → schema deliberately omits `address`/`geo` fields rather than fabricating one; Google Business Profile should be configured as a **Service Area Business**

---

## 🌐 Deployment

- **Hosting:** Vercel, connected to this repository for automatic deployments on push
- **Domain:** `daleondynamics.com`, registered via Namecheap, DNS pointed to Vercel
- **www → apex redirect:** handled at the Vercel domain-settings level (not in `next.config.ts`) to avoid conflicting/duplicate redirect logic
- Remaining app-level redirects (retired URLs, corrected slugs) are defined in `next.config.ts`

---

## 📬 Contact

**Daleon Dynamics**
Nairobi, Kenya
📧 daleondynamics@gmail.com
📱 [WhatsApp](https://wa.me/254142021359)
🌐 [daleondynamics.com](https://daleondynamics.com)