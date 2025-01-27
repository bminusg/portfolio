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
          v-if="skill"
          class="aboutme--skills-list"
          :style="{ 'min-height': minSkillHeight }"
        >
          <Skill
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
    _id: "114648ed-5e2f-4c5a-8dcd-40d6efe5daa2",
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
        _id: "4f322368-b9d3-49f5-8978-7fbb4f11d8f4",
        name: "Nuxt",
        slug: "nuxt",
        value: 85,
      },
      {
        _id: "e32f439e-f368-463c-ac0a-d6a3638ed4b9",
        name: "React",
        slug: "react",
        value: 55,
      },
      {
        _id: "53a03ab8-6fb7-41eb-ba09-1e623a3cb3be",
        name: "NodeJs",
        slug: "node",
        value: 70,
      },
      {
        _id: "95b09706-4cbc-4139-9510-a4a2902cd0cf",
        name: "Java Script",
        slug: "js",
        value: 90,
      },
      {
        _id: "d9e36081-9d18-44d5-a228-12b4a2b1dc98",
        name: "Type Script",
        slug: "ts",
        value: 65,
      },
      {
        _id: "c348cd7e-cbe8-4dbe-a6c9-95a84d0ccc5d",
        name: "SCSS/SASS",
        slug: "sass",
        value: 95,
      },
      {
        _id: "17fbb58d-359c-4a12-87f8-1c2904bc138a",
        name: "CSS 3",
        slug: "css",
        value: 95,
      },
      {
        _id: "ab5b4966-e528-4998-9810-fc512ee26a0f",
        name: "HTML 5",
        slug: "html",
        value: 95,
      },
    ],
  },
  {
    _id: "b11e5cb8-20eb-474c-b7cf-b6787765c9df",
    name: "Design",
    slug: "design",
    active: false,
    items: [
      {
        _id: "c3b39b8e-2d9f-4d7e-99c4-b7459cd12a9e",
        name: "Photoshop",
        slug: "ps",
        value: 95,
      },
      {
        _id: "14a50ed4-e6fd-45d3-95ae-704659376038",
        name: "Figma",
        slug: "figma",
        value: 85,
      },
      {
        _id: "01bca3f4-e88e-4218-aca6-37823c8b1b61",
        name: "Adobe XD",
        slug: "xd",
        value: 90,
      },
      {
        _id: "abf5a0e6-25c8-49a5-9191-e366679cb506",
        name: "Illustrator",
        slug: "ai",
        value: 85,
      },
      {
        _id: "6ccda4a2-7edc-4b95-b3bf-3dabb88cf114",
        name: "After Effects",
        slug: "ae",
        value: 65,
      },
    ],
  },
  {
    _id: "66a9b94f-be3f-4f99-ac33-27a675fa5932",
    name: "Workflow",
    slug: "workflow",
    active: false,
    items: [
      {
        _id: "8ef0b845-638c-4011-82b4-edda03318505",
        name: "Git",
        slug: "git",
        value: 75,
      },
      {
        _id: "12712c68-1573-4c63-9ef7-7c571be63314",
        name: "Jira",
        slug: "jira",
        value: 90,
      },
      {
        _id: "a760e632-9c8b-4c74-8c5a-a18438055d36",
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
