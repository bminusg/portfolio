import { UUID } from "crypto";

declare global {
  interface SectionItem {
    id: UUID;
    slug: SlideSlug;
    isActive: boolean;
    component: ComponentPublicInstance;
    title?: string;
    slides?: SlideItem[];
  }

  interface SlideItem {
    id: UUID;
    title: string;
    description: string;
    link?: string;
    skills: SkillSlug[];
  }

  enum SlideSlug {
    home = "home",
    aboutme = "aboutme",
    projects = "projects",
    contact = "contact",
  }

  enum SkillSlug {
    vue = "vue",
    ts = "ts",
    vanilla = "vanilla",
    sass = "sass",
    react = "react",
    nuxt = "nuxt",
    node = "node",
    ae = "ae",
    ps = "ps",
    ai = "ai",
    figma = "figma",
  }
}
