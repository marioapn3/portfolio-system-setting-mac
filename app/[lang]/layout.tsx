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

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
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
  return {
    title,
    description: profile.tagline,
    keywords: [
      profile.name,
      profile.role,
      "Backend Engineer",
      "Golang",
      "NestJS",
      "Fullstack",
      "Portfolio",
    ],
    authors: [{ name: profile.name }],
    creator: profile.name,
    alternates: {
      languages: {
        en: "/en",
        id: "/id",
      },
    },
    openGraph: {
      title,
      description: profile.tagline,
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: profile.tagline,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
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
      <ThemeProvider>{children}</ThemeProvider>
    </LocaleProvider>
  );
}
