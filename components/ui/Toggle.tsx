"use client";

import { motion } from "framer-motion";

/** macOS-style toggle switch (28×16, green when on). */
export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className="relative h-4 w-7 shrink-0 rounded-full transition-colors duration-200"
      style={{ backgroundColor: checked ? "#34c759" : "var(--separator-strong)" }}
    >
      <motion.span
        className="absolute top-[2px] h-3 w-3 rounded-full bg-white shadow-sm"
        animate={{ left: checked ? 14 : 2 }}
        transition={{ type: "spring", stiffness: 600, damping: 34 }}
      />
    </button>
  );
}
