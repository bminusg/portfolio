<template>
  <li
    class="skills--item"
    :class="{ 'is--hover': HOVER, 'is--active': progress > 0 }"
    v-on:mouseover="HOVER = true"
    v-on:mouseleave="HOVER = false"
  >
    <div class="skills--item-icon flex flex--vcenter">
      <svg class="skills--item-icon__svg">
        <use :href="'#skill--' + skill.type"></use>
      </svg>

      <transition name="name">
        <div class="skills--item-name" v-if="HOVER">{{ skill.title }}</div>
      </transition>
    </div>
    <div class="skills--item-bar flex flex--vcenter">
      <div class="skills--item-bar__outer">
        <div
          class="skills--item-bar__inner"
          :style="{ width: VALUE + '%' }"
        ></div>
      </div>
    </div>
    <div class="skills--item-value flex flex--vcenter">
      <span>{{ VALUE }}<small>%</small></span>
    </div>
  </li>
</template>

<script>
export default {
  name: "Skill-Item",
  props: ["skill", "progress"],
  data: function() {
    return {
      VALUE: 0,
      HOVER: false
    };
  },
  watch: {
    progress: function(value) {
      if (value < this.skill.value) {
        this.VALUE = value;
      } else {
        this.VALUE = this.skill.value;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.skills--item {
  display: grid;
  gap: 20px;
  grid-template-columns: 80px 1fr 80px;
  grid-template-areas: "icon bar value";
  height: 60px;
  overflow: hidden;
  border-radius: 6px;
  opacity: 0.5;
  transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);

  &-icon {
    grid-area: icon;
    margin: 0 10px;
    height: 60px;

    &__svg {
      width: 40px;
      height: 60px;
      fill: #48484c;
      transition: fill 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    }
  }

  &-name {
    margin: 0 0 0 20px;
  }

  &-bar {
    grid-area: bar;

    &__outer {
      background-color: #48484c;
      height: 6px;
      width: 100%;
      border-radius: 3px;
      overflow: hidden;
    }

    &__inner {
      background-color: #77cca4;
      width: 0;
      height: inherit;
      //transition: width 0.5s ease-in-out;
    }
  }

  &-value {
    grid-area: value;
    color: #77cca4;
  }

  &.is--hover {
    background-color: #2b2b2b;
    grid-template-columns: auto 1fr 80px;
    cursor: none;

    .skills--item-icon__svg {
      fill: #fff;
    }
  }

  &.is--active {
    opacity: 1;
  }
}

.name {
  &-enter {
    transform: translateX(-40px);
    opacity: 0;

    &-active {
      transform-origin: left center;
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.4s ease-out;
    }
  }

  &-leave {
    &-to {
      transform: translateX(-40px);
      opacity: 0;
    }
    &-active {
      transform-origin: left center;
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.4s ease-out;
    }
  }
}
</style>
