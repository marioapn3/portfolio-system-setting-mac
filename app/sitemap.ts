import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

/**
 * Site-wide sitemap. One entry per locale, each declaring its hreflang
 * alternates (en, id, x-default) so Google understands the locale relationship
 * — this is the crawlable counterpart to the metadata `alternates.languages`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => {
    const isDefault = locale === defaultLocale;
    return {
      url: `${siteConfig.url}/${locale}`,
      lastModified,
      changeFrequency: "monthly",
      priority: isDefault ? 1 : 0.9,
      alternates: {
        languages: {
          en: `${siteConfig.url}/en`,
          id: `${siteConfig.url}/id`,
          "x-default": `${siteConfig.url}/en`,
        },
      },
    };
  });
}
