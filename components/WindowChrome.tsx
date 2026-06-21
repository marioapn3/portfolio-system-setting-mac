"use client";

import type { ReactNode } from "react";

/**
 * Native-feeling window frame: traffic-light controls + titlebar showing the
 * active pane name, floating on a desktop backdrop. Capped width so it reads as
 * a centered window on large screens, not a full-screen app. On mobile it drops
 * the frame and fills the viewport.
 */
export function WindowChrome({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-dvh w-full justify-center lg:py-6">
      <div className="flex w-full max-w-[1000px] flex-col overflow-hidden bg-win shadow-[0_30px_90px_-20px_rgba(0,0,0,0.5)] ring-1 ring-window-border sm:rounded-none lg:h-[calc(100dvh-3rem)] lg:rounded-[16px]">
        {/* Title bar */}
        <div className="relative flex h-10 shrink-0 items-center border-b border-separator bg-titlebar/50 backdrop-blur-xl">
          <div className="flex items-center gap-2 pl-3.5">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "var(--tl-red)" }}
            />
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "var(--tl-yellow)" }}
            />
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "var(--tl-green)" }}
            />
          </div>
          <h1 className="pointer-events-none absolute inset-x-0 text-center text-[13px] font-semibold text-fg-secondary">
            {title}
          </h1>
        </div>

        {children}
      </div>
    </div>
  );
}
