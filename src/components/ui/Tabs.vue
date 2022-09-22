<template>
  <nav class="tab flex">
    <div
      class="tab--item flex flex--center"
      v-for="(option, index) in options"
      v-on:click="select(index)"
      :key="'tab--option-' + index"
      :class="{ 'tab--item-active': index === selected }"
    >
      <span>{{ option }}</span>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Tabs",
  props: {
    options: { type: Array, required: true },
    selected: { type: Number, required: true },
  },
  methods: {
    select(optionIndex: number) {
      this.$emit("select", optionIndex);
    },
  },
});
</script>

<style lang="less" scoped>
@import "~@/less/utils/variables.less";

.tab {
  margin-bottom: @cluster / 4;

  &--item {
    padding: @cluster / 8;
    height: @cluster / 2;
    align-items: center;

    &::after {
      content: "";
      background-color: @color-grey;
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      bottom: 0;
    }

    &:hover {
      cursor: pointer;
    }

    &-active {
      color: @color-primary;

      &::after {
        background-color: @color-primary;
      }
    }

    span {
      text-transform: uppercase;
    }
  }
}
</style>
