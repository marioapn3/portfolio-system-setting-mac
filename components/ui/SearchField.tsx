"use client";

import { Icon } from "@/components/Icon";
import { useT } from "@/components/LocaleProvider";

/** macOS sidebar search field. */
export function SearchField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  const t = useT();
  return (
    <label className="relative flex items-center">
      <Icon
        name="search"
        size={13}
        className="pointer-events-none absolute left-2 text-fg-tertiary"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? t.search}
        className="h-7 w-full rounded-[6px] border border-separator bg-black/[0.05] pl-7 pr-2 text-[12px] text-fg placeholder:text-fg-tertiary focus:border-accent focus:bg-card focus:outline-none dark:bg-white/[0.08]"
      />
    </label>
  );
}
