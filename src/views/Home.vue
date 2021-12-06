<template>
  <section id="home" class="home fullscreen flex flex--middle">
    <div class="grid" data-grid="none">
      <div class="home--title">
        <transition name="fade">
          <h1 v-show="isVisible">Hey, I'am Benny Gebauer</h1>
        </transition>
        <p class="home--title-subline">Frontend &times; Design</p>
      </div>

      <div class="home--workstation">
        <img src="@/assets/workstation.png" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Home",
  props: ["isVisible"],
});
</script>

<style lang="less" scoped>
@import "../less/pages/home.less";
</style>
