<template>
  <li class="about--skills-item">
    <div class="about--skills-logo">
      <Logo :brand="item.slug"></Logo>
    </div>
    <div class="about--skills-bar">
      <div
        class="about--skills-bar__value"
        :style="{ width: value + '%' }"
      ></div>
    </div>
    <div class="about--skills-value">
      <span class="about--skills-value__countUp">{{ value }}</span>
      <span>%</span>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from "@/components/Logo.vue";

export default Vue.extend({
  name: "Skill",
  props: ["item"],
  components: { Logo },
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    countUp() {
      const animationDuration = 600;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(animationDuration / frameDuration);
      const countTo = this.item.value;
      const easeOutQuad = (t: number) => t * (2 - t);
      let frame = 0;

      const counter = setInterval(() => {
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(countTo * progress);

        frame++;

        if (this.value !== currentCount) this.value = currentCount;
        if (frame === totalFrames) clearInterval(counter);
      }, frameDuration);
    },
  },
  mounted() {
    this.countUp();
  },
});
</script>

<style lang="less">
@import "~@/less/utils/variables.less";

.about {
  &--skills {
    &-item {
      height: @cluster / 2;
      display: grid;
      grid-template-columns: @cluster / 2 auto @cluster;
      gap: @cluster / 4;
      align-items: center;
      justify-items: center;
      margin: 0 0 @cluster / 4 0;
    }

    &-logo {
      width: @cluster / 2;

      svg {
        max-height: @cluster / 2;
        fill: @color-grey-dark;
      }
    }

    &-bar {
      background-color: @color-grey;
      width: 100%;
      height: @cluster / 20;
      border-radius: 4px;
      overflow: hidden;

      &__value {
        background-color: @color-primary;
        height: 100%;
      }
    }

    &-value {
      color: @color-grey-dark;

      &__countUp {
        font-family: "Choplin-ExtraBold";
        font-size: 24px;
        margin-right: @cluster / 10;
      }
    }
  }
}
</style>
