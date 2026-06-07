# Raymond Abiola — Portfolio

A fast, single-page portfolio for a blockchain developer. Built with **Next.js 16 (App Router)**,
**TypeScript**, **Tailwind CSS v4**, **framer-motion**, and `next-themes`. Dark + light mode,
animated hero, project case-study pages, and SEO metadata. Deploys to **Vercel** with zero config.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## ✅ Things YOU need to add

1. **Your photo** → save it as `public/portrait.jpg` (a clear, portrait-oriented headshot).
   It shows in full colour in light mode and as an editorial monochrome image in dark mode —
   automatically, via CSS. No need to make two versions. Until you add it, a styled "RA"
   placeholder shows.

2. **Your résumé PDF** → save it as `public/Raymond-Abiola-Resume.pdf`.
   The "Résumé" / "Download Résumé" buttons link to it.

3. **Your live domain** (after first deploy) → update the URL in three spots so SEO/sitemap
   point at the right place:
   - `app/layout.tsx` → `siteUrl`
   - `app/sitemap.ts` → `base`
   - `app/robots.ts` → `sitemap`

## ✏️ Editing content

**All text, projects, skills, experience, and links live in one file:**
[`lib/data.ts`](lib/data.ts). Edit there — every component reads from it.

- Add/remove a project → edit the `projects` array. Each project automatically gets its own
  case-study page at `/projects/<slug>`.
- Update links (GitHub, X, LinkedIn, Telegram, email) → the `socials` object.
- Colours / theme palette → CSS variables in [`app/globals.css`](app/globals.css).

## 🚀 Deploy to Vercel

See the deployment steps shared in chat. Short version: push to GitHub → import the repo at
[vercel.com/new](https://vercel.com/new) → Vercel auto-detects Next.js → Deploy.
