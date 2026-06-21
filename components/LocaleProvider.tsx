"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  getContent,
  getUi,
  type Content,
  type Locale,
  type Ui,
} from "@/lib/i18n";

interface LocaleContextValue {
  locale: Locale;
  content: Content;
  t: Ui;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * Provides the active locale's content + UI strings to the client tree. `locale`
 * comes from the `[lang]` URL segment (passed by the root layout), so it is
 * identical on server and client — no hydration mismatch.
 */
export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value = useMemo<LocaleContextValue>(
    () => ({ locale, content: getContent(locale), t: getUi(locale) }),
    [locale],
  );

  // Mirror the active locale onto <html lang> (the root layout can't — it has no
  // locale param). hreflang metadata carries the SEO signal in SSR.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

function useLocaleContext(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("i18n hooks must be used within <LocaleProvider>");
  }
  return ctx;
}

export function useLocale(): Locale {
  return useLocaleContext().locale;
}

export function useContent(): Content {
  return useLocaleContext().content;
}

export function useT(): Ui {
  return useLocaleContext().t;
}

/** Navigate to the same path under a different locale (swaps the /en|/id prefix). */
export function useChangeLocale() {
  const router = useRouter();
  const pathname = usePathname();
  return (next: Locale) => {
    const segments = pathname.split("/");
    // segments[0] === "" , segments[1] === current locale (if prefixed)
    const cur = segments[1];
    if (cur === "en" || cur === "id") {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join("/") || `/${next}`);
  };
}
