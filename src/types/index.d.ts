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
    js = "js",
    vanilla = "vanilla",
    sass = "sass",
    react = "react",
    nuxt = "nuxt",
    node = "node",
    ae = "ae",
    ps = "ps",
    ai = "ai",
    xd = "xd",
    figma = "figma",
    asana = "asana",
    jira = "jira",
    git = "git",
    css = "css",
    html = "html",
    webpack = "webpack",
    wordpress = "wordpress",
  }

  enum BrandSlug {
    xing = "xing",
    linkedin = "linkedin",
    soundcloud = "soundcloud",
    github = "github",
  }

  enum IconSlug {
    arrowLeft = "arrowLeft",
    externalLink = "externalLink",
    mail = "mail",
  }

  type IconSlugs =
    | SkillSlug
    | BrandSlug
    | IconSlug
    | keyof typeof BrandSlug
    | keyof typeof IconSlug
    | keyof typeof SkillSlug;
}
