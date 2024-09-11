<template>
  <nav class="tab flex">
    <div
      class="tab--item flex flex--center"
      v-for="(option, index) in props.options"
      v-on:click="select(index)"
      :key="'tab--option-' + index"
      :class="{ 'tab--item-active': index === selected }"
    >
      <span>{{ option }}</span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  options: { type: Array, required: true },
  selected: { type: Number, required: true },
});

const emits = defineEmits(["select"]);

const select = (optionIndex: number) => {
  emits("select", optionIndex);
};
</script>

<style lang="sass" scoped>
@use "@/sass/components/tabs.sass"
</style>
