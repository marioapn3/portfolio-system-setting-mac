"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark" | "system";
type Resolved = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: Resolved;
  setTheme: (theme: Theme) => void;
}

const STORAGE_KEY = "theme";
const CHANGE_EVENT = "themechange";
const ThemeContext = createContext<ThemeContextValue | null>(null);

// --- External stores: localStorage (chosen theme) + matchMedia (system pref).
// useSyncExternalStore reads these without setState-in-effect and gives a stable
// server snapshot so SSR stays consistent.

function subscribeTheme(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(CHANGE_EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(CHANGE_EVENT, cb);
  };
}
function readTheme(): Theme {
  return (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "system";
}
function readThemeServer(): Theme {
  return "system";
}

function subscribeSystem(cb: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function readSystemDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function readSystemDarkServer(): boolean {
  return false;
}

/**
 * Lightweight theme provider (class strategy, persisted to localStorage under
 * "theme"). The flash-of-wrong-theme is prevented by an inline <script> in the
 * root server layout that sets `.dark` *before* hydration — this client
 * component renders no <script> and uses no setState-in-effect, so React 19
 * stays quiet (the former next-themes provider tripped both).
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, readTheme, readThemeServer);
  const systemDark = useSyncExternalStore(
    subscribeSystem,
    readSystemDark,
    readSystemDarkServer,
  );
  const resolvedTheme: Resolved =
    theme === "system" ? (systemDark ? "dark" : "light") : theme;

  // Side effect only — keep the DOM class in sync. No setState here.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", resolvedTheme === "dark");
    root.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  const setTheme = useCallback((next: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore quota / privacy-mode errors
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}
