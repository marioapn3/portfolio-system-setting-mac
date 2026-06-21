"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface TabContextValue {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const TabContext = createContext<TabContextValue | null>(null);

/**
 * Holds the active nav tab. Lives in the ROOT layout so it survives a locale
 * switch — navigating /id ↔ /en remounts the page (and PortfolioApp), which
 * would otherwise reset the tab to Overview. Root layout never remounts, so the
 * tab persists.
 */
export function TabProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);
  return (
    <TabContext.Provider value={{ index, setIndex }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab(): TabContextValue {
  const ctx = useContext(TabContext);
  if (!ctx) throw new Error("useTab must be used within <TabProvider>");
  return ctx;
}
