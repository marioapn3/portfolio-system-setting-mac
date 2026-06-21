"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/Icon";
import { useT } from "@/components/LocaleProvider";

/**
 * Floating theme toggle for phones only — sits just above the liquid tab bar,
 * bottom-right. (The sidebar's Appearance control is hidden below md, so phones
 * need a dedicated theme action at the bottom.)
 */
export function MobileThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useT();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const isDark = resolvedTheme === "dark";
  const tt = t.themeToggle;

  return (
    <button
      type="button"
      aria-label={
        mounted
          ? `${tt.switchPrefix}${isDark ? tt.light : tt.dark}${tt.switchSuffix}`
          : tt.toggle
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-[92px] right-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/30 text-accent backdrop-blur-2xl md:hidden dark:border-white/15 dark:bg-white/10"
      style={{
        boxShadow:
          "inset 0 1px 1px rgba(255,255,255,0.45), 0 8px 24px -6px rgba(0,0,0,0.4)",
      }}
    >
      {mounted ? (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex"
          >
            <Icon name={isDark ? "moon" : "sun"} size={20} />
          </motion.span>
        </AnimatePresence>
      ) : (
        <span className="h-5 w-5" />
      )}
    </button>
  );
}
