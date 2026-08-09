<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack

- Next.js **16.2.9** (App Router) + React 19 + TypeScript strict, on **pnpm** (pnpm-lock.yaml — never npm/yarn).
- Tailwind **v4**: no `tailwind.config`, styles live in `app/globals.css` (`@import "tailwindcss"`). Dark mode is a custom variant toggling `.dark` on `<html>` via `ThemeProvider`.

## Commands

- `pnpm dev` — dev server (port 3000).
- `pnpm lint` — ESLint (flat config, `eslint.config.mjs`).
- `npx tsc --noEmit` — typecheck. There is no test suite; no test runner is configured.
- `pnpm build` — production build.

## Next 16 gotchas (verified against this repo)

- `proxy.ts` replaces the old `middleware.ts`. This repo's `proxy.ts` gates locales: locale-less paths redirect to `/en` or `/id` via Accept-Language. Mind its `matcher`.
- `params`/`searchParams` are **Promises** — `await params` in layouts/pages/metadata.
- The only real route is `app/[lang]/page.tsx`; `generateStaticParams` renders both locales.

## i18n architecture

Content is split by concern — do not dump translatable text into components:

- `lib/i18n/{en,id}.ts` — one content bundle per locale (`Content` shape from `lib/data.ts`).
- `lib/i18n/ui.ts` — UI string dictionaries; `uiId` is typed `typeof uiEn`, so adding a key in `uiEn` forces the `id` translation.
- `lib/data.ts` — types + non-translatable presentation assets (`projectAssets` image paths).
- Consumers use `getContent(locale)` / `getUi(locale)` via `LocaleProvider`/`useContent`.

Adding any content means touching **both** locale bundles.

## Site config

- `lib/site.ts` — `siteConfig.url` derives from `NEXT_PUBLIC_SITE_URL` (prod), `VERCEL_URL` (preview), else `http://localhost:3000`. Set the env var for correct canonical/OG/sitemap URLs.
- `next.config.ts` enables SVG in `next/image` (`dangerouslyAllowSVG`) for local brand logos under `public/` — keep that config as-is.
- Path alias: `@/*` → project root.
