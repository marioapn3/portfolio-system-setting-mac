import type { ComponentType } from "react";
import type { TabId } from "@/lib/data";
import type { SectionProps } from "./types";
import { Overview } from "./Overview";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

/** TabId → section component. Drives what each pane renders. */
export const sectionMap: Record<TabId, ComponentType<SectionProps>> = {
  home: Overview,
  experience: Experience,
  skills: Skills,
  projects: Projects,
};
