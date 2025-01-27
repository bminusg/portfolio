<template>
  <div class="projects--container" :class="{ 'is--active': isVisible }">
    <h2>Projekte</h2>
    <div class="projects--teaser">
      <div class="projects--teaser-img__wrapper">
        <div
          v-for="project in projects"
          :key="project.id"
          class="projects--teaser-img"
        >
          <div class="projects--teaser-img__inline">
            <picture>
              <source
                :srcset="getImgUrl(project.imgs.teaser.webp)"
                type="image/webp"
              />
              <source
                :srcset="getImgUrl(project.imgs.teaser.png)"
                type="image/png"
              />
              <img
                :src="getImgUrl(project.imgs.teaser.webp)"
                :width="project.imgs.teaser.width"
                :height="project.imgs.teaser.height"
                :alt="project.title"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
      <div class="projects--teaser-txt__wrapper">
        <div
          v-for="project in projects"
          :key="project.id"
          class="projects--teaser-txt"
        >
          <h3 class="projects--teaser-txt__title">{{ project.title }}</h3>
          <p class="projects--teaser-txt__desc">
            {{ project.description }}
          </p>
          <div class="projects--teaser-txt__footer">
            <div class="projects--teaser-tags">
              <div
                v-for="tag in project.tags"
                :key="tag"
                class="projects--teaser-tags__item"
              >
                <IconUI :name="tag" :fill="'var(--color-gray-500)'" />
              </div>
            </div>
            <div class="projects--teaser-cta flex" v-if="project.link">
              <ButtonUI
                :href="project.link"
                :label="project.cta"
                target="_blank"
                icon="external-link"
              ></ButtonUI>
            </div>
          </div>
        </div>
      </div>
      <div class="projects--nav">
        <div
          @click="slider?.prev()"
          class="projects--nav-trigger flex flex--middle"
        >
          <IconUI
            name="arrowLeft"
            class="projects--nav-icon projects--nav-icon__prev"
          />
        </div>
        <div
          @click="slider?.next()"
          class="projects--nav-trigger flex flex--middle"
        >
          <IconUI
            name="arrowLeft"
            class="projects--nav-icon projects--nav-icon__next"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref, onUnmounted } from "vue";

import IconUI from "@/components/ui/IconUI.vue";
import ButtonUI from "@/components/ui/ButtonUI.vue";

import Slider from "@/utils/Slider";
import { UUID } from "crypto";

const slider: Ref<Slider | null> = ref(null);
const isVisible = ref(false);

interface Project {
  id: UUID;
  title: string;
  slug: string;
  cta?: string;
  description: string;
  link?: string;
  tags: IconSlugs[];
  imgs: Teasers;
}

interface Teaser {
  webp: string;
  png: string;
  width: number;
  height: number;
}

interface Teasers {
  //[key: string]: Teaser;
  teaser: Teaser;
}

const projects: Project[] = [
  {
    id: "f3822ec9-1bb4-4c66-a373-e24869044f81",
    title: "AD glance",
    slug: "adglance",
    cta: "Demo Login",
    description:
      "AD glance ist ein Prototyp für eine Kampagnen Management Plattform. Die Idee ist eine Perfomance Marketing Kampagne vom Sales bis zum Reporting zu betreuen indem externe Dienste integriert und in ihrer Funktionaltät erweitert werden können.",
    link: "https://adglance.vercel.app",
    tags: ["nuxt", "ts", "sass"],
    imgs: {
      teaser: {
        webp: "teaser--adglance@2x.webp",
        png: "teaser--adglance@2x.png",
        width: 532,
        height: 314,
      },
    },
  },
  {
    id: "942fe733-252a-494c-9918-2e3c292c4003",
    title: "Showroom",
    slug: "adshowroom",
    description:
      "Interner Showroom für die Erstellung und Archivierung von Ad Previews für verschiedene Publisher und Medien z.B. Rich Media, Native und DOOH.",
    tags: ["vue", "wordpress", "sass"],
    imgs: {
      teaser: {
        webp: "teaser--asr-showroom@2x.webp",
        png: "teaser--asr-showroom@2x.png",
        width: 532,
        height: 314,
      },
    },
  },
  {
    id: "2d0609de-4175-4943-8c84-f2ce80fdbc42",
    title: "tween.sass",
    slug: "tween_sass",
    cta: "Mehr erfahren",
    description:
      "Tween.sass ist ein Mixin, dass die Möglichkeit bietet einzelne Animationen mit nur einer Zeile zu einem Tween zu verketten.",
    link: "https://projects.bminusg.de/tween-sass/",
    tags: ["sass"],
    imgs: {
      teaser: {
        webp: "teaser--tweensass@2x.webp",
        png: "teaser--tweensass@2x.png",
        width: 532,
        height: 314,
      },
    },
  },
  {
    id: "242d0717-ab74-417b-b25a-9634b4285e9e",
    title: "Creative Solution Manager 2000",
    slug: "csm_2000",
    cta: "Mehr erfahren",
    description:
      "Der Creative Solution Manager 2000 bietet eine lokale Entwicklungsumgebung und eine Feature Bibliothek um Werbemittel zu entwickeln.",
    link: "https://github.com/bminusg/csm-2000",
    tags: ["js", "webpack"],
    imgs: {
      teaser: {
        webp: "teaser--csm@2x.webp",
        png: "teaser--csm@2x.png",
        width: 562,
        height: 409,
      },
    },
  },
  {
    id: "6873185a-82c7-4505-a388-3d8c4ff575da",
    title: "plista Website",
    slug: "plista_website",
    description: "Wireframe und Web Design Entwürfe für einen Relaunch.",
    tags: ["xd", "ps"],
    imgs: {
      teaser: {
        webp: "teaser--plista-website@2x.webp",
        png: "teaser--plista-website@2x.png",
        width: 587,
        height: 398,
      },
    },
  },
  {
    id: "96f0efa8-652b-41aa-acc2-33f3bf97d55d",
    title: "plista Showroom",
    slug: "plista_showroom",
    description: "Indivduelles Wordpress Theme für einen Showroom.",
    tags: ["wordpress", "html", "css", "js"],
    imgs: {
      teaser: {
        webp: "teaser--plista-showroom@2x.webp",
        png: "teaser--plista-showroom@2x.png",
        width: 521,
        height: 423,
      },
    },
  },
  {
    id: "dd352c6e-c32e-49ed-bb66-6a20cd71ce31",
    title: "Aufbaufuchs Website",
    slug: "aufbaufuchs",
    description: "Marketing Entwicklung und Umsetzung der Landingpage.",
    link: "http://www.aufbaufuchs.de",
    cta: "Mehr erfahren",
    tags: ["js", "ps", "html", "css"],
    imgs: {
      teaser: {
        webp: "teaser--aufbaufuchs@2x.webp",
        png: "teaser--aufbaufuchs@2x.png",
        width: 586,
        height: 325,
      },
    },
  },
];

const getImgUrl = (filename: string) => {
  return `/img/teaser/${filename}`;
};

onMounted(() => {
  isVisible.value = true;
  slider.value = new Slider();
  slider.value.next();
});

onUnmounted(() => {
  isVisible.value = false;
});
</script>

<style lang="sass">
@use "@/sass/views/projects.sass"
</style>
