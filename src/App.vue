<template>
  <div id="app">
    <Home :isVisible="isVisible.home"></Home>
    <About :isVisible="isVisible.about"></About>
    <Projects :isVisible="isVisible.projects"></Projects>
    <Contact :isVisible="isVisible.contact"></Contact>
    <section id="imprint" class="imprint flex flex--center">
      <div class="container flex flex--center">
        <p class="small" style="margin: 20px 0">&copy; 2022 Benjamin Gebauer</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "@/views/Home.vue";
import About from "@/views/About/index.vue";
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
        home: null,
        about: null,
        projects: null,
        contact: null,
      },
    };
  },
  methods: {
    intersectionCallback(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        console.log(entry.target.id, "is intersecting ", entry.isIntersecting);

        this.isVisible[entry.target.id] = entry.isIntersecting;
      });
    },
    setViewportHeight() {
      const root = document.querySelector(":root") as HTMLElement;
      root.style.setProperty(
        "--viewport-height",
        window.innerHeight.toString() + "px"
      );
    },
  },
  mounted() {
    // CALC VIEWPORT HEIGHT
    this.setViewportHeight();
    window.addEventListener("resize", () => this.setViewportHeight());

    // Intersection Observe API for Scroll Events
    const observer = new IntersectionObserver(this.intersectionCallback, {
      root: null,
      threshold: 0.5,
    });

    document.querySelectorAll("section").forEach((el) => observer.observe(el));

    // SCROLL POSITION
    const root = document.querySelector(":root") as HTMLElement;
    let lastKnownScrollPosition = 0;
    let ticking = false;

    function doSomething(scrollPos: number) {
      root.style.setProperty("--scroll-x", scrollPos + "px");
      ticking = false;
    }

    document.addEventListener("scroll", function () {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() =>
          doSomething(lastKnownScrollPosition)
        );

        ticking = true;
      }
    });
  },
});
</script>
