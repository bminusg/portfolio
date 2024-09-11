<template>
  <div class="container">
    <h2>Lass schnacken</h2>
    <div class="grid contact--grid" data-grid="half">
      <div class="contact--txt">
        <p>
          Ich bin auf der Suche nach freiberuflichen Projekten und kann euch
          unterstützen bei UI/UX-Design-Aufgaben, Werbemittel-Gestaltung und
          Frontend-Projekten. Melde dich einfach über folgende Kanäle:
        </p>

        <div class="contact--links">
          <h4>Email</h4>
          <ul class="contact--links-list">
            <li class="contact--links-list__item flex">
              <IconUI name="mail" class="contact--links-list__item_icon" />

              <a :href="'mailto:' + mail">
                <span>benny.gebauer [at] outlook.de</span></a
              >
            </li>
          </ul>
        </div>

        <div class="contact--links">
          <h4>Social Networking</h4>
          <ul class="contact--links-list">
            <li class="contact--links-list__item flex">
              <IconUI name="github" class="contact--links-list__item_icon" />

              <a href="https://github.com/bminusg/" target="_blank" rel="">
                <span>GitHub</span>
              </a>
            </li>
            <li class="contact--links-list__item flex">
              <IconUI name="xing" class="contact--links-list__item_icon" />

              <a
                class="flex"
                href="https://www.xing.com/profile/Benjamin_Gebauer6/"
                target="_blank"
              >
                <span>XING</span>
              </a>
            </li>
            <li class="contact--links-list__item flex">
              <IconUI name="linkedin" class="contact--links-list__item_icon" />

              <a
                class="flex"
                href="https://www.linkedin.com/in/benjamin-gebauer-70503228b/"
                target="_blank"
              >
                <span> LinkedIn </span>
              </a>
            </li>
            <li class="contact--links-list__item flex">
              <IconUI
                name="soundcloud"
                class="contact--links-list__item_icon"
              />

              <a href="https://soundcloud.com/ruudje1312" target="_blank">
                <span> SoundCloud </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="contact--img-wrapper flex flex--center">
        <div class="contact--img" :class="{ 'is--active': isVisible }">
          <picture>
            <source srcset="@/assets/me@2x.webp" type="image/webp" />
            <source srcset="@/assets/me@2x.png" type="image/png" />
            <img
              src="@/assets/me@2x.webp"
              width="380"
              height="494"
              alt="Portrait Benjamin Gebauer"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import IconUI from "@components/ui/IconUI.vue";

const isVisible = ref(false);

const mail = computed(() => (isVisible ? "benny.gebauer@bminusg.de" : ""));

onMounted(() => {
  isVisible.value = true;
});

onUnmounted(() => {
  isVisible.value = false;
});
</script>

<style lang="sass">
@use "@/sass/views/contact.sass"
</style>
