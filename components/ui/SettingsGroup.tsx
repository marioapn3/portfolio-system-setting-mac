import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

/**
 * Inset grouped list — the core Settings content unit. Rounded white container
 * with hairline separators between rows (rendered via `.ss-rows > .ss-row`).
 */
export function SettingsGroup({
  header,
  footer,
  children,
  className,
}: {
  header?: string;
  footer?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("space-y-1.5", className)}>
      {header && (
        <p className="px-3.5 text-[12px] font-medium text-fg-secondary">{header}</p>
      )}
      <div className="ss-rows overflow-hidden rounded-[12px] ss-surface">{children}</div>
      {footer && <p className="px-3.5 text-[11px] text-fg-secondary">{footer}</p>}
    </section>
  );
}

/** A single row inside a SettingsGroup. */
export function Row({
  leading,
  title,
  subtitle,
  trailing,
  chevron,
  onClick,
  className,
}: {
  leading?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  trailing?: ReactNode;
  chevron?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const interactive = Boolean(onClick);
  const Comp = interactive ? "button" : "div";
  return (
    <Comp
      type={interactive ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "ss-row group relative flex w-full items-center gap-3 px-3.5 py-2 text-left",
        interactive && "transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",
        className,
      )}
    >
      {leading}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] leading-tight text-fg">{title}</p>
        {subtitle && (
          <p className="mt-0.5 truncate text-[11px] leading-tight text-fg-secondary">
            {subtitle}
          </p>
        )}
      </div>
      {trailing && (
        <div className="max-w-[52%] shrink min-w-0 truncate text-right text-[13px] text-fg-secondary">
          {trailing}
        </div>
      )}
      {chevron && (
        <Icon name="chevronRight" size={14} className="shrink-0 text-fg-tertiary" />
      )}
    </Comp>
  );
}
