<template>
  <div
    class="slider--teaser flex flex--center flex--vcenter"
    :class="{ 'is--active': project.active }"
    v-on:click="test"
  >
    <img :src="project.imgs.teaser" :alt="project.title" />
  </div>
</template>

<script>
export default {
  name: "Teaser",
  props: ["project"],
  methods: {
    test: function() {
      this.$root.$emit("expand", this.project);
    }
  }
};
</script>
