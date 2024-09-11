<template>
  <a v-if="props.href" :href="props.href" target="_self">
    <button class="btn">
      <span class="btn--label">{{ props.label }}</span>
    </button>
  </a>
  <button v-else class="btn">
    <span class="btn--label">{{ props.label }}</span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  color: String,
  type: String,
  size: String,
  label: String,
  href: String,
});
</script>

<style lang="sass">
@use "@/sass/components/button.sass"
</style>
