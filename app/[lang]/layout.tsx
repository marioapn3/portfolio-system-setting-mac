import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/components/LocaleProvider";
import {
  defaultLocale,
  getContent,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/** Builds JSON-LD structured data (Person + WebSite + ProfilePage) for rich
 * results. Person is the canonical entity; WebSite/ProfilePage reference it. */
function buildJsonLd(locale: Locale) {
  const { profile, contact, skills } = getContent(locale);
  const personId = `${siteConfig.url}/#person`;
  const sameAs = contact.social
    .filter((s) => /^https?:\/\//.test(s.href))
    .map((s) => s.href);
  const knowsAbout = Array.from(
    new Set(skills.flatMap((c) => c.items.map((i) => i.name))),
  );

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    jobTitle: profile.role,
    description: profile.tagline,
    url: siteConfig.url,
    image: absoluteUrl("/images/mario.png"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Semarang",
      addressRegion: "Central Java",
      addressCountry: "ID",
    },
    knowsAbout,
    sameAs,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${profile.name} — Portfolio`,
    description: profile.tagline,
    inLanguage: locale,
    author: { "@id": personId },
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(`/${locale}`),
    inLanguage: locale,
    mainEntity: { "@id": personId },
  };

  return [person, website, profilePage];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const { profile } = getContent(locale);
  const title = `${profile.name} — ${profile.role}`;
  const localePath = `/${locale}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description: profile.tagline,
    applicationName: profile.name,
    authors: [{ name: profile.name, url: siteConfig.url }],
    creator: profile.name,
    publisher: profile.name,
    category: "technology",
    formatDetection: { telephone: false, address: false, email: false },
    keywords: [
      profile.name,
      profile.role,
      "Backend Engineer",
      "Golang Developer",
      "NestJS Developer",
      "Fullstack Developer",
      "Software Engineer",
      "Software Engineer Indonesia",
      "Semarang",
      "Portfolio",
    ],
    alternates: {
      canonical: localePath,
      languages: {
        en: "/en",
        id: "/id",
        "x-default": "/en",
      },
    },
    openGraph: {
      title,
      description: profile.tagline,
      type: "website",
      url: localePath,
      siteName: profile.name,
      locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? ["en_US"] : ["id_ID"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: profile.tagline,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.lightColor },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.darkColor },
  ],
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;

  return (
    <LocaleProvider locale={locale}>
      <ThemeProvider>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale)) }}
        />
      </ThemeProvider>
    </LocaleProvider>
  );
}
