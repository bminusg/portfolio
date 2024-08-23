<template>
  <HeaderApp />
  <main>
    <section
      v-for="section in sections"
      :key="section.id"
      :id="section.slug"
      class="section"
    >
      <component v-if="section.isActive" :is="section.component" />
    </section>
  </main>
  <FooterApp />
</template>

<script setup lang="ts">
import {
  computed,
  ComputedRef,
  defineAsyncComponent,
  onMounted,
  ref,
} from "vue";

// COMPONENTS
import HeaderApp from "@components/layout/HeaderApp.vue";
import FooterApp from "@components/layout/FooterApp.vue";

// UTILS
import { defineObserver } from "./utils/observer";

// REFS
const activeSectionSlugs = ref<SlideSlug[]>([]);

// COMPUTED
const sections: ComputedRef<SectionItem[]> = computed(() => [
  {
    id: "25fae4dc-01e5-43b9-91ce-2696d368c68d",
    slug: "home" as SlideSlug,
    isActive: activeSectionSlugs.value.includes("home" as SlideSlug),
    component: defineAsyncComponent(
      () => import("@components/sections/HomeSection.vue")
    ),
  },
  {
    id: "8527bbfa-1477-4bf9-9b5d-9c4c563a3ef0",
    slug: "aboutme" as SlideSlug,
    isActive: activeSectionSlugs.value.includes("aboutme" as SlideSlug),
    component: defineAsyncComponent(
      () => import("@components/sections/AboutSection.vue")
    ),
  },
  {
    id: "744714bd-60a1-46c0-a0d3-af6fd29497b5",
    slug: "projects" as SlideSlug,
    isActive: activeSectionSlugs.value.includes("projects" as SlideSlug),
    component: defineAsyncComponent(
      () => import("@components/sections/ProjectsSection.vue")
    ),
  },
  {
    id: "7f7d136b-34bc-4cb8-9d4b-719be81abcf6",
    slug: "contact" as SlideSlug,
    isActive: activeSectionSlugs.value.includes("contact" as SlideSlug),
    component: defineAsyncComponent(
      () => import("@components/sections/ContactSection.vue")
    ),
  },
]);

onMounted(() => {
  const targets = document.querySelectorAll("section");
  const setActiveSectionSlug: IntersectionObserverCallback = (entries) => {
    const activeEntries = entries.filter((entry) => entry.isIntersecting);
    const activeSlugs = activeEntries.map(
      (entry) => entry.target.id
    ) as SlideSlug[];

    activeSectionSlugs.value = activeSlugs;
  };

  const observer = defineObserver(setActiveSectionSlug, { threshold: 0.75 });
  targets.forEach((target) => observer.observe(target));
});
</script>
