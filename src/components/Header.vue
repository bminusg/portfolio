<template>
  <div class="header" :class="{ 'is--expand': expand.length > 0 }">
    <div class="container flex flex--between">
      <nav class="header--nav flex flex--vcenter">
        <svg class="header--logo">
          <use href="#logo"></use>
        </svg>
      </nav>
      <nav class="header--expand flex flex--vcenter" v-if="expand.length > 0">
        <div
          class="header--expand-nav flex flex--vcenter flex--center"
          v-on:click="prev()"
        >
          <svg>
            <use href="#icon--arrow"></use>
          </svg>
        </div>
        <div
          class="header--expand-nav flex flex--vcenter flex--center"
          v-on:click="next()"
        >
          <svg class="header--expand-nav__next">
            <use href="#icon--arrow"></use>
          </svg>
        </div>
        <div
          class="header--expand-nav flex flex--vcenter flex--center"
          v-on:click="$emit('collapse')"
        >
          <svg>
            <use href="#close"></use>
          </svg>
        </div>
      </nav>
      <ul class="header--contact flex" v-else>
        <li class="header--contact-item ">
          <a :href="mail" class="flex flex--vcenter">
            <svg class="header--contact-svg">
              <use href="#icon--contact"></use>
            </svg>
          </a>
        </li>
        <li class="header--contact-item ">
          <a
            href="https://github.com/bminusg"
            target="_blank"
            alt="Benjamin Gebauer at Github"
            class="flex flex--vcenter"
          >
            <svg class="header--contact-svg">
              <use href="#icon--github"></use>
            </svg>
          </a>
        </li>
        <li class="header--contact-item ">
          <a
            href="https://www.xing.com/profile/Benjamin_Gebauer6"
            target="_blank"
            alt="Benjamin Gebauer at XING"
            class="flex flex--vcenter"
          >
            <svg class="header--contact-svg">
              <use href="#icon--xing"></use>
            </svg>
          </a>
        </li>
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
      </ul>
    </div>

    <div class="header--expand" v-if="expand.length === 1">
      <div class="container">
        <div
          class="header--expand-view"
          v-for="(img, idx) in expand[0].imgs.details"
          :key="img._id"
        >
          <img
            class="header--expand-view__img"
            v-if="idx === detailIDX"
            :src="img"
            :alt="expand.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["expand"],
  data: function() {
    return {
      mail: "mailto:hey@bminusg.de",
      detailIDX: 0
    };
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
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.6s ease-in-out;
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
    height: inherit;
  }

  &--contact {
    height: inherit;

    &-item {
      height: inherit;

      a {
        padding: 0 20px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

        &:hover {
          background-color: rgba(0, 0, 0, 0.25);
        }
      }
    }

    &-svg {
      width: 15px;
      height: 15px;
      fill: #fff;
    }
  }

  &--expand {
    &-nav {
      height: inherit;
      width: 60px;
      cursor: pointer;

      svg {
        height: 15px;
        width: 15px;
        fill: #7bc4a2;

        &.header--expand-nav__next {
          transform: rotate(180deg);
        }
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
