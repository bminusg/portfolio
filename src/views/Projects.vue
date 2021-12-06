<template>
  <section id="projects" class="fullscreen flex flex--middle">
    <div class="grid" data-grid="none">
      <transition name="anim--txt">
        <h2 v-if="isVisible">Projects</h2>
      </transition>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from "vue";
  export default Vue.extend({
    name: "Projects",
    props: ["isVisible"],
  });
</script>
