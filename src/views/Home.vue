<template>
  <section id="home" class="home fullscreen">
    <div
      class="home--workstation"
      :class="{ 'is--fixed': isVisible }"
      :style="{ top: workstationTop }"
    >
      <div class="home--workstation-inner">
        <div class="home--workstation-overlay"></div>
        <div class="home--workstation-img">
          <picture>
            <!--source srcset="@/assets/workstation.webp" type="image/webp" /-->
            <source srcset="@/assets/workstation.png" type="image/png" />
            <img
              src="@/assets/workstation.png"
              alt="Workstation"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div class="home--workstation-code"></div>
        </div>
      </div>
    </div>

    <div class="home--title flex flex--center">
      <div class="home--title-headlines">
        <h1>Hey, I am</h1>
        <h1 v-html="job" class="home--title-jobs"></h1>
      </div>
      <div class="home--title-buttons flex flex--middle">
        <Button
          href="#about"
          text="About me"
          target="_self"
          theme="primary"
        ></Button>
        <Button
          href="#projects"
          text="Projects"
          target="_self"
          theme="primary-ghost light"
        ></Button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "@/components/ui/Button.vue";

interface State {
  workstationTop: string;
  jobIDX: number;
  job: string;
  jobs: string[];
}

export default Vue.extend({
  name: "Home",
  props: ["isVisible"],
  data(): State {
    return {
      workstationTop: "auto",
      jobIDX: -1,
      job: "&nbsp;",
      jobs: [
        "Benny Gebauer",
        "Creative Developer",
        "code connoisseur",
        "Frontend Developer",
        "font ninja",
      ],
    };
  },
  methods: {
    defineJob() {
      this.jobIDX++;
      if (this.jobIDX > this.jobs.length - 1) this.jobIDX = 0;
      const job = this.jobs[this.jobIDX];
      setTimeout(this.setJobIntervall(job), 1000);
    },
    setJobIntervall(job: string) {
      //this.job = "&nbsp;";
      const maxStringLength = job.length;
      let IDX = -1;
      const loop = setInterval(() => {
        IDX++;
        // PREVENT JUMPY EMPTY SPACES
        if (job[IDX] === " ") {
          this.job += " ";
          IDX++;
        }
        if (IDX >= maxStringLength) {
          clearInterval(loop);
          this.resetJob();
          return;
        }
        this.job = IDX === 0 ? job[IDX] : this.job + job[IDX];
      }, 100);
    },
    resetJob() {
      setTimeout(() => {
        let IDX = this.job.length;
        const loop = setInterval(() => {
          IDX--;
          // PREVENT JUMPY EMPTY SPACES
          if (this.job[IDX] === " ") {
            this.job = this.job.substring(-1, IDX);
            IDX--;
          }
          if (IDX <= 0) {
            clearInterval(loop);
            this.job = "&nbsp;";
            setTimeout(this.defineJob, 500);
            return;
          }
          this.job = this.job.substring(-1, IDX);
        }, 50);
      }, 3000);
    },
  },
  mounted() {
    this.defineJob();
  },
  watch: {
    isVisible(value: boolean) {
      if (value) return (this.workstationTop = "auto");
      const workstation = document.querySelector(
        ".home--workstation"
      ) as HTMLElement | null;
      const offsetTop: number = workstation ? workstation.offsetTop : 0;
      //this.workstationTop = "calc(100% - " + offsetTop + "px)";
      this.workstationTop = "50vh";
    },
  },
  components: { Button },
});
</script>

<style lang="less" scoped>
@import "~@/less/utils/variables.less";

.home {
  margin-bottom: calc(var(--viewport-height) / 2);
  background-size: 1180px auto, 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("~@/assets/home--fx@2x.png"),
    linear-gradient(180deg, @color-primary, @color-primary-dark);

  @media screen and (max-width: 1180px) {
    background-size: 95% auto, 100% 100%;
    background-position: center 75%, center center;
  }

  &::before {
    content: "";
    background-color: white;
    position: absolute;
    width: 100%;
    height: @cluster * 2;
    left: 0;
    bottom: 0;
  }

  &--title {
    width: calc(100% - 40px);
    height: 50vh;
    color: #fff;
    margin: 0 20px;
    position: absolute;
    top: 25%;
    z-index: 10;
    flex-direction: column;

    @media screen and (orientation: landscape) {
      transform: translateY(@cluster * -1);
    }

    h1 {
      line-height: 1;
      text-align: center;
    }

    &-jobs {
      @media screen and (orientation: portrait) {
        min-height: 84px;
      }

      &::after {
        content: " _";
        font-family: "Courier New", Courier, monospace;
        font-weight: 100;
        position: absolute;
        color: @color-primary;
        vertical-align: top;
        animation: blink 0.5s linear infinite;

        @keyframes blink {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 1;
          }
        }
      }
    }

    &-buttons {
      margin: @cluster / 2;

      @media screen and (orientation: portrait) {
        margin: @cluster / 4;
      }
    }
  }

  &--workstation {
    width: 100%;
    max-width: 1500px;
    height: var(--viewport-height);
    top: 0;
    overflow: hidden;
    justify-content: flex-end;
    flex-direction: column;
    z-index: 10;

    @media screen and (min-width: 1500px) {
      left: calc(50% - 750px);
    }

    &-inner {
      position: absolute;
      bottom: 0;

      @media screen and (orientation: portrait) {
        bottom: @cluster;
      }
    }

    &-code {
      position: absolute;
      background-image: url("~@/assets/workstation--code@2x.jpg");
      background-repeat: repeat-y;
      background-size: 100% auto;
      background-position: 0 calc(var(--scroll-x) * -1);
      width: 27%;
      height: 38.63%;
      left: 36.67%;
      top: 5.45%;
    }

    &.is--fixed {
      position: fixed;
      top: auto;
    }
  }
}
</style>
