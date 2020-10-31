<template>
  <section id="projects" class="projects view fullscreen flex flex--vcenter">
    <div class="container">
      <transition
        enter-class="title-in"
        enter-active-class="title-in-active"
        leave-to-class="title-out"
        leave-active-class="title-out-active"
      >
        <h2 v-if="visible">Projects</h2>
      </transition>
      <Slider
        :projects="projects"
        :visible="visible"
        :idx="IDX"
        v-on:next="next()"
        v-on:expand="this.$emit('expand')"
      ></Slider>
    </div>
  </section>
</template>

<script>
import Slider from "@/components/slider/Slider";

export default {
  name: "Projects",
  props: ["visible"],
  components: { Slider },
  data: function() {
    return {
      IDX: 0,
      projects: [
        {
          title: "plista Website",
          slug: "plista-website",
          description: "Wireframe and Web Design drafts for a website relaunch",
          active: false,
          tags: ["xd", "ps"],
          imgs: {
            teaser: "/imgs/projects/plista-website--teaser@2x.png",
            details: [
              "/imgs/projects/plista-website--slide-01.jpg",
              "/imgs/projects/plista-website--slide-02.jpg",
              "/imgs/projects/plista-website--slide-03.jpg",
              "/imgs/projects/plista-website--slide-04.jpg"
            ]
          }
        },
        {
          title: "Aufbaufuchs Website",
          slug: "aufbaufuchs",
          description: "Creating a Single Page Application",
          active: false,
          link: "http://www.aufbaufuchs.de",
          tags: ["html", "css", "js", "ps"],
          imgs: {
            teaser: "/imgs/projects/aufbaufuchs--teaser@2x.png",
            details: ["/imgs/projects/aufbaufuchs--slide-01.jpg"]
          }
        },
        {
          title: "plista Showroom",
          slug: "plista-showroom",
          description: "Developing a custom WordPress Theme",
          active: false,
          link: "http://showroom.plista.com",
          tags: ["wp", "html", "css", "js"],
          imgs: {
            teaser: "/imgs/projects/plista-showroom--teaser@2x.png",
            details: ["/imgs/projects/plista-showroom--slide-01.jpg"]
          }
        }
      ],
      minHeight: 0
    };
  },
  computed: {
    maxProjects: function() {
      return this.projects.length;
    }
  },
  methods: {
    reset: function() {
      for (const project of this.projects) {
        project.active = false;
      }
    },
    next: function() {
      if (this.IDX + 1 >= this.maxProjects) {
        this.IDX = 0;
      } else {
        this.IDX++;
      }
    }
  },
  watch: {
    IDX: function(value) {
      this.reset();

      // ACTIVATE PROJECT SLIDE
      if (value === -1) return;
      this.projects[value].active = true;
    },
    visible: function(value) {
      // ACTIVATE SLIDE
      this.projects[this.IDX].active = value;

      // CALC CONTAINER HEIGHT FOR VERTICAL ALIGNMENT
      const teaserHeight =
        document.querySelector(".slider--teaser") !== null
          ? document.querySelector(".slider--teaser").scrollHeight
          : false;
      const contentHeight =
        document.querySelector(".slider--content") !== null
          ? document.querySelector(".slider--content").scrollHeight
          : false;
      if (teaserHeight && contentHeight) {
        this.minHeight =
          teaserHeight > contentHeight ? teaserHeight : contentHeight;
      }
    }
  }
};
</script>
