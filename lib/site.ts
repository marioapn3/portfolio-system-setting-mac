/**
 * Site-wide config: canonical base URL + brand.
 *
 * Env-driven so absolute URLs resolve correctly everywhere:
 *  - Dev:            http://localhost:3000
 *  - Vercel preview: https://<VERCEL_URL>
 *  - Production:     set NEXT_PUBLIC_SITE_URL to your live domain
 *
 * NEXT_PUBLIC_SITE_URL is what makes OG cards, sitemap entries, hreflang and
 * canonical URLs point at your real domain — set it in production.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  url: resolveSiteUrl(),
  name: "Mario Aprilnino Prasetyo",
  shortName: "Mario Aprilnino",
  role: "Backend Engineer",
  description:
    "Backend Engineer specializing in Golang and NestJS — scalable services, fintech, and AI-integrated applications. Portfolio of Mario Aprilnino Prasetyo.",
  /** Brand blue from the logo gradient. */
  accentColor: "#002bff",
  darkColor: "#000000",
  lightColor: "#f5f5f7",
} as const;

/** Join the site URL with a path, normalizing duplicate slashes. */
export function absoluteUrl(path = ""): string {
  if (/^https?:\/\//.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
