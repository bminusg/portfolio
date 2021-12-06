<template>
  <section id="contact" class="contact fullscreen">
    <div class="grid" data-grid="none">
      <transition name="fade">
        <h2 v-show="isVisible">Lets work together</h2>
      </transition>
    </div>
    <div class="grid" data-grid="half">
      <div class="contact--txt">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>

        <ul class="contact--txt-list">
          <li>
            <h3>Email</h3>
            <a href="mailto:">benny.gebauer [at] outlook.de</a>
          </li>
          <li class="contact--txt-list__item">
            <h3>Follow me</h3>
            <a href="https://github.com/bminusg/" target="_blank">GitHub</a>
            <a
              href="https://www.xing.com/profile/Benjamin_Gebauer6/"
              target="_blank"
              >XING</a
            >
          </li>
        </ul>
      </div>
      <div class="contact--img"></div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from "vue";
  export default Vue.extend({
    name: "Contact",
    props: ["isVisible"],
  });
</script>
