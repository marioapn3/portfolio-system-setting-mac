"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SettingsGroup, Row } from "@/components/ui/SettingsGroup";
import { useContent } from "@/components/LocaleProvider";

const EASE = [0.4, 0, 0.2, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE, delay: 0.04 * i },
  }),
};

/** Small white squircle holding a brand logo — matches the app's icon-tile
 * language at row-leading size (no big white grid). */
function LogoBadge({ src, name }: { src: string; name: string }) {
  return (
    <span className="ss-squircle relative grid h-6 w-6 shrink-0 place-items-center overflow-hidden bg-white">
      <Image src={src} alt={name} fill sizes="24px" className="object-contain p-[2px]" />
    </span>
  );
}

/** Skills pane — grouped settings rows, one skill per row with its logo. */
export function Skills() {
  const { skills } = useContent();
  return (
    <motion.div initial="hidden" animate="show" className="space-y-5">
      {skills.map((cat, ci) => (
        <motion.div key={cat.name} variants={fade} custom={ci}>
          <SettingsGroup header={cat.name}>
            {cat.items.map((it) => (
              <Row
                key={it.name}
                leading={<LogoBadge src={`/images/${it.logo}`} name={it.name} />}
                title={it.name}
              />
            ))}
          </SettingsGroup>
        </motion.div>
      ))}
    </motion.div>
  );
}
