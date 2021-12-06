<template>
  <section id="about" class="about fullscreen">
    <div class="grid" data-grid="none">
      <transition name="fade">
        <h2>Growing with my tasks</h2>
      </transition>
    </div>

    <div class="grid" data-grid="half">
      <div class="about--txt">
        <h4>About</h4>
        <p>
          Cheers mate. My name is Benjamin Gebauer and I am passionate about
          creating web applications. I gained expierences as a UI/UX/Web
          Designer and Frontend Developer. Since 2010 I am creating Web Designs
          for different employers. Advertising was the most field of
          application. Adapting existing key visuals into an advertising
          campaign frame and creating pitch visuals was my daily business. After
          6 years of improving visual skills, it was time for new quests and
          since then I am starting my code challenges. Companies I‘ve worked
          with
        </p>
      </div>

      <div class="about--skills">
        <h4>Tech Stack</h4>
        <Tabs
          :options="skills"
          :selected="selected"
          v-on:select="showSkill"
        ></Tabs>

        <ul class="about--skills">
          <li
            class="about--skills-item"
            v-for="(skill, index) in skills"
            :key="skill._id"
            :class="{ 'is--active': index === selected }"
          >
            <div
              class="about--skills-tree"
              v-for="item in skill.items"
              :key="item._id"
            >
              <div class="about--skills-name">{{ item.name }}</div>
              <div class="about--skills-bar">
                <div
                  class="about--skills-bar__value"
                  :data-value="item.value"
                ></div>
              </div>
              <div class="about--skills-value">
                <span class="countUp">{{ item.value }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from "vue";
  import Tabs from "@/components/ui/Tabs.vue";
  import countUp from "@/utils/countUp";

  export default Vue.extend({
    name: "About",
    props: ["isVisible"],
    components: { Tabs },
    data() {
      return {
        selected: -1,
        skills: [
          {
            name: "Frontend",
            slug: "frontend",
            items: [
              {
                name: "HTML 5",
                slug: "html5",
                value: 95,
              },
              {
                name: "CSS 3",
                slug: "css3",
                value: 95,
              },
              {
                name: "Java Script",
                slug: "js",
                value: 80,
              },
              {
                name: "VueJS",
                slug: "vue",
                value: 70,
              },
              {
                name: "nodeJS",
                slug: "node",
                value: 60,
              },
              {
                name: "LESS",
                slug: "less",
                value: 90,
              },
              {
                name: "Type Script",
                slug: "typescript",
                value: 55,
              },
            ],
          },
          {
            name: "Design",
            slug: "design",
            items: [
              {
                name: "Photoshop",
                slug: "ps",
                value: 95,
              },
              {
                name: "Adobe XD",
                slug: "xd",
                value: 90,
              },
              {
                name: "Illustrator",
                slug: "ai",
                value: 85,
              },
              {
                name: "After Effects",
                slug: "ae",
                value: 65,
              },
            ],
          },
          {
            name: "Workflow",
            slug: "workflow",
            items: [
              {
                name: "Git",
                slug: "git",
                value: 75,
              },
              {
                name: "Jira",
                slug: "jira",
                value: 90,
              },
              {
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
        if (value) this.selected = 0;
        else this.selected = -1;
      },
      selected(skillIDX: number) {
        // TRIGGER ANIMATIONS
        const activeSkillItem = document.querySelectorAll(
          ".about--skills-item"
        )[skillIDX];

        if (!activeSkillItem) return;

        // ANIMATE BARS
        const bars = activeSkillItem.querySelectorAll(
          ".about--skills-bar__value"
        );

        bars.forEach((bar) => {
          if (bar instanceof HTMLElement) {
            const value = bar.dataset.value;
            if (value) bar.style.width = value + "%";
          }
        });

        // COUNT UP SKILL VALUES
        const values = activeSkillItem.querySelectorAll(".countUp");
        countUp(values);
      },
    },
  });
</script>

<style lang="less" scoped>
  @import "../less/pages/about.less";
</style>
