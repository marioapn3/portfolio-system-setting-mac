"use client";

import { useId } from "react";
import { Segmented } from "@/components/ui/Segmented";
import { useChangeLocale, useLocale, useT } from "@/components/LocaleProvider";
import type { Locale } from "@/lib/i18n";

/** EN | ID segmented control bound to the URL locale (navigates on change). */
export function LanguageSegmented() {
  const locale = useLocale();
  const change = useChangeLocale();
  const t = useT();
  // This component is rendered in two places (sidebar + mobile Overview), so
  // give each instance a unique Segmented id → unique framer-motion layoutId.
  // A shared layoutId makes the active highlight misfire on locale switch.
  const uid = useId();
  return (
    <div className="space-y-1 px-2.5 py-2">
      <p className="text-[11px] font-medium text-fg-secondary">
        {t.language.label}
      </p>
      <Segmented<Locale>
        id={`language${uid}`}
        fullWidth
        value={locale}
        onChange={change}
        options={[
          { label: "EN", value: "en" },
          { label: "ID", value: "id" },
        ]}
      />
    </div>
  );
}
