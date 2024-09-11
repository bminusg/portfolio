<template>
  <div
    class="container aboutme--container"
    :class="{ 'is--active': isVisible }"
  >
    <h2>Gewachsen mit den Aufgaben</h2>

    <div class="grid" data-grid="half">
      <div class="aboutme--txt">
        <h4>Über mich</h4>
        <p>
          Ich bin Benny Gebauer und entwickle leidenschaftlich Web-Anwendungen,
          interaktive HTML Werbemittel und Tools, die das Leben vereinfachen.
        </p>
        <p>
          Seit 2010 sammle ich Erfahrungen für verschiedene Arbeitgeber im
          Digitalen Marketingbereich als UI/UX/Web Designer und
          Frontend/Creative Developer. Nach 6 Jahren im visuellen Bereich war es
          Zeit für neue Aufgaben und seit dem lege ich meinen Fokus auf
          Codeentwicklungs-Aufgaben.
        </p>
      </div>

      <div class="aboutme--skills">
        <h4>Tech Stack</h4>
        <Tabs
          :options="tabOptions"
          :selected="selected"
          v-on:select="showSkill"
        ></Tabs>

        <ul
          class="aboutme--skills-list"
          :style="{ 'min-height': minSkillHeight }"
        >
          <Skill
            v-if="skill"
            v-for="item in skill.items"
            :key="item._id"
            :item="item"
          ></Skill>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, ComputedRef } from "vue";

// Components
import Tabs from "@/components/ui/TabsUI.vue";
import Skill from "@/components/SkillItem.vue";
import { UUID } from "crypto";

interface Skill {
  _id: UUID;
  name: string;
  slug: string;
  active: boolean;
  items: SkillItem[];
}

interface SkillItem {
  _id: UUID;
  name: string;
  slug: IconSlugs;
  value: number;
}

// CONFIG
const skills: Skill[] = [
  {
    _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
    name: "Frontend",
    slug: "frontend",
    active: false,
    items: [
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "VueJS",
        slug: "vue",
        value: 95,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "React",
        slug: "react",
        value: 55,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "Nuxt",
        slug: "nuxt",
        value: 75,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "NodeJs",
        slug: "node",
        value: 70,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "Java Script",
        slug: "js",
        value: 90,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "Type Script",
        slug: "ts",
        value: 65,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "SCSS/SASS",
        slug: "sass",
        value: 95,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "CSS 3",
        slug: "css",
        value: 95,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "HTML 5",
        slug: "html",
        value: 95,
      },
    ],
  },
  {
    _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
    name: "Design",
    slug: "design",
    active: false,
    items: [
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "Photoshop",
        slug: "ps",
        value: 95,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "Figma",
        slug: "figma",
        value: 85,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "Adobe XD",
        slug: "xd",
        value: 90,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "Illustrator",
        slug: "ai",
        value: 85,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "After Effects",
        slug: "ae",
        value: 65,
      },
    ],
  },
  {
    _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
    name: "Workflow",
    slug: "workflow",
    active: false,
    items: [
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "Git",
        slug: "git",
        value: 75,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "Jira",
        slug: "jira",
        value: 90,
      },
      {
        _id: "1496373a-a1af-4976-ae5b-dbfa4846e2dc",
        name: "Asana",
        slug: "asana",
        value: 80,
      },
    ],
  },
];

// REFS
const isVisible = ref(false);
const selected = ref(-1);

// COMPUTED
const tabOptions = computed(() => {
  const tabOptions = skills.map((skill) => skill.name);
  return tabOptions;
});

const skill: ComputedRef<Skill | undefined> = computed(() => {
  let skill = skills[selected.value];
  return skill;
});

const minSkillHeight = computed(() => {
  let number = 0;

  for (const skill of skills) {
    const skillItems: number = skill.items.length;
    number = skillItems > number ? skillItems : number;
  }

  return number * 60 + "px";
});

// METHODS
const showSkill = (skillIDX: number) => {
  if (skillIDX === selected.value) return;

  // RESET ALL SKILL TREES
  resetSkills();

  // BRING SELECTED INDEX TO REACTIVE DATA
  selected.value = skillIDX;
};

const resetSkills = () => {
  const bars = document.querySelectorAll(".aboutme--skills-bar__value");
  bars.forEach((bar) => bar.removeAttribute("style"));
};

onMounted(() => {
  isVisible.value = true;
  selected.value = 0;
});

onUnmounted(() => {
  isVisible.value = false;
  selected.value = -1;
});
</script>

<style lang="sass">
@use "@/sass/views/aboutme.sass"
</style>
