<template>
  <div id="app">
    <Home :isVisible="isVisible.home"></Home>
    <About :isVisible="isVisible.about"></About>
    <Projects :isVisible="isVisible.projects"></Projects>
    <Contact :isVisible="isVisible.contact"></Contact>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";

export default Vue.extend({
  name: "Portfolio",
  components: {
    Home,
    About,
    Projects,
    Contact,
  },
  data() {
    return {
      isVisible: {
        home: false,
        about: false,
        projects: false,
        contact: false,
      },
    };
  },
  methods: {
    intersectionCallback(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        console.log(
          entry.target.id + " is intersecting " + entry.isIntersecting
        );

        this.isVisible[entry.target.id] = entry.isIntersecting;
      });
    },
  },
  mounted() {
    // Intersection Observe API for Scroll Events
    const observer = new IntersectionObserver(this.intersectionCallback, {
      root: null,
      threshold: 0.5,
    });

    document.querySelectorAll("section").forEach((el) => observer.observe(el));
  },
});
</script>
