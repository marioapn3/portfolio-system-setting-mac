"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SettingsGroup, Row } from "@/components/ui/SettingsGroup";
import { IconBadge } from "@/components/ui/IconBadge";
import { Icon } from "@/components/Icon";
import { Modal } from "@/components/ui/Modal";
import { useContent, useT } from "@/components/LocaleProvider";
import type { Experience } from "@/lib/data";

const EASE = [0.4, 0, 0.2, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE, delay: 0.04 * i },
  }),
};

/** Experience pane — work history, education & achievements. */
export function Experience() {
  const { experiences, education, achievements } = useContent();
  const t = useT();
  const [active, setActive] = useState<Experience | null>(null);

  return (
    <motion.div initial="hidden" animate="show" className="space-y-5">
      <motion.div variants={fade} custom={0}>
        <SettingsGroup header={t.experience.workHistory}>
          {experiences.map((e, i) => (
            <Row
              key={`${e.company}-${e.role}-${i}`}
              leading={
                <IconBadge icon="briefcase" color={e.current ? "#34c759" : "#8e8e93"} />
              }
              title={e.role}
              subtitle={e.company}
              trailing={
                <span className="flex items-center justify-end gap-2">
                  <span>{e.period}</span>
                  <Icon name="info" size={14} className="shrink-0 text-fg-tertiary" />
                </span>
              }
              onClick={() => setActive(e)}
            />
          ))}
        </SettingsGroup>
      </motion.div>

      <motion.div variants={fade} custom={1}>
        <SettingsGroup header={t.experience.education}>
          <Row
            leading={<IconBadge icon="graduation" color="#007aff" />}
            title={education[0]?.institution ?? t.experience.education}
            subtitle={`${education[0]?.degree ?? ""} · ${education[0]?.period ?? ""}`}
            trailing={education[0]?.detail}
          />
        </SettingsGroup>
      </motion.div>

      <motion.div variants={fade} custom={2}>
        <SettingsGroup header={t.experience.achievements}>
          {achievements.map((a) => (
            <Row
              key={`${a.title}-${a.date}`}
              leading={<IconBadge icon="award" color="#ff9500" />}
              title={a.title}
              subtitle={a.event}
              trailing={a.place}
            />
          ))}
        </SettingsGroup>
      </motion.div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.company}
        ariaLabel={t.experience.roleDetails}
      >
        {active && (
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <IconBadge
                icon="briefcase"
                color={active.current ? "#34c759" : "#8e8e93"}
              />
              <div className="min-w-0">
                <p className="text-[15px] font-semibold leading-tight text-fg">
                  {active.role}
                </p>
                <p className="mt-0.5 text-[12px] text-fg-secondary">
                  {active.period}
                </p>
              </div>
            </div>

            <p className="text-[13px] leading-relaxed text-fg-secondary">
              {active.description}
            </p>

            {active.highlights && active.highlights.length > 0 && (
              <ul className="space-y-1.5 pt-0.5">
                {active.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-1.5 text-[12px] leading-relaxed text-fg-secondary"
                  >
                    <Icon
                      name="check"
                      size={13}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {active.tech && active.tech.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {active.tech.map((tc) => (
                  <span
                    key={tc}
                    className="rounded-md bg-black/[0.06] px-2 py-0.5 text-[11px] text-fg-secondary dark:bg-white/[0.08]"
                  >
                    {tc}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>
    </motion.div>
  );
}
