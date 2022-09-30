<template>
  <a :href="href" :target="target" :class="'btn--' + theme" class="btn">
    <span>{{ text }}</span>
    <Icon v-if="icon" :brand="icon" class="btn--icon"></Icon>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "../Icon.vue";

export default Vue.extend({
  name: "Button",
  components: { Icon },
  props: ["href", "target", "text", "icon", "theme"],
});
</script>

<style lang="less">
@import "~@/less/utils/variables.less";

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 0 @cluster / 8;
  line-height: 1;
  height: @cluster / 2;
  border-radius: @cluster / 20;
  border: 1px solid transparent;
  box-shadow: 0 @cluster / 10 @cluster / 4 rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.6s cubic-bezier(0.25, 1, 0.5, 1);

  span {
    font-weight: 700;
    font-size: 12px;
  }

  &:hover {
    box-shadow: 0 0 @cluster / 8 rgba(0, 0, 0, 0.05);
  }

  &:nth-child(odd) {
    margin: 0 @cluster / 8;
  }

  &--primary {
    background-color: @color-primary;
    color: #fff;

    &-ghost {
      border: 1px solid @color-primary;

      &.light {
        border: 1px solid #fff;
        color: #fff;
      }
    }
  }

  &--secondary {
    background-color: #fff;
    bottom: 1px solid @color-grey;
  }

  &--icon {
    padding: @cluster / 8 0 @cluster / 8 @cluster / 8;
    margin-left: @cluster / 8;
    height: 100%;

    &-external-link {
      fill: none;
      stroke: @color-primary;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2px;
    }
  }
}
</style>
