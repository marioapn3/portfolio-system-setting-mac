"use client";

import { motion } from "framer-motion";

export function Toggle({
  checked,
  onChange,
  label,
  disabled = false,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`
        relative h-4 w-7 shrink-0 rounded-full transition-all duration-200
        ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
      `}
      style={{
        backgroundColor: checked
          ? "#34c759"
          : "var(--separator-strong)",
      }}
    >
      <motion.span
        className="absolute top-[2px] h-3 w-3 rounded-full bg-white shadow-sm"
        animate={{ left: checked ? 14 : 2 }}
        transition={{ type: "spring", stiffness: 600, damping: 34 }}
      />
    </button>
  );
}