<template>
  <div class="home--background" :class="{ 'is--active': isVisible }"></div>
  <div class="home--workstation">
    <div class="home--workstation-inner" :class="{ 'is--active': isVisible }">
      <div class="home--workstation-overlay"></div>
      <div class="home--workstation-img">
        <picture>
          <source srcset="@/assets/workstation.webp" type="image/webp" />
          <source srcset="@/assets/workstation.png" type="image/png" />
          <img
            src="@/assets/workstation.webp"
            alt="Workstation"
            width="auto"
            height="auto"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div class="home--workstation-code"></div>
      </div>
    </div>
  </div>
  <div
    class="home--title flex flex--center"
    :class="{ 'is--active': isVisible }"
  >
    <div class="home--title-container flex flex--center">
      <div class="home--title-headlines">
        <h1>Hey, Ich bin</h1>
        <h1 v-html="job" class="home--title-jobs"></h1>
      </div>
      <div class="home--title-buttons flex flex--middle">
        <ButtonUI href="#aboutme" :label="'Über mich'"></ButtonUI>
        <ButtonUI
          href="#projects"
          :label="'Projekte'"
          theme="primary-ghost light"
        ></ButtonUI>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ButtonUI from "@/components/ui/ButtonUI.vue";

// UTILS
import TypeEffect from "@/utils/TypeEffect";

const isVisible = ref(false);
const job = ref("&nbsp;");

const typeEffect = new TypeEffect({
  job: job.value,
  jobs: [
    "Frontend Developer",
    "Code connoisseur",
    "Creative Developer",
    "Benny Gebauer",
  ],
  callback: (updatedJob: string) => {
    job.value = updatedJob;
  },
});

onMounted(() => {
  isVisible.value = true;
  typeEffect.start();
});

onUnmounted(() => {
  isVisible.value = false;
  typeEffect.pause();
});
</script>

<style lang="sass">
@use "@/sass/views/home.sass"
</style>
