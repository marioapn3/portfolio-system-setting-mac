import type { TabId } from "@/lib/data";

/** Every section receives the tab navigator so it can deep-link (e.g. Hero CTA). */
export interface SectionProps {
  onNavigate: (id: TabId) => void;
}
