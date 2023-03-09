<template>
  <section id="about" class="about flex flex--center">
    <div class="container about--container">
      <h2>{{ $t("about.title") }}</h2>

      <div class="grid" data-grid="half">
        <div class="about--txt">
          <h4>{{ $t("about.about") }}</h4>
          <p>{{ $t("about.me") }}</p>
        </div>

        <div class="about--skills">
          <h4>Tech Stack</h4>
          <Tabs
            :options="tabOptions"
            :selected="selected"
            v-on:select="showSkill"
          ></Tabs>

          <ul
            class="about--skills-list"
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
  </section>
</template>

<script lang="ts">
  import Vue from "vue";
  import Tabs from "@/components/ui/Tabs.vue";
  import Skill from "@/components/Skill.vue";

  export default Vue.extend({
    name: "About",
    props: ["isVisible"],
    components: { Tabs, Skill },
    computed: {
      tabOptions(): string[] {
        const tabOptions = this.skills.map(
          (skill: Record<string, unknown>) => skill.name
        );
        return tabOptions;
      },
      skill() {
        let skill = this.skills[this.selected];
        if (!skill) return {};
        return skill;
      },
      minSkillHeight(): string {
        let number = 0;

        for (const skill of this.skills) {
          const skillItems: number = skill.items.length;
          number = skillItems > number ? skillItems : number;
        }

        return number * 60 + "px";
      },
    },
    data() {
      return {
        selected: -1,
        skills: [
          {
            _id: Math.random().toString(16).slice(2),
            name: "Frontend",
            slug: "frontend",
            active: false,
            items: [
              {
                _id: Math.random().toString(16).slice(2),
                name: "VueJS",
                slug: "vue",
                value: 85,
              },
              {
                _id: Math.random().toString(16).slice(2),
                name: "React",
                slug: "react",
                value: 35,
              },
              {
                _id: Math.random().toString(16).slice(2),
                name: "Java Script",
                slug: "js",
                value: 85,
              },
              {
                _id: Math.random().toString(16).slice(2),
                name: "Type Script",
                slug: "ts",
                value: 55,
              },
              {
                _id: Math.random().toString(16).slice(2),
                name: "SCSS/SASS",
                slug: "sass",
                value: 90,
              },
              {
                _id: Math.random().toString(16).slice(2),
                name: "CSS 3",
                slug: "css",
                value: 95,
              },
              {
                _id: Math.random().toString(16).slice(2),
                name: "HTML 5",
                slug: "html",
                value: 95,
              },
            ],
          },
          {
            _id: Math.random().toString(16).slice(2),
            name: "Design",
            slug: "design",
            active: false,
            items: [
              {
                _id: Math.random().toString(16).slice(2),
                name: "Photoshop",
                slug: "ps",
                value: 95,
              },
              {
                _id: Math.random().toString(16).slice(2),
                name: "Adobe XD",
                slug: "xd",
                value: 90,
              },
              {
                _id: Math.random().toString(16).slice(2),
                name: "Illustrator",
                slug: "ai",
                value: 85,
              },
              {
                _id: Math.random().toString(16).slice(2),
                name: "After Effects",
                slug: "ae",
                value: 65,
              },
            ],
          },
          {
            _id: Math.random().toString(16).slice(2),
            name: "Workflow",
            slug: "workflow",
            active: false,
            items: [
              {
                _id: Math.random().toString(16).slice(2),
                name: "Git",
                slug: "git",
                value: 75,
              },
              {
                _id: Math.random().toString(16).slice(2),
                name: "Jira",
                slug: "jira",
                value: 90,
              },
              {
                _id: Math.random().toString(16).slice(2),
                name: "Asana",
                slug: "asana",
                value: 80,
              },
            ],
          },
        ],
      };
    },
    methods: {
      showSkill(skillIDX: number) {
        if (skillIDX === this.selected) return;

        // RESET ALL SKILL TREES
        this.resetSkills();

        // BRING SELECTED INDEX TO REACTIVE DATA
        this.selected = skillIDX;
      },
      resetSkills() {
        // REMOVE BAR WIDTH
        const bars = document.querySelectorAll(".about--skills-bar__value");
        bars.forEach((bar) => bar.removeAttribute("style"));
      },
    },
    watch: {
      isVisible(value: boolean) {
        if (value) return (this.selected = 0);
        this.selected = -1;
      },
    },
  });
</script>
