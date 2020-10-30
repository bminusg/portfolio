<template>
  <section id="skills" class="view skills fullscreen">
    <div class="container">
      <transition
        enter-class="title-in"
        enter-active-class="title-in-active"
        leave-to-class="title-out"
        leave-active-class="title-out-active"
      >
        <h2 v-if="visible">Skill set</h2>
      </transition>

      <div class="skills--grid">
        <div class="skills--grid-header">
          <transition name="workstation">
            <div class="skills--setup" v-if="visible">
              <div
                class="skills--setup-shadow"
                :style="{ transform: 'translateY(' + (parallaxY - 50) + 'px)' }"
              ></div>
              <div class="skills--setup-pennant__fcu"></div>
              <div class="skills--setup-pennant__afca"></div>
              <div
                class="skills--setup-workstation"
                :style="{
                  transform: 'translateY(' + -(parallaxY - 50) + 'px)'
                }"
              >
                <div
                  class="skills--setup-code"
                  :style="{
                    backgroundPosition: '0 ' + -parallaxY * 3 + 'px'
                  }"
                ></div>
              </div>

              <div
                class="skills--setup-glitch__01"
                :style="{ transform: 'translateX(' + parallaxY * 0.8 + 'px)' }"
              ></div>
              <div
                class="skills--setup-glitch__02"
                :style="{ transform: 'translateX(' + -parallaxY * 1.1 + 'px)' }"
              ></div>
            </div>
          </transition>
        </div>
        <div
          class="skills--grid-design flex flex--vcenter"
          :class="{ 'is--active': activeSKILL.indexOf('design') > -1 }"
          v-on:click="showSKILL('design')"
        >
          <h4>Design</h4>
        </div>
        <div
          class="skills--grid-code flex flex--vcenter"
          :class="{ 'is--active': activeSKILL.indexOf('code') > -1 }"
          v-on:click="showSKILL('code')"
        >
          <h4>Code</h4>
        </div>
        <div class="skills--grid-content flex">
          <ul
            class="skills--design"
            v-show="activeSKILL.indexOf('design') > -1"
          >
            <Skill-Item
              v-for="skill in skills.design"
              :key="skill.id"
              :progress="progress"
              :skill="skill"
            ></Skill-Item>
          </ul>
          <ul class="skills--code" v-show="activeSKILL.indexOf('code') > -1">
            <Skill-Item
              v-for="skill in skills.code"
              :progress="progress"
              :key="skill.id"
              :skill="skill"
            ></Skill-Item>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Skill from "@/components/Skill";

export default {
  name: "Skills",
  components: {
    "Skill-Item": Skill
  },
  props: ["visible", "scrollY", "views"],
  data: function() {
    return {
      parallaxY: 0,
      progress: 0,
      activeSKILL: ["design", "code"],
      skills: {
        design: [
          {
            title: "Photoshop",
            type: "ps",
            value: 95
          },
          {
            title: "Illustrator",
            type: "ai",
            value: 85
          },
          {
            title: "Adobe XD",
            type: "xd",
            value: 90
          },
          {
            title: "After Effects",
            type: "ae",
            value: 65
          },
          {
            title: "InDesign",
            type: "id",
            value: 90
          }
        ],
        code: [
          {
            title: "HTML 5",
            type: "html",
            value: 98
          },
          {
            title: "CSS 3",
            type: "css",
            value: 95
          },
          {
            title: "Less",
            type: "less",
            value: 95
          },
          {
            title: "Vanilla JS",
            type: "js",
            value: 80
          },
          {
            title: "Vue JS",
            type: "vue",
            value: 85
          },
          {
            title: "Node JS",
            type: "node",
            value: 70
          },
          {
            title: "WordPress",
            type: "wp",
            value: 90
          }
        ]
      }
    };
  },
  computed: {
    MOBILE: function() {
      //const mediaQuery = window.matchMedia("(max-width: 529px)");
      const mediaQuery = window.matchMedia("(max-width: 943px)");
      return mediaQuery.matches;
    }
  },
  methods: {
    loop: function() {
      if (this.progress > 0) return;
      const count = setInterval(() => {
        this.progress++;
        if (this.progress >= 100) clearInterval(count);
      }, 10);
    },
    showSKILL: function(skill) {
      if (this.MOBILE) {
        this.progress = 0;
        this.activeSKILL = new Array(skill);
        this.loop();
      }
    }
  },
  created: function() {
    if (this.MOBILE) this.activeSKILL = new Array("design");
  },
  watch: {
    scrollY: function(value) {
      if (this.visible) {
        // TRIGGER SKILLTREE
        this.loop();

        // ANIMATE WORKSTATION
        const offset = (value - this.views[1].breakpoints.quartile) / 10;
        this.parallaxY = offset;
      } else {
        this.progress = 0;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.skills {
  padding: 100px 0;

  &--grid {
    margin: 40px 0;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "design code"
      "content content";

    &-header {
      position: relative;
      grid-area: header;
      width: 100%;
      padding-top: 42.8%; // CINEMASCOPE 21:9

      @media screen and (orientation: portrait) {
        height: 400px;
        padding: 0;
      }
    }

    &-design {
      grid-area: design;
      position: relative;

      h4 {
        margin: 20px 0;
      }

      @media screen and (orientation: portrait) {
        background-color: #2b2b2b;
        border-radius: 6px 0 0 6px;
        justify-content: center;

        &.is--active {
          background-color: #77cca4;
        }
      }

      @media screen and (orientation: landscape) {
        &::after {
          content: "";
          background-color: #48484c;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
        }
      }
    }

    &-code {
      grid-area: code;
      position: relative;

      h4 {
        margin: 20px 0;
      }

      @media screen and (orientation: portrait) {
        background-color: #2b2b2b;
        border-radius: 0 6px 6px 0;
        justify-content: center;

        &.is--active {
          background-color: #77cca4;
        }
      }

      @media screen and (orientation: landscape) {
        &::after {
          content: "";
          background-color: #48484c;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
        }
      }
    }

    &-content {
      grid-area: content;
      padding: 20px 0;
    }
  }

  &--setup {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

    &-shadow,
    &-workstation,
    &-code,
    &-pennant__fcu,
    &-pennant__afca,
    &-glitch__01,
    &-glitch__02 {
      position: absolute;
      background-repeat: no-repeat;
      background-size: contain;
    }
    &-shadow {
      background-image: url("../assets/imgs/skill--shadow.png");
      width: 83%;
      height: 34%;
      top: 62%;
      left: 7%;

      @media screen and (max-width: 767px) {
        width: 678px;
        height: 121px;
        left: -360px;
        top: 190px;
      }
    }
    &-workstation {
      background-image: url("../assets/imgs/skill--workstation.png");
      width: 83%;
      height: 81%;
      top: 7%;
      left: 9%;

      @media screen and (max-width: 767px) {
        width: 661px;
        height: 345px;
        left: -360px;
        top: 0;
      }
    }
    &-pennant__fcu {
      background-image: url("../assets/imgs/skill--pennant-fcu.png");
      width: 10%;
      height: 22.5%;
      top: 16%;
      left: 70%;
    }
    &-pennant__afca {
      background-image: url("../assets/imgs/skill--pennant-afca.png");
      width: 5%;
      height: 19%;
      top: 16%;
      left: 27%;
    }
    &-code {
      background-image: url("../assets/imgs/skill--code.png");
      background-repeat: repeat-y;
      background-size: 100% auto;
      width: 32%;
      height: 48%;
      top: 3%;
      left: 33%;

      @media screen and (max-width: 767px) {
        width: 222px;
        height: 136px;
        left: 229px;
      }
    }
    &-glitch {
      &__01 {
        background-image: url("../assets/imgs/skill--glitches-01.png");
        width: 75%;
        height: 32%;
        top: 56%;
        left: 12%;
      }

      &__02 {
        background-image: url("../assets/imgs/skill--glitches-02.png");
        width: 57%;
        height: 29.5%;
        top: 11%;
        left: 26%;
      }
    }
  }

  &--design {
    flex: 1;
  }
  &--code {
    flex: 1;
  }
}

.workstation {
  &-enter {
    transform: translateY(40px);
    opacity: 0;

    &-active {
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.6s ease-out;
    }
  }

  &-leave {
    &-to {
      transform: translateY(40px);
      opacity: 0;
    }
    &-active {
      transition: transform 0.6s cubic-bezier(0.895, 0.03, 0.685, 0.22),
        opacity 0.6s ease-in;
    }
  }
}
</style>
