<template>
  <nav class="tab">
    <div
      class="tab--item"
      v-for="(option, index) in options"
      v-on:click="select(index)"
      :key="option._id"
      :class="{ 'tab--item-active': index === selected }"
    >
      <span>{{ option.name }}</span>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Tabs",
  props: ["options", "selected"],
  methods: {
    select(optionIndex: number) {
      this.$emit("select", optionIndex);
    },
  },
});
</script>

<style lang="less" scoped>
@import "../../less/components/tabs.less";
</style>
