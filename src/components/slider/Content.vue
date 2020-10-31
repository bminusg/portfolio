<template>
  <div class="slider--content" :class="{ 'is--active': project.active }">
    <div
      class="slider--content-title title"
      :class="{ 'is--active': project.active }"
    >
      <div class="animate--bar" :class="{ 'is--active': project.active }">
        <h3>{{ project.title }}</h3>
      </div>
    </div>

    <div class="slider--content-copy">
      <div class="animate--bar" :class="{ 'is--active': project.active }">
        <p v-html="project.description"></p>
      </div>
    </div>

    <div class="slider--content-tags">
      <div class="animate--bar" :class="{ 'is--active': project.active }">
        <div class="flex flex--start flex--vcenter">
          <div
            class="slider--content-tag"
            v-for="tag in project.tags"
            :key="tag._id"
          >
            <svg class="slider--content-svg">
              <use :href="'#skill--' + tag"></use>
            </svg>
          </div>
          <div class="slider--content-cta">
            <button class="btn" v-on:click="expand">
              <small>Show details</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider-Content",
  props: ["project"],
  methods: {
    expand: function() {
      this.$root.$emit("expand", this.project);
    }
  }
};
</script>
