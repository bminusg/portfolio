<template>
  <section id="about" class="fullscreen flex flex--vcenter">
    <div class="container flex">
      <transition
        enter-class="title-in"
        enter-active-class="title-in-active"
        leave-to-class="title-out"
        leave-active-class="title-out-active"
      >
        <h2 v-if="visible">About me</h2>
      </transition>

      <div class="about col--6">
        <h3 class="title" :class="{ 'is--active': visible }">
          I've grown with the job
        </h3>

        <p>
          Since 2010 I am creating Web Designs for different employers.
          Advertising was the most field of application. Adapting existing key
          visuals into an advertising campaign frame and creating pitch visuals
          was my daily business.
        </p>
        <p>
          After 6 years of improving visual skills, it was time for new quests
          and since then I am creating web applications with a good user
          experience focus.
        </p>

        <h4>Companies I have worked with</h4>

        <div class="about--jobs flex flex--around">
          <a
            class="about--job flex flex--vcenter flex--center"
            href="https://www.mediaimpact.de/"
            target="_blank"
          >
            <img src="@/assets/imgs/about/logo--mi@2x.png" alt="Media Impact" />
          </a>
          <a
            class="about--job   flex flex--vcenter flex--center"
            href="https://www.neofonie.de/"
            target="_blank"
            ><img
              src="@/assets/imgs/about/logo--neofonie@2x.png"
              alt="Media Impact"
          /></a>
          <a
            class="about--job  flex flex--vcenter flex--center"
            href="https://www.plista.com/"
            target="_blank"
            ><img
              src="@/assets/imgs/about/logo--plista@2x.png"
              alt="Media Impact"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["visible"]
};
</script>

<style lang="less">
.about {
  position: relative;

  &--jobs {
    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
  }

  &--job {
    flex: 1;
    padding: 10px;
    margin: 0 0 20px 0;
    border-radius: 6px;
    background-color: rgba(43, 43, 43, 0);
    transition: background-color 0.4s cubic-bezier(0.77, 0, 0.175, 1);

    &:hover {
      background-color: rgba(43, 43, 43, 1);
    }
    img {
      width: auto;
      height: 100%;
      max-height: 20px;
    }
  }
}
</style>
