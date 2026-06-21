"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export interface SegmentedOption<T extends string> {
  label: string;
  value: T;
}

/** macOS segmented control; active segment slides via layoutId. */
export function Segmented<T extends string>({
  options,
  value,
  onChange,
  id,
  fullWidth = false,
}: {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  id: string;
  fullWidth?: boolean;
}) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-[7px] bg-black/[0.06] p-0.5 dark:bg-white/[0.08]",
        fullWidth && "flex w-full",
      )}
    >
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o.value)}
            className={cn(
              "relative rounded-[6px] px-2.5 py-[3px] text-[11px] font-medium outline-none",
              fullWidth && "flex-1",
              active ? "text-fg" : "text-fg-secondary hover:text-fg",
            )}
          >
            {active && (
              <motion.span
                layoutId={`seg-${id}`}
                transition={{ type: "spring", stiffness: 600, damping: 38 }}
                className="absolute inset-0 rounded-[6px] bg-card shadow-sm ring-1 ring-separator dark:bg-[#3a3a3c]"
              />
            )}
            <span
              className={cn(
                "relative z-10 whitespace-nowrap",
                fullWidth && "block text-center",
              )}
            >
              {o.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
