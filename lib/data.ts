/**
 * Type definitions + non-translatable presentation assets.
 *
 * Translatable content lives in lib/i18n/{en,id}.ts (one bundle per locale,
 * consumed via <LocaleProvider>/useContent). Only proper-noun / structural data
 * (types + image assets) stays here.
 */

export type TabId = "home" | "experience" | "skills" | "projects";

export interface NavItem {
  id: TabId;
  label: string;
  /** Icon key resolved by <Icon />. */
  icon: string;
  /** Squircle tile color (macOS Settings style per-item accent). */
  color: string;
}

export interface Profile {
  name: string;
  role: string;
  status: string;
  tagline: string;
  cvUrl: string;
  location: string;
}

export interface Education {
  institution: string;
  degree?: string;
  detail?: string;
  period?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
  /** Optional responsibility/impact bullets shown in the role detail modal. */
  highlights?: string[];
  /** Optional tech stack chips shown in the role detail modal. */
  tech?: string[];
}

export interface Achievement {
  title: string;
  place: string;
  event: string;
  date: string;
  note?: string;
}

export interface Skill {
  name: string;
  /** Logo file under /public/images. */
  logo: string;
}

export interface SkillCategory {
  name: string;
  items: Skill[];
}

export interface Project {
  name: string;
  role: string;
  description: string;
  tech: string[];
  integrations?: string[];
  /** Live app URL (optional — internal/client projects may omit). */
  url?: string;
  /** Source code URL (optional). */
  repo?: string;
  /** Google Play Store URL (mobile apps). */
  playStore?: string;
  /** Apple App Store URL (mobile apps). */
  appStore?: string;
}

export interface Article {
  title: string;
  category: string;
  readTime: string;
  date: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  color: string;
}

export interface Contact {
  heading: string;
  body: string;
  ctaLabel: string;
  email: string;
  social: SocialLink[];
  footer: string;
}

/** Cover image + optional screenshot gallery per project (presentation assets,
 * kept separate from content data). Keyed by project name. */
export const projectAssets: Record<
  string,
  { cover: string; gallery?: string[] }
> = {
  MyFusionPay: {
    cover: "/images/portofolio/myfusionpay.png",
    gallery: [
      "/images/detail-projects/fusion/fusion-1.jpg",
      "/images/detail-projects/fusion/fusion-2.jpg",
      "/images/detail-projects/fusion/fusion-3.jpg",
      "/images/detail-projects/fusion/fusion-4.jpg",
      "/images/detail-projects/fusion/fusion-5.jpg",
      "/images/detail-projects/fusion/fusion-6.jpg",
    ],
  },
  "YouApp: Trips & Experiences": {
    cover: "/images/portofolio/youapp.png",
    gallery: [
      "/images/detail-projects/youapp/youapp-1.png",
      "/images/detail-projects/youapp/youapp-2.png",
      "/images/detail-projects/youapp/youapp-3.png",
      "/images/detail-projects/youapp/youapp-4.png",
    ],
  },
  "Maharbote Social": { cover: "/images/portofolio/maharbote.png" },
  "BeSTI Chatbot": { cover: "/images/portofolio/besti.webp" },
  "STI Apps Udinus": { cover: "/images/portofolio/sti.webp" },
  "Reservasi Udinus": { cover: "/images/portofolio/reservasi.webp" },
  Konteks: { cover: "/images/portofolio/konteks.svg" },
  Monago: { cover: "/images/portofolio/monago.webp" },
  "BSP Tracking": { cover: "/images/portofolio/bsp.svg" },
  Senikita: { cover: "/images/portofolio/senikita.my.id.svg" },
  StudyNest: { cover: "/images/portofolio/studynest.svg" },
  Jurnalin: { cover: "/images/portofolio/jurnalin1.svg" },
  "Sirekam Poltekes Yogyakarta": { cover: "/images/portofolio/sirekam.svg" },
  "Dinacom DNCC": { cover: "/images/portofolio/dinacom.svg" },
  Devlearn: { cover: "/images/portofolio/devlearn.svg" },
  "Getasan Apps": { cover: "/images/portofolio/getasan.svg" },
  "Kompas Clone": { cover: "/images/portofolio/ui_compas.svg" },
  Widya: { cover: "/images/portofolio/widya.webp" },
};
