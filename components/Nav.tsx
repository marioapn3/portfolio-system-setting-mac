"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";
import { IconBadge } from "@/components/ui/IconBadge";
import { SearchField } from "@/components/ui/SearchField";
import { ThemeSegmented } from "@/components/ThemeSegmented";
import { LanguageSegmented } from "@/components/LanguageSegmented";
import { cn } from "@/lib/cn";
import { type TabId } from "@/lib/data";
import { useContent, useT } from "@/components/LocaleProvider";

interface NavProps {
  active: TabId;
  onNavigate: (id: TabId) => void;
}

function SidebarItem({
  id,
  label,
  icon,
  color,
  active,
  onNavigate,
}: {
  id: TabId;
  label: string;
  icon: string;
  color: string;
  active: boolean;
  onNavigate: (id: TabId) => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={`panel-${id}`}
      tabIndex={active ? 0 : -1}
      onClick={() => onNavigate(id)}
      className={cn(
        "relative flex w-full items-center gap-2.5 rounded-md px-2 py-[5px] text-left text-[13px] outline-none",
        active ? "text-white" : "text-fg hover:bg-black/5 dark:hover:bg-white/10",
      )}
    >
      {active && (
        <motion.span
          layoutId="ss-active"
          transition={{ type: "spring", stiffness: 520, damping: 40 }}
          className="absolute inset-0 rounded-md bg-accent"
        />
      )}
      <IconBadge icon={icon} color={color} className="relative z-10" />
      <span className="relative z-10 truncate font-medium">{label}</span>
    </button>
  );
}

/** Native System Settings sidebar: search, account row, colored squircle nav. */
export function Sidebar({ active, onNavigate }: NavProps) {
  const { navItems, profile } = useContent();
  const t = useT();
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? navItems.filter((n) => n.label.toLowerCase().includes(q)) : navItems;
  }, [query, navItems]);

  return (
    <aside className="ss-sidebar hidden w-[220px] shrink-0 flex-col border-r border-separator md:flex">
      <div className="px-2.5 pt-2.5">
        <SearchField value={query} onChange={setQuery} />
      </div>

      {/* Apple Account style profile row */}
      <div className="px-1.5 pt-2">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="flex w-full items-center gap-2.5 rounded-md px-1.5 py-1.5 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/10"
        >
          <Image
            src="/images/mario.png"
            alt={profile.name}
            width={28}
            height={28}
            className="h-7 w-7 shrink-0 rounded-full object-cover"
          />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[13px] font-semibold text-fg">
              {profile.name}
            </span>
            <span className="block truncate text-[11px] text-fg-secondary">
              {profile.role}
            </span>
          </span>
          <Icon name="chevronRight" size={13} className="shrink-0 text-fg-tertiary" />
        </button>
      </div>

      <nav
        aria-label={t.nav.sections}
        aria-orientation="vertical"
        className="flex-1 space-y-0.5 overflow-y-auto px-1.5 py-2"
      >
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            id={item.id}
            label={item.label}
            icon={item.icon}
            color={item.color}
            active={item.id === active}
            onNavigate={onNavigate}
          />
        ))}
        {items.length === 0 && (
          <p className="px-2 py-4 text-center text-[12px] text-fg-tertiary">
            {t.nav.noMatches}
          </p>
        )}
      </nav>

      <div className="border-t border-separator">
        <LanguageSegmented />
        <div className="border-t border-separator">
          <ThemeSegmented />
        </div>
      </div>
    </aside>
  );
}

/** Mobile: iOS 26 "liquid glass" floating bottom tab bar (phones only). */
export function MobileTabBar({ active, onNavigate }: NavProps) {
  const { navItems } = useContent();
  const t = useT();
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-5 md:hidden">
      <nav
        aria-label={t.nav.sections}
        aria-orientation="horizontal"
        className="pointer-events-auto flex h-[60px] w-full max-w-[420px] items-stretch gap-1 rounded-[30px] border border-white/25 bg-white/30 px-2 backdrop-blur-2xl dark:border-white/15 dark:bg-white/10"
        style={{
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.45), 0 12px 44px -10px rgba(0,0,0,0.45)",
        }}
      >
        {navItems.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onNavigate(item.id)}
              className="relative flex h-full flex-1 flex-col items-center justify-center gap-0.5 rounded-[22px] outline-none"
            >
              {isActive && (
                <motion.span
                  layoutId="liquid-active"
                  transition={{ type: "spring", stiffness: 480, damping: 36 }}
                  className="absolute inset-x-0 inset-y-1 rounded-[50px] bg-white/80 shadow-sm ring-1 ring-white/40 dark:bg-white/20 dark:ring-white/15"
                />
              )}
              <Icon
                name={item.icon}
                size={22}
                strokeWidth={2}
                className={cn(
                  "relative z-10",
                  isActive ? "text-accent" : "text-fg-secondary",
                )}
              />
              <span
                className={cn(
                  "relative z-10 text-[10px] font-semibold leading-none",
                  isActive ? "text-accent" : "text-fg-secondary",
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
