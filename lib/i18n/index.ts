import type {
  Profile,
  NavItem,
  Education,
  Experience,
  Achievement,
  SkillCategory,
  Project,
  Article,
  Contact,
} from "@/lib/data";
import * as enBundle from "./en";
import * as idBundle from "./id";
import { uiEn, uiId } from "./ui";

export type Locale = "en" | "id";
export const locales: Locale[] = ["en", "id"];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "id";
}

/** Full content bundle shape (shared by both locales). */
export interface Content {
  profile: Profile;
  navItems: NavItem[];
  education: Education[];
  experiences: Experience[];
  achievements: Achievement[];
  skills: SkillCategory[];
  projects: Project[];
  articles: Article[];
  contact: Contact;
}

export type Ui = typeof uiEn;

const contents: Record<Locale, Content> = {
  en: { ...enBundle },
  id: { ...idBundle },
};

const uis: Record<Locale, Ui> = { en: uiEn, id: uiId };

export function getContent(locale: Locale): Content {
  return contents[locale] ?? contents[defaultLocale];
}

export function getUi(locale: Locale): Ui {
  return uis[locale] ?? uis[defaultLocale];
}
