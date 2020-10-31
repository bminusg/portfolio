<template>
  <div class="slider">
    <div class="slider--content-area flex">
      <Slider-Content
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      ></Slider-Content>
    </div>

    <div class="slider--control flex flex--vcenter">
      <div
        class="slider--control-btn flex flex--center flex--vcenter"
        data-dir="prev"
        :class="{ 'is--active': visible }"
        v-on:click="$emit('next')"
      >
        <svg class="slider--control-btn__svg">
          <use href="#icon--arrow"></use>
        </svg>
      </div>
      <div
        class="slider--control-btn flex flex--center flex--vcenter"
        data-dir="next"
        :class="{ 'is--active': visible }"
        v-on:click="$emit('next')"
      >
        <svg class="slider--control-btn__svg">
          <use href="#icon--arrow"></use>
        </svg>
      </div>
    </div>

    <div class="slider--teaser-area">
      <Slider-Teaser
        v-for="project in projects"
        :project="project"
        :key="project.slug"
      ></Slider-Teaser>
    </div>
  </div>
</template>

<script>
import Content from "./Content";
import Teaser from "./Teaser";

export default {
  name: "Slider",
  props: ["projects", "idx", "visible"],
  components: {
    "Slider-Content": Content,
    "Slider-Teaser": Teaser
  },
  data: function() {
    return {
      minHeight: 0
    };
  }
};
</script>
