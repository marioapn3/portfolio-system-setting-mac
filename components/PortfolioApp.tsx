"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar, MobileTabBar } from "@/components/Nav";
import { WindowChrome } from "@/components/WindowChrome";
import { MobileThemeButton } from "@/components/MobileThemeButton";
import { sectionMap } from "@/components/sections";
import { type TabId } from "@/lib/data";
import { useContent } from "@/components/LocaleProvider";
import { useTab } from "@/components/TabProvider";

const EASE = [0.4, 0, 0.2, 1] as const;

// Direction-aware slide between panes (like System Settings navigation).
const variants = {
  enter: (dir: number) => ({ x: dir >= 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? -40 : 40, opacity: 0 }),
};

export function PortfolioApp() {
  const { navItems } = useContent();
  const { index, setIndex } = useTab();
  const [direction, setDirection] = useState(0);
  const indexRef = useRef(0);
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const active = navItems[index].id;
  const title = navItems[index].label;
  const Section = sectionMap[active];

  const navigate = useCallback(
    (id: TabId) => {
      const next = navItems.findIndex((n) => n.id === id);
      const prev = indexRef.current;
      if (next === -1 || next === prev) return;
      // Call setDirection and setIndex separately — setIndex now lives in
      // TabProvider, so nesting setDirection inside its updater would update
      // this component while React renders a different one.
      setDirection(next > prev ? 1 : -1);
      setIndex(next);
    },
    [navItems, setIndex],
  );

  // Arrow-key navigation (skips form fields).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        navigate(navItems[Math.min(indexRef.current + 1, navItems.length - 1)].id);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        navigate(navItems[Math.max(indexRef.current - 1, 0)].id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, navItems]);

  return (
    <WindowChrome title={title}>
      <div className="flex min-h-0 flex-1">
        <Sidebar active={active} onNavigate={navigate} />

        <main className="relative min-w-0 flex-1">
          <div className="relative h-full min-h-0 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.section
                key={active}
                id={`panel-${active}`}
                role="tabpanel"
                aria-label={title}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: EASE }}
                className="absolute inset-0 overflow-y-auto overflow-x-hidden"
              >
                <div className="mx-auto w-full max-w-[680px] px-5 pb-28 pt-5 sm:px-7 md:pb-6 lg:pt-8">
                  <Section onNavigate={navigate} />
                </div>
              </motion.section>
            </AnimatePresence>
          </div>
        </main>
      </div>

      <MobileTabBar active={active} onNavigate={navigate} />
      <MobileThemeButton />
    </WindowChrome>
  );
}
