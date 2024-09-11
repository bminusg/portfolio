<template>
  <li class="aboutme--skills-item">
    <div class="aboutme--skills-logo flex flex--center" :title="item.name">
      <Icon :name="item.slug"></Icon>
    </div>
    <div class="aboutme--skills-bar">
      <div
        class="aboutme--skills-bar__value"
        :style="{ width: skillValue + '%' }"
      ></div>
    </div>
    <div class="aboutme--skills-value">
      <span class="aboutme--skills-value__countUp">{{ skillValue }}</span>
      <span>%</span>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";
import Icon from "@/components/ui/IconUI.vue";

const props = defineProps(["item"]);
const skillValue = ref(0);

const countUp = () => {
  const animationDuration = 600;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(animationDuration / frameDuration);
  const countTo = props.item.value;
  const easeOutQuad = (t: number) => t * (2 - t);
  let frame = 0;

  const counter = setInterval(() => {
    const progress = easeOutQuad(frame / totalFrames);
    const currentCount = Math.round(countTo * progress);

    frame++;

    if (skillValue.value !== currentCount) skillValue.value = currentCount;
    if (frame === totalFrames) clearInterval(counter);
  }, frameDuration);
};

onMounted(() => countUp());
</script>

<style lang="sass"></style>
