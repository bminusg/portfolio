<template>
  <section id="projects" class="projects fullscreen">
    <h2>Projects</h2>
    <div class="projects--teaser grid" data-grid="half">
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
          <p class="projects--teaser-txt__desc">{{ project.description }}</p>
          <div class="projects--teaser-txt__footer">
            <div class="projects--teaser-tags">
              <div
                v-for="tag in project.tags"
                :key="tag"
                class="projects--teaser-tags__item"
              >
                <Logo :brand="tag"></Logo>
              </div>
            </div>
            <div class="projects--teaser-cta" v-if="project.link">
              {{ project.link }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="projects--nav">
      <div @click="slidePrev()" class="projects--nav-trigger flex flex--middle">
        Previous
      </div>
      <div @click="slideNext()" class="projects--nav-trigger flex flex--middle">
        next
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Logo from "@/components/Logo.vue";

export default {
  name: "Projects",
  props: ["isVisible"],
  components: { Logo },
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
          slug: "plista-website",
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
          tags: ["html", "css", "js", "ps"],
          imgs: {
            teaser: "teaser--plista-website@2x.png",
            details: ["/imgs/projects/aufbaufuchs--slide-01.jpg"],
          },
        },
        {
          id: "446c04a2-4769-4da2-9be2-22b3cddd66b7",
          title: "Paul Eisenach Website",
          slug: "pauleisenach",
          description:
            "Creating custom wordpress theme for an artist portfolio",
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
          slug: "plista-showroom",
          description: "Developing a custom WordPress Theme",
          link: "http://showroom.plista.com/advertiser",
          tags: ["wordpress", "html", "css", "js"],
          imgs: {
            teaser: "teaser--plista-website@2x.png",
            details: [],
          },
        },
        {
          id: "2d0609de-4175-4943-8c84-f2ce80fdbc42",
          title: "tween.sass",
          slug: "tween-sass",
          description:
            "tween-sass is a SASS single code-line mixin that delivers the possibility for chaining multiple tween components to one tween animation",
          link: "http://projects.bminusg.de/tween-sass/",
          tags: ["sass"],
          imgs: {
            teaser: "teaser--plista-website@2x.png",
            details: [],
          },
        },
        {
          id: "242d0717-ab74-417b-b25a-9634b4285e9e",
          title: "Creative Solution Manager 2000",
          slug: "csm-2000",
          description:
            "The Creative Solution Manager 2000 provides a working environment for your Advertising Creatives on your local machine. This tool uses modern Frontend technologies to build lightweight Creatives and brings a library for reusable Features.",
          link: "https://github.com/bminusg/csm-2000",
          tags: ["js", "webpack"],
          imgs: {
            teaser: "teaser--plista-website@2x.png",
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

  &--teaser {
    width: 100%;
    flex: 1;

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

      &__inline {
        flex: 0 1 580px;
        //max-width: 580px;
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
        // background-image: linear-gradient(
        //   to right,
        //   @color-primary,
        //   @color-primary-dark
        // );
        // background-clip: text;
        // -webkit-text-fill-color: transparent;
      }

      &__desc {
        margin: 0 0 @cluster / 2 0;
      }

      &__wrapper {
        display: flex;
        align-items: center;
      }

      &__footer {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: @cluster / 2;
      }

      &.is--active {
        visibility: visible;
      }
    }

    &-tags {
      display: flex;
      align-items: center;

      &__item {
        width: 40px;
        height: 40px;
        margin: 0 @cluster / 12;

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
    position: absolute;
    width: @cluster * 2;
    height: @cluster;
    left: calc(50% - @cluster);
    border: @cluster / 20 solid black;
    bottom: @cluster / 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &-trigger {
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
