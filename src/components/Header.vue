<template>
  <header class="header" :class="{ 'is--expand': expand.length > 0 }">
    <div class="header--nav">
      <div class="container flex flex--vcenter flex--between">
        <!-- LOGO -->
        <svg class="header--logo">
          <use href="#logo"></use>
        </svg>

        <!-- NAV EXPAND -->
        <nav class="header--expand flex flex--vcenter" v-if="expand.length > 0">
          <a
            :href="expand[0].link"
            target="_blank"
            class="header--nav-item"
            v-if="expand[0].link"
          >
            <svg>
              <use href="#icon--link"></use>
            </svg>
          </a>

          <div
            class="header--nav-item"
            v-on:click="detailIDX--"
            v-if="detailLength > 0"
          >
            <svg>
              <use href="#icon--arrow"></use>
            </svg>
          </div>

          <div
            class="header--nav-item"
            data-dir="next"
            v-on:click="detailIDX++"
            v-if="detailLength > 0"
          >
            <svg class="header--expand-nav__next">
              <use href="#icon--arrow"></use>
            </svg>
          </div>

          <div class="header--nav-item" v-on:click="$emit('collapse')">
            <svg>
              <use href="#close"></use>
            </svg>
          </div>
        </nav>

        <!-- NAV CONTACT -->
        <nav class="header--contact flex" v-else>
          <a :href="mail" class="header--nav-item">
            <svg class="header--contact-svg">
              <use href="#icon--contact"></use>
            </svg>
          </a>

          <a
            href="https://github.com/bminusg"
            target="_blank"
            alt="Benjamin Gebauer at Github"
            class="header--nav-item"
          >
            <svg class="header--contact-svg">
              <use href="#icon--github"></use>
            </svg>
          </a>

          <a
            href="https://www.xing.com/profile/Benjamin_Gebauer6"
            target="_blank"
            alt="Benjamin Gebauer at XING"
            class="header--nav-item"
          >
            <svg class="header--contact-svg">
              <use href="#icon--xing"></use>
            </svg>
          </a>

          <!--li class="header--contact-item flex flex--vcenter">
          <a
            href="https://www.instagram.com/_morganfreelance/"
            target="_blank"
            alt="Benjamin Gebauer at instagram"
            class="flex flex--vcenter"
          >
            <svg class="header--contact-svg">
              <use href="#icon--instagram"></use>
            </svg>
          </a>
        </li-->
        </nav>
      </div>
    </div>

    <div class="header--expand" v-if="expand.length === 1">
      <div class="header--expand-view">
        <img
          class="header--expand-view__img"
          :src="imgSRC"
          :alt="expand[0].title"
          v-on:click="detailIDX++"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["expand"],
  data: function() {
    return {
      mail: "mailto:hey@bminusg.de",
      detailIDX: 0,
      imgSRC: "",
      detailLength: -1
    };
  },
  watch: {
    expand: function(project) {
      this.detailLength =
        project.length > 0 ? project[0].imgs.details.length - 1 : -1;

      if (this.detailLength >= 0) {
        this.imgSRC = project[0].imgs.details[0];
      }
    },
    detailIDX: function(value) {
      // OPTIMIZE HERE: IF YOU CHANGE THE WATCHED VAR THEN WAHTCH JOB RUNS TWICE
      if (value > this.detailLength) this.detailIDX = 0;
      else if (value < 0) this.detailIDX = this.detailLength;

      this.imgSRC = this.expand[0].imgs.details[this.detailIDX];
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0);
  transition: height 0.6s cubic-bezier(0.76, 0, 0.24, 1);
  color: red;

  & > .container {
    height: 60px;
  }

  &--logo {
    height: 24px;
    width: 57px;
    fill: #fff;
  }

  &--nav {
    height: 60px;

    &-item {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: 60px;
      background-color: rgba(0, 0, 0, 0);
      transition: background-color 0.4s cubic-bezier(0.76, 0, 0.24, 1);

      svg {
        width: 15px;
        height: 15px;
        fill: #fff;
      }

      &[data-dir="next"] {
        transform: rotate(180deg);
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.25);
      }
    }
  }

  &--contact {
    height: inherit;

    &-item {
      height: inherit;

      a {
        padding: 0 20px;
        height: 100%;
      }
    }

    &-svg {
      width: 15px;
      height: 15px;
      fill: #fff;
    }
  }

  &--expand {
    .header--nav-item {
      svg {
        fill: #7bc4a2;
      }
    }

    &-view {
      overflow-y: scroll;
      height: calc(100vh - 60px);

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  &.is--expand {
    height: 100vh;
    background-color: rgba(255, 255, 255, 1);

    .header {
      &--nav {
        border-bottom: 1px solid #f2f2f2;
      }
      &--logo {
        fill: #3a3a3d;
      }

      &--expand {
        color: red;
      }
    }
  }
}
</style>
