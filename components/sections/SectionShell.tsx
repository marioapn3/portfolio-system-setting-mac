"use client";

import { SettingsGroup, Row } from "@/components/ui/SettingsGroup";
import { Icon } from "@/components/Icon";
import { useT } from "@/components/LocaleProvider";

/** Native-styled placeholder pane used while a section is being built. */
export function ComingSoon({ label }: { label: string }) {
  const t = useT();
  return (
    <SettingsGroup header={label}>
      <Row
        leading={
          <span className="grid h-5 w-5 place-items-center text-fg-tertiary">
            <Icon name="sparkles" size={13} />
          </span>
        }
        title={`${label}${t.comingSoon.suffix}`}
        subtitle={t.comingSoon.subtitle}
      />
    </SettingsGroup>
  );
}
