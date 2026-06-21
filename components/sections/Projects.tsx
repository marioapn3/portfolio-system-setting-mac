"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";
import { projectAssets, type Project } from "@/lib/data";
import { useContent, useT } from "@/components/LocaleProvider";

const EASE = [0.4, 0, 0.2, 1] as const;

// Bucket keys stay English — bucketOf() regex-matches the (English) role string,
// so only the displayed label is translated, never the value.
type Bucket = "All" | "Backend" | "Fullstack" | "Mobile" | "DevOps";
const BUCKETS: Bucket[] = ["All", "Backend", "Fullstack", "Mobile", "DevOps"];

function bucketOf(role: string): Exclude<Bucket, "All"> {
  if (/devops/i.test(role)) return "DevOps";
  if (/fullstack/i.test(role)) return "Fullstack";
  if (/mobile/i.test(role)) return "Mobile";
  return "Backend";
}

function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const t = useT();
  const asset = projectAssets[project.name];
  const cover = asset?.cover ?? "/images/logo.svg";
  const hasLinks = Boolean(
    project.url || project.repo || project.playStore || project.appStore,
  );

  return (
    <div>
      <div className="flex items-center gap-3 px-3.5 py-2.5">
        {/* Main toggle: cover + name/role. */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex min-w-0 flex-1 items-center gap-3 rounded-md text-left transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
        >
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-[10px] bg-white p-1.5 ring-1 ring-black/5 dark:bg-white/85 dark:ring-white/15">
            <Image
              src={cover}
              alt={project.name}
              fill
              sizes="44px"
              className="object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-medium text-fg">{project.name}</p>
            <p className="truncate text-[11px] text-fg-secondary">{project.role}</p>
          </div>
        </button>

        {/* External links — kept OUTSIDE the toggle button so the <a> tags are
            valid (interactive content can't nest inside a <button>). */}
        {hasLinks && (
          <div className="flex shrink-0 items-center gap-1">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name}${t.projects.aria.website}`}
                className="grid h-8 w-8 place-items-center rounded-full text-fg-tertiary transition-colors hover:bg-black/[0.06] hover:text-fg dark:hover:bg-white/[0.1]"
              >
                <Icon name="globe" size={16} />
              </a>
            )}
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name}${t.projects.aria.googlePlay}`}
                className="grid h-8 w-8 place-items-center rounded-full text-fg-tertiary transition-colors hover:bg-black/[0.06] hover:text-fg dark:hover:bg-white/[0.1]"
              >
                <Icon name="googleplay" size={15} />
              </a>
            )}
            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name}${t.projects.aria.appStore}`}
                className="grid h-8 w-8 place-items-center rounded-full text-fg-tertiary transition-colors hover:bg-black/[0.06] hover:text-fg dark:hover:bg-white/[0.1]"
              >
                <Icon name="apple" size={15} />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name}${t.projects.aria.source}`}
                className="grid h-8 w-8 place-items-center rounded-full text-fg-tertiary transition-colors hover:bg-black/[0.06] hover:text-fg dark:hover:bg-white/[0.1]"
              >
                <Icon name="github" size={16} />
              </a>
            )}
          </div>
        )}

        {/* Chevron toggle. */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? t.projects.aria.collapse : t.projects.aria.expand}
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-fg-tertiary transition-colors hover:bg-black/[0.06] dark:hover:bg-white/[0.1] cursor-pointer"
        >
          <Icon
            name="chevronDown"
            size={14}
            className={cn(
              "transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="space-y-3 px-3.5 pb-3.5">
              <p className="text-[12px] leading-relaxed text-fg-secondary">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tc) => (
                  <span
                    key={tc}
                    className="rounded-md bg-black/[0.06] px-2 py-0.5 text-[11px] text-fg-secondary dark:bg-white/[0.08]"
                  >
                    {tc}
                  </span>
                ))}
              </div>

              {hasLinks && (
                <div className="flex flex-wrap gap-2">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-[12px] font-medium text-accent-on transition-colors hover:bg-accent-hover"
                    >
                      <Icon name="globe" size={13} />
                      {t.projects.visitApp}
                    </a>
                  )}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-black/[0.06] px-3 py-1.5 text-[12px] font-medium text-fg transition-colors hover:bg-black/[0.1] dark:bg-white/[0.08] dark:hover:bg-white/[0.14]"
                    >
                      <Icon name="googleplay" size={13} />
                      {t.projects.googlePlay}
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-black/[0.06] px-3 py-1.5 text-[12px] font-medium text-fg transition-colors hover:bg-black/[0.1] dark:bg-white/[0.08] dark:hover:bg-white/[0.14]"
                    >
                      <Icon name="apple" size={13} />
                      {t.projects.appStore}
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-black/[0.06] px-3 py-1.5 text-[12px] font-medium text-fg transition-colors hover:bg-black/[0.1] dark:bg-white/[0.08] dark:hover:bg-white/[0.14]"
                    >
                      <Icon name="github" size={13} />
                      {t.projects.viewCode}
                    </a>
                  )}
                </div>
              )}

              {project.integrations && project.integrations.length > 0 && (
                <ul className="space-y-1">
                  {project.integrations.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-1.5 text-[11px] text-fg-secondary"
                    >
                      <Icon
                        name="link"
                        size={12}
                        className="mt-0.5 shrink-0 text-fg-tertiary"
                      />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}

              {asset?.gallery && asset.gallery.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {asset.gallery.map((g, i) => (
                    <div
                      key={g}
                      className="relative aspect-video overflow-hidden rounded-md bg-black/5 ring-1 ring-separator dark:bg-white/5"
                    >
                      <Image
                        src={g}
                        alt={`${project.name}${t.projects.aria.screenshot}${i + 1}`}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Projects pane — filterable list of expandable project rows. */
export function Projects() {
  const { projects } = useContent();
  const t = useT();
  const [filter, setFilter] = useState<Bucket>("All");
  const list =
    filter === "All"
      ? projects
      : projects.filter((p) => bucketOf(p.role) === filter);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-1.5">
        {BUCKETS.map((b) => {
          const active = b === filter;
          const label =
            t.projects.filters[b.toLowerCase() as keyof typeof t.projects.filters];
          return (
            <button
              key={b}
              type="button"
              onClick={() => setFilter(b)}
              className={cn(
                "rounded-full px-3 py-1 text-[12px] font-medium transition-colors cursor-pointer",
                active
                  ? "bg-accent text-accent-on"
                  : "bg-card text-fg-secondary ring-1 ring-separator hover:text-fg",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {list.length === 0 ? (
        <p className="rounded-[12px] ss-surface py-10 text-center text-[13px] text-fg-tertiary">
          {t.projects.noProjects}
        </p>
      ) : (
        <div className="divide-y divide-separator overflow-hidden rounded-[12px] ss-surface">
          {list.map((p) => (
            <ProjectRow key={p.name} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
