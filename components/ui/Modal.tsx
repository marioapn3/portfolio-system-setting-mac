"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
  useDragControls,
  useReducedMotion,
} from "framer-motion";
import { Icon } from "@/components/Icon";
import { useT } from "@/components/LocaleProvider";

const EASE = [0.4, 0, 0.2, 1] as const;

/**
 * macOS-style modal: a draggable mini-window portaled to document.body. The
 * portal escapes the section's framer-motion transform / overflow-hidden
 * ancestors (which would otherwise contain a `fixed` overlay). The title bar is
 * the drag handle, with traffic-light controls on the left — red closes. Drag is
 * constrained to the viewport so the window can't be lost off-screen.
 */
export function Modal({
  open,
  onClose,
  children,
  title,
  ariaLabel,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode;
  ariaLabel?: string;
}) {
  const t = useT();
  const reduce = useReducedMotion();
  const dragControls = useDragControls();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Escape to close + lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  // createPortal needs document.body, undefined during SSR. Detect the client
  // via useSyncExternalStore (server snapshot = false) so we skip the portal on
  // the server render without a setState-in-effect.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          ref={overlayRef}
          className="fixed inset-0 z-[60] grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: EASE }}
        >
          {/* Scrim — click outside the window to close. */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel ?? t.modal.details}
            drag
            dragControls={dragControls}
            dragListener={false}
            dragMomentum={false}
            dragConstraints={overlayRef}
            dragElastic={0}
            whileDrag={{ scale: 1.005 }}
            className="relative flex w-full max-w-[460px] flex-col overflow-hidden rounded-[14px] bg-win shadow-[0_30px_90px_-20px_rgba(0,0,0,0.5)] ring-1 ring-window-border"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            {/* Title bar — drag handle. Traffic lights on the left; red closes. */}
            <div
              onPointerDown={(e) => dragControls.start(e)}
              className="relative flex h-10 shrink-0 cursor-grab touch-none select-none items-center border-b border-separator bg-titlebar/60 backdrop-blur-xl active:cursor-grabbing"
            >
              <div
                className="group/controls flex items-center gap-2 pl-3.5"
                onPointerDown={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t.modal.close}
                  className="grid h-3 w-3 place-items-center rounded-full"
                  style={{ backgroundColor: "var(--tl-red)" }}
                >
                  <Icon
                    name="close"
                    size={8}
                    strokeWidth={2.5}
                    className="text-black/55 opacity-0 transition-opacity duration-100 group-hover/controls:opacity-100"
                  />
                </button>
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: "var(--tl-yellow)" }}
                />
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: "var(--tl-green)" }}
                />
              </div>
              {title && (
                <h2 className="pointer-events-none absolute inset-x-0 text-center text-[13px] font-semibold text-fg-secondary">
                  {title}
                </h2>
              )}
            </div>

            <div className="p-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
