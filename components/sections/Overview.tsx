"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SettingsGroup, Row } from "@/components/ui/SettingsGroup";
import { IconBadge } from "@/components/ui/IconBadge";
import { Toggle } from "@/components/ui/Toggle";
import { LanguageSegmented } from "@/components/LanguageSegmented";
import { useContent, useT } from "@/components/LocaleProvider";

const EASE = [0.4, 0, 0.2, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE, delay: 0.04 * i },
  }),
};

function openHref(href: string) {
  if (href && href !== "#") window.open(href, "_blank", "noopener,noreferrer");
}

/** Overview pane — Apple Account style: identity, contact & resume. */
export function Overview() {
  const { profile, education, contact } = useContent();
  const t = useT();
  const [available, setAvailable] = useState(true);

  return (
    <motion.div initial="hidden" animate="show" className="space-y-5">
      {/* Profile header card */}
      <motion.div
        variants={fade}
        custom={0}
        className="flex items-center gap-4 rounded-[12px] ss-surface p-4"
      >
        <Image
          src="/images/mario.png"
          alt={profile.name}
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-full object-cover shadow-inner"
        />
        <div className="min-w-0">
          <h2 className="text-[17px] font-semibold tracking-tight text-fg">
            {profile.name}
          </h2>
          <p className="text-[13px] text-fg-secondary">{profile.tagline}</p>
          {/* <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-fg-secondary">
            {profile.tagline}
          </p> */}
        </div>
      </motion.div>

      <motion.div variants={fade} custom={1}>
        <SettingsGroup header={t.overview.profile}>
          <Row
            leading={<IconBadge icon="briefcase" color="#5e5ce6" />}
            title={t.overview.role}
            trailing={profile.role}
          />
          <Row
            leading={<IconBadge icon="mapPin" color="#ff3b30" />}
            title={t.overview.location}
            trailing={profile.location}
          />
          <Row
            leading={<IconBadge icon="graduation" color="#34c759" />}
            title={t.overview.education}
            subtitle={education[0]?.institution}
            trailing={education[0]?.degree}
          />
          <Row
            leading={<IconBadge icon="check" color="#34c759" />}
            title={t.overview.available}
            trailing={
              <Toggle
                checked={available}
                onChange={setAvailable}
                label={t.overview.available}
                disabled={true}
              />
            }
          />
        </SettingsGroup>
      </motion.div>

      <motion.div variants={fade} custom={2}>
        <SettingsGroup header={t.overview.getInTouch} footer={contact.body}>
          <Row
            leading={<IconBadge icon="mail" color="#007aff" />}
            title={contact.ctaLabel}
            subtitle={t.overview.openToCollab}
            chevron
            onClick={() => {
              const wa = contact.social.find((s) => s.icon === "whatsapp");
              if (wa) openHref(wa.href);
            }}
          />
          {contact.social.map((s) => (
            <Row
              key={s.label}
              leading={<IconBadge icon={s.icon} color={s.color} />}
              title={s.label}
              chevron
              onClick={() => openHref(s.href)}
            />
          ))}
        </SettingsGroup>
      </motion.div>

      <motion.div variants={fade} custom={3}>
        <SettingsGroup>
          <Row
            leading={<IconBadge icon="download" color="#5856d6" />}
            title={t.overview.downloadCv}
            trailing={t.overview.pdf}
            chevron
            onClick={() => openHref(profile.cvUrl)}
          />
        </SettingsGroup>
      </motion.div>

      {/* Language switch for mobile (desktop uses the sidebar control). */}
      <motion.div variants={fade} custom={4} className="md:hidden">
        <div className="rounded-[12px] ss-surface">
          <LanguageSegmented />
        </div>
      </motion.div>
    </motion.div>
  );
}
