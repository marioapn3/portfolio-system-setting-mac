"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Segmented } from "@/components/ui/Segmented";
import { useT } from "@/components/LocaleProvider";

/** Light / Dark / Auto segmented control bound to the theme provider. */
export function ThemeSegmented() {
  const { theme, setTheme } = useTheme();
  const t = useT();
  // resolvedTheme is undefined during SSR; useSyncExternalStore gives a
  // deterministic client-only flag without setState-in-effect.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const value = mounted ? theme ?? "system" : "system";

  return (
    <div className="space-y-1 px-2.5 py-2">
      <p className="text-[11px] font-medium text-fg-secondary">
        {t.theme.appearance}
      </p>
      <Segmented
        id="theme"
        fullWidth
        value={value}
        onChange={setTheme}
        options={[
          { label: t.theme.light, value: "light" },
          { label: t.theme.dark, value: "dark" },
          { label: t.theme.auto, value: "system" },
        ]}
      />
    </div>
  );
}
