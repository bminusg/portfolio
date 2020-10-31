<template>
  <section id="home" class="home fullscreen">
    <div class="container flex">
      <div class="col--6 home--whitespace"></div>
      <div class="col--6 home--content">
        <span class="home--kicker" v-if="visible">
          Cheers mate.
          <br />
          My name is Benjamin Gebauer and I am creating web applications as a
        </span>

        <div class="title" :class="{ 'is--active': visible }">
          <h1 data-title="design">Web<br />Designer</h1>
          <h1 data-title="code">Frontend<br />Developer</h1>
        </div>

        <ul class="home--anchors">
          <li class="home--anchor" v-on:click="anchor('about')">
            <svg><use href="#icon--terminal"></use></svg>
            <span>about</span>
          </li>
          <li class="home--anchor" v-on:click="anchor('skills')">
            <svg><use href="#icon--terminal"></use></svg>
            <span>skillset</span>
          </li>
          <li class="home--anchor" v-on:click="anchor('projects')">
            <svg><use href="#icon--terminal"></use></svg>
            <span>projects</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  props: ["visible"],
  methods: {
    anchor: function(target) {
      const section = document.querySelector("#" + target);
      const offset = section.offsetTop;

      window.scrollTo("0", offset);
    }
  },
  created: function() {
    setInterval(() => {
      this.design = !this.design;
    }, 3200);
  }
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    .container {
      position: absolute;
      top: 0;
      height: 100%;
      flex-direction: column;
    }

    .col--6 {
      flex: 1;
    }
  }

  &--kicker {
    color: #77cca4;
    display: block;
    margin: 0 0 20px 0;
  }

  &--anchor {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;

    svg {
      height: 10px;
      width: 11px;
      fill: #77cca4;
      margin: 0 10px 0 0;
    }
  }

  .title {
    height: 0;
    transition: height 0.8s cubic-bezier(0.77, 0, 0.175, 1);

    &.is--active {
      height: 208px;
    }

    h1 {
      position: absolute;
      opacity: 0;
      transform: translateX(-200px);
    }

    &.is--active {
      h1 {
        &[data-title="design"] {
          animation: rotate 8s linear 0.4s infinite;
        }

        &[data-title="code"] {
          animation: rotate 8s linear 4.4s infinite;
        }

        @keyframes rotate {
          0% {
            animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          5%,
          45% {
            opacity: 1;
            transform: translateX(0);
            animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
          }
          50%,
          100% {
            opacity: 0;
            transform: translateX(200px);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1220px) {
    &--content {
      flex: 1;

      .title {
        &.is--active {
          height: 131px;
        }
      }
    }

    &--kicker {
      font-size: 15px;
    }
  }
}

// ANIMATIONZ
.rotate {
  &-enter {
    transform: translateX(-200px) scale(0.8);
    opacity: 0;

    &-active {
      transform-origin: left center;
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.4s ease-out;
    }
  }

  &-leave {
    &-to {
      transform: translateX(200px) scale(0.8);
      opacity: 0;
    }
    &-active {
      transform-origin: right center;
      transition: transform 0.4s cubic-bezier(0.895, 0.03, 0.685, 0.22),
        opacity 0.4s ease-in;
    }
  }
}

.kicker {
  &-enter {
    transform: translateY(200px);
    opacity: 0;

    &-active {
      transform-origin: left center;
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.4s ease-out;
    }
  }
}
</style>
