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
      "tween_sass": "Tween.sass ist ein Mixin, dass die Möglichkeit bietet einzelne Animationen mit nur einer Zeile zu einem Tween zu verketten.",
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
            description:
              "Wireframe and Web Design drafts for a website relaunch",
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
            id: "dd352c6e-c32e-49ed-bb66-6a20cd71ce31",
            title: "Aufbaufuchs Website",
            slug: "aufbaufuchs",
            description: "Creating CI and Single Page Application",
            link: "http://www.aufbaufuchs.de",
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
          {
            id: "446c04a2-4769-4da2-9be2-22b3cddd66b7",
            title: "Paul Eisenach Website",
            slug: "pauleisenach",
            link: "http://paul-eisenach.com/",
            tags: ["wordpress", "css", "js"],
            imgs: {
              teaser: {
                webp: "teaser--pauleisenach@2x.webp",
                png: "teaser--pauleisenach@2x.png",
                width: 532,
                height: 417,
              },
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
              teaser: {
                webp: "teaser--plista-showroom@2x.webp",
                png: "teaser--plista-showroom@2x.png",
                width: 521,
                height: 423,
              },
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
            description:
              "The Creative Solution Manager 2000 provides a working environment for your Advertising Creatives on your local machine. This tool uses modern Frontend technologies to build lightweight Creatives and brings a library for reusable Features.",
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

  @clusterQuarter: calc(@cluster / 4);

  .projects {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: @cluster 0;

    @media screen and (max-width: 580px) {
      padding: calc(@cluster / 4) 0;
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
        grid-template-rows: 1fr 2fr calc(@cluster / 2);
        grid-template-areas: "project--img" "project--txt" "project--nav";
        gap: calc(@cluster / 1) 0;
      }

      &-img {
        position: absolute;
        width: calc(100% - @clusterQuarter);
        height: calc(100% - @clusterQuarter);
        left: calc(@cluster / 8);
        top: calc(@cluster / 8);
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
        padding: 0 calc(@cluster / 4);
        position: absolute;
        flex: 1;
        visibility: hidden;

        &__title {
          color: @color-primary;
        }

        &__desc {
          margin: 0 0 calc(@cluster / 2) 0;

          @media screen and (max-width: 580px) {
            margin: 0 0 calc(@cluster / 4) 0;
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
          gap: calc(@cluster / 2);

          @media screen and (max-width: 580px) {
            gap: calc(@cluster / 6);
          }
        }

        &.is--active {
          visibility: visible;
        }
      }

      &-tags {
        display: flex;
        align-items: center;
        gap: calc(@cluster / 6);

        &__item {
          width: calc(@cluster / 2);
          height: calc(@cluster / 2);
          display: flex;
          justify-content: center;

          @media screen and (max-width: 580px) {
            width: calc(@cluster / 4);
            height: calc(@cluster / 4);
          }

          svg {
            max-height: 40px;
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
