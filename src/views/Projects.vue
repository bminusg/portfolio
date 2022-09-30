<template>
  <section id="projects" class="projects fullscreen">
    <h2>{{ $t("projects.title") }}</h2>
    <div class="projects--teaser">
      <div class="projects--teaser-img__wrapper">
        <div
          v-for="project in projects"
          :key="project.id"
          class="projects--teaser-img"
        >
          <div class="projects--teaser-img__inline">
            <img :src="getImgUrl(project.imgs.teaser)" :alt="project.title" />
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
            {{ $t(project.slug.toString()) }}
          </p>
          <div class="projects--teaser-txt__footer">
            <div class="projects--teaser-tags">
              <div
                v-for="tag in project.tags"
                :key="tag"
                class="projects--teaser-tags__item"
              >
                <Icon :brand="tag" :fill="'rgb(119, 204, 164)'"></Icon>
              </div>
            </div>
            <div class="projects--teaser-cta" v-if="project.link">
              <Button
                :href="project.link"
                :text="$t('projects.cta')"
                target="_blank"
                theme="secondary"
                icon="external-link"
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <div class="projects--nav">
        <div
          @click="slidePrev()"
          class="projects--nav-trigger flex flex--middle"
        >
          <Icon
            brand="arrow-left"
            class="projects--nav-icon projects--nav-icon__prev"
          ></Icon>
        </div>
        <div
          @click="slideNext()"
          class="projects--nav-trigger flex flex--middle"
        >
          <Icon
            brand="arrow-left"
            class="projects--nav-icon projects--nav-icon__next"
          ></Icon>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
  {
    "en": {
      "plista_website": "Wireframe and Web Design drafts for a website relaunch.",
      "aufbaufuchs": "Creating CI and Single Page Application.",
      "pauleisenach": "Creating custom wordpress theme for an artist portfolio.",
      "plista_showroom": "Developing a custom WordPress Theme.",
      "tween_sass": "Tween.sass is a SASS single code-line mixin that delivers the possibility for chaining multiple tween components to one tween animation.",
      "csm_2000": "The Creative Solution Manager 2000 provides a working environment for your Advertising Creatives on your local machine. This tool uses modern Frontend technologies to build lightweight Creatives and brings a library for reusable Features."
    },
    "de": {
      "plista_website": "Wireframe und Web Design Entwürfe für einen Relaunch.",
      "aufbaufuchs": "Marketing Entwicklung und Umsetzung der Landingpage.",
      "pauleisenach": "Indivduelles Wordpress Theme für ein Künstler Portfolio.",
      "plista_showroom": "Indivduelles Wordpress Theme für einen Showroom.",
      "tween_sass": "Tween.sass ist ein Mixin, dass die Möglichkeit bietet einzelne Animationen zu einem Tween zu verketten mit nur einer Zeile.",
      "csm_2000": "Der Creative Solution Manager 2000 bietet eine lokale Entwicklungsumgebung und eine Feature Bibliothek um Werbemittel zu entwickeln."
    }
  }
  </i18n>

<script lang="ts">
import Icon from "@/components/Icon.vue";
import Button from "@/components/ui/Button.vue";

export default {
  name: "Projects",
  props: ["isVisible"],
  components: { Icon, Button },
  computed: {
    items() {
      return document.querySelectorAll(".projects--teaser-img");
    },
    txtItems() {
      return document.querySelectorAll(".projects--teaser-txt");
    },
  },
  data() {
    return {
      slideIDX: -1,
      direction: "right",
      projects: [
        {
          id: "6873185a-82c7-4505-a388-3d8c4ff575da",
          title: "plista Website",
          slug: "plista_website",
          description: "Wireframe and Web Design drafts for a website relaunch",
          tags: ["xd", "ps"],
          imgs: {
            teaser: "teaser--plista-website@2x.png",
            details: [
              "/imgs/projects/plista-website--slide-01.jpg",
              "/imgs/projects/plista-website--slide-02.jpg",
              "/imgs/projects/plista-website--slide-03.jpg",
              "/imgs/projects/plista-website--slide-04.jpg",
            ],
          },
        },
        {
          id: "dd352c6e-c32e-49ed-bb66-6a20cd71ce31",
          title: "Aufbaufuchs Website",
          slug: "aufbaufuchs",
          description: "Creating CI and Single Page Application",
          link: "http://www.aufbaufuchs.de",
          tags: ["js", "ps", "html", "css"],
          imgs: {
            teaser: "teaser--aufbaufuchs@2x.png",
            details: ["/imgs/projects/aufbaufuchs--slide-01.jpg"],
          },
        },
        {
          id: "446c04a2-4769-4da2-9be2-22b3cddd66b7",
          title: "Paul Eisenach Website",
          slug: "pauleisenach",
          link: "http://paul-eisenach.com/",
          tags: ["wordpress", "css", "js"],
          imgs: {
            teaser: "teaser--pauleisenach@2x.png",
            details: [],
          },
        },
        {
          id: "96f0efa8-652b-41aa-acc2-33f3bf97d55d",
          title: "plista Showroom",
          slug: "plista_showroom",
          description: "Developing a custom WordPress Theme",
          link: "http://showroom.plista.com/advertiser",
          tags: ["wordpress", "html", "css", "js"],
          imgs: {
            teaser: "teaser--plista-showroom@2x.png",
            details: [],
          },
        },
        {
          id: "2d0609de-4175-4943-8c84-f2ce80fdbc42",
          title: "tween.sass",
          slug: "tween_sass",
          description:
            "tween-sass is a SASS single code-line mixin that delivers the possibility for chaining multiple tween components to one tween animation",
          link: "http://projects.bminusg.de/tween-sass/",
          tags: ["sass"],
          imgs: {
            teaser: "teaser--tweensass@2x.png",
            details: [],
          },
        },
        {
          id: "242d0717-ab74-417b-b25a-9634b4285e9e",
          title: "Creative Solution Manager 2000",
          slug: "csm_2000",
          description:
            "The Creative Solution Manager 2000 provides a working environment for your Advertising Creatives on your local machine. This tool uses modern Frontend technologies to build lightweight Creatives and brings a library for reusable Features.",
          link: "https://github.com/bminusg/csm-2000",
          tags: ["js", "webpack"],
          imgs: {
            teaser: "teaser--csm@2x.png",
            details: [],
          },
        },
      ],
    };
  },
  methods: {
    slidePrev() {
      this.direction = "left";
      this.slide();
    },
    slideNext() {
      this.direction = "right";
      this.slide();
    },
    slide() {
      const maxIDX = this.items.length - 1;
      const slideOutItem = this.items[this.slideIDX];

      this.slideReset();

      if (this.direction === "right") this.slideIDX++;
      else this.slideIDX--;

      if (this.slideIDX < 0) this.slideIDX = maxIDX;
      if (this.slideIDX > maxIDX) this.slideIDX = 0;

      if (slideOutItem)
        slideOutItem.classList.add("slide--out-" + this.direction);

      this.items[this.slideIDX].classList.add("slide--in-" + this.direction);
      this.txtItems[this.slideIDX].classList.add("is--active");
    },
    slideReset() {
      this.items.forEach((item: HTMLElement) => {
        item.classList.remove(
          "slide--in-left",
          "slide--in-right",
          "slide--out-left",
          "slide--out-right"
        );

        item.offsetHeight;
      });

      this.txtItems.forEach((item: HTMLElement) => {
        item.classList.remove("is--active");
        item.offsetHeight;
      });
    },
    getImgUrl(filename: string) {
      return require("@/assets/teaser/" + filename);
    },
  },
  watch: {
    isVisible(value: boolean) {
      if (value) this.slideNext();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/less/utils/variables.less";

@clusterQuarter: @cluster / 4;

.projects {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: @cluster 0;

  @media screen and (max-width: 580px) {
    padding: @cluster / 4 0;
  }

  &--teaser {
    width: 100%;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr @cluster;
    grid-template-areas: "project--img project--txt" "project--nav project--nav";

    @media screen and (max-width: 580px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr @cluster / 2;
      grid-template-areas: "project--img" "project--txt" "project--nav";
      gap: @cluster / 10;
    }

    &-img {
      position: absolute;
      width: calc(100% - @clusterQuarter);
      height: calc(100% - @clusterQuarter);
      left: @cluster / 8;
      top: @cluster / 8;
      opacity: 0;
      z-index: -1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      &__wrapper {
        grid-area: project--img;
      }

      &__inline {
        flex: 0 1 580px;
      }

      &.slide--in-left {
        animation: slideInLeft 1s ease-in-out forwards;
      }

      &.slide--in-right {
        animation: slideInRight 1s ease-in-out forwards;
      }

      &.slide--out-left {
        animation: slideInRight 1s ease-in-out forwards reverse;
      }

      &.slide--out-right {
        animation: slideInLeft 1s ease-in-out forwards reverse;
      }

      @keyframes slideInLeft {
        0% {
          transform: translate3d(100%, -100%, 0);
          opacity: 0;
        }
        100% {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
      }

      @keyframes slideInRight {
        0% {
          transform: translate3d(-100%, 100%, 0);
          opacity: 0;
        }
        100% {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
      }
    }

    &-txt {
      padding: 0 @cluster / 4;
      position: absolute;
      flex: 1;
      visibility: hidden;

      &__title {
        color: @color-primary;
      }

      &__desc {
        margin: 0 0 @cluster / 2 0;

        @media screen and (max-width: 580px) {
          margin: 0 0 @cluster / 4 0;
        }
      }

      &__wrapper {
        display: flex;
        align-items: center;
        grid-area: project--txt;

        @media screen and (max-width: 580px) {
          align-items: flex-start;
        }
      }

      &__footer {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: @cluster / 2;

        @media screen and (max-width: 580px) {
          gap: @cluster / 6;
        }
      }

      &.is--active {
        visibility: visible;
      }
    }

    &-tags {
      display: flex;
      align-items: center;

      &__item {
        width: @cluster / 2;
        height: @cluster / 2;
        margin: 0 @cluster / 12;

        @media screen and (max-width: 580px) {
          width: @cluster / 4;
          height: @cluster / 4;
        }

        svg {
          max-height: 40px;
        }

        &:first-child {
          margin: 0 @cluster / 8 0 0;
        }
      }
    }
  }

  &--nav {
    width: @cluster * 2;
    height: 100%;
    left: calc(50% - @cluster);
    border: 1px solid rgba(@color-primary, 0.5);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-area: project--nav;

    &-trigger {
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      &:first-child {
        border-right: 1px solid rgba(@color-primary, 0.5);
      }
    }

    &-icon {
      flex: 0 1 12px;

      &__next {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
