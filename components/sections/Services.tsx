"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";
import { IconBadge } from "@/components/ui/IconBadge";
import { cn } from "@/lib/cn";
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

function openHref(href?: string) {
  if (href && href !== "#") window.open(href, "_blank", "noopener,noreferrer");
}

const sectionHeader = "px-3.5 text-[12px] font-medium text-fg-secondary";

/** Services pane — hero window, offering grid, pricing, workflow & CTA. */
export function Services() {
  const { services, contact } = useContent();
  const pricingRef = useRef<HTMLDivElement>(null);

  const whatsapp = contact.social.find((s) => s.icon === "whatsapp")?.href;
  const contactHref = () => openHref(whatsapp);

  const contactTiles = [
    {
      icon: "mail" as const,
      color: "#007aff",
      label: services.cta.emailLabel,
      href:
        contact.email && contact.email !== "#"
          ? `mailto:${contact.email}`
          : undefined,
    },
    ...["whatsapp", "linkedin", "github"].flatMap((icon) => {
      const s = contact.social.find((x) => x.icon === icon);
      return s ? [{ icon, color: s.color, label: s.label, href: s.href }] : [];
    }),
  ].filter((t) => t.href);

  return (
    <motion.div initial="hidden" animate="show" className="space-y-5">
      {/* Hero — floating app window card */}
      <motion.div variants={fade} custom={0} className="ss-surface rounded-[12px] p-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--tl-red)" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--tl-yellow)" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--tl-green)" }} />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="ss-squircle grid h-11 w-11 shrink-0 place-items-center bg-accent text-white">
            <Icon name="rocket" size={20} strokeWidth={1.75} />
          </span>
          <h2 className="text-[18px] font-semibold leading-tight tracking-tight text-fg">
            {services.hero.headline}
          </h2>
        </div>
        <p className="mt-3 max-w-[56ch] text-[13px] leading-relaxed text-fg-secondary">
          {services.hero.subtitle}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={contactHref}
            className="inline-flex items-center gap-1.5 rounded-[8px] bg-accent px-4 py-2 text-[13px] font-medium text-accent-on transition hover:bg-accent-hover active:scale-[0.98] cursor-pointer"
          >
            {services.hero.ctaPrimary}
          </button>
          <button
            type="button"
            onClick={() =>
              pricingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="inline-flex items-center gap-1.5 rounded-[8px] bg-black/[0.06] px-4 py-2 text-[13px] font-medium text-fg transition hover:bg-black/[0.09] active:scale-[0.98] cursor-pointer dark:bg-white/[0.08] dark:hover:bg-white/[0.12]"
          >
            {services.hero.ctaSecondary}
          </button>
        </div>
      </motion.div>

      {/* Service cards */}
      <motion.div variants={fade} custom={1}>
        <p className={sectionHeader}>{services.servicesHeading}</p>
        <div className="mt-1.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {services.services.map((s) => (
            <div
              key={s.name}
              className="ss-surface rounded-[12px] p-4 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <IconBadge icon={s.icon} color={s.color} tile={32} glyph={17} />
              <p className="mt-2.5 text-[13px] font-semibold text-fg">{s.name}</p>
              <p className="mt-0.5 text-[11px] text-fg-secondary">{s.tagline}</p>
              <ul className="mt-2.5 space-y-1">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-1.5 text-[12px] leading-snug text-fg-secondary"
                  >
                    <Icon name="check" size={13} strokeWidth={2} className="mt-0.5 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pricing */}
      <motion.div variants={fade} custom={2} ref={pricingRef} className="scroll-mt-2">
        <p className={sectionHeader}>{services.pricingHeading}</p>
        <div className="mt-1.5 space-y-3">
          {services.plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "ss-surface relative rounded-[12px] p-4",
                plan.popular && "ring-1 ring-accent",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-2.5 right-4 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-on">
                  {services.popularLabel}
                </span>
              )}
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-[14px] font-semibold text-fg">{plan.name}</p>
                <p className="text-[15px] font-semibold tracking-tight text-accent">
                  {plan.price}
                </p>
              </div>
              <p className="text-[11px] text-fg-secondary">{plan.note}</p>
              <ul className="mt-3 space-y-1.5 border-t border-separator pt-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-[12px] leading-snug text-fg-secondary"
                  >
                    <Icon name="check" size={13} strokeWidth={2} className="mt-0.5 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={contactHref}
                className="mt-4 w-full rounded-[8px] bg-accent px-4 py-2 text-[13px] font-medium text-accent-on transition hover:bg-accent-hover active:scale-[0.98] cursor-pointer"
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Workflow timeline */}
      <motion.div variants={fade} custom={3}>
        <p className={sectionHeader}>{services.workflowHeading}</p>
        <div className="ss-surface relative mt-1.5 rounded-[12px] p-4">
          <div className="absolute inset-x-8 top-[31px] hidden h-px bg-separator sm:block" />
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-5 sm:gap-1">
            {services.workflow.map((step) => (
              <li key={step.name} className="group flex items-center gap-3 sm:flex-col sm:text-center">
                <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-win text-fg ring-1 ring-separator transition-transform duration-200 group-hover:-translate-y-0.5">
                  <Icon name={step.icon} size={15} strokeWidth={1.75} />
                </span>
                <div className="min-w-0 sm:mt-1.5">
                  <p className="text-[12px] font-medium leading-tight text-fg">{step.name}</p>
                  <p className="mt-0.5 hidden text-[10px] leading-tight text-fg-secondary sm:block">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div variants={fade} custom={4}>
        <div className="ss-surface rounded-[12px] p-5 text-center">
          <h3 className="text-[18px] font-semibold tracking-tight text-fg">
            {services.cta.title}
          </h3>
          <p className="mx-auto mt-1.5 max-w-[46ch] text-[13px] leading-relaxed text-fg-secondary">
            {services.cta.description}
          </p>
          <button
            type="button"
            onClick={contactHref}
            className="mt-4 inline-flex items-center gap-1.5 rounded-[8px] bg-accent px-5 py-2 text-[13px] font-medium text-accent-on transition hover:bg-accent-hover active:scale-[0.98] cursor-pointer"
          >
            {services.cta.button}
          </button>
          <div className="mt-4 flex items-center justify-center gap-2">
            {contactTiles.map((tile) => (
              <button
                key={tile.icon}
                type="button"
                onClick={() => openHref(tile.href)}
                aria-label={tile.label}
                className="transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <IconBadge icon={tile.icon} color={tile.color} tile={30} glyph={16} />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
