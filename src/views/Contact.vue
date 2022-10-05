<template>
  <section id="contact" class="contact flex flex--center">
    <div class="container">
      <h2>{{ $t("contact.title") }}</h2>
      <div class="grid contact--grid" data-grid="half">
        <div class="contact--txt">
          <p>{{ $t("contact.text") }}</p>

          <div class="contact--links">
            <h4>Email</h4>
            <ul class="contact--links-list">
              <li class="contact--links-list__item flex">
                <i class="icon">
                  <svg
                    class="icon--mail"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 15"
                  >
                    <path
                      d="M13.95,.09L.37,7.93c-.53,.3-.46,1.04,.06,1.27l3.11,1.31L11.96,3.08c.16-.14,.39,.08,.25,.24L5.16,11.93v2.36c0,.69,.84,.96,1.25,.46l1.86-2.26,3.65,1.53c.42,.18,.89-.08,.97-.53L14.99,.82c.1-.59-.54-1.02-1.04-.73Z"
                    />
                  </svg>
                </i>
                <a :href="'mailto:' + mail">benny.gebauer [at] outlook.de</a>
              </li>
            </ul>
          </div>

          <div class="contact--links">
            <h4>{{ $t("contact.followme") }}</h4>
            <ul class="contact--links-list">
              <li class="contact--links-list__item flex">
                <i class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 14.63"
                  >
                    <path
                      class="cls-1"
                      d="M5.02,11.78c0,.06-.07,.11-.16,.11-.1,0-.17-.04-.17-.11,0-.06,.07-.11,.16-.11,.09,0,.17,.04,.17,.11Zm-.94-.14c-.02,.06,.04,.13,.13,.15,.08,.03,.17,0,.19-.06s-.04-.13-.13-.16c-.08-.02-.17,0-.19,.07h0Zm1.34-.05c-.09,.02-.15,.08-.14,.15,0,.06,.09,.1,.18,.08,.09-.02,.15-.08,.14-.14,0-.06-.09-.1-.18-.09ZM7.4,0C3.21,0,0,3.18,0,7.38c0,3.35,2.11,6.22,5.13,7.23,.39,.07,.52-.17,.52-.37s0-1.22,0-1.86c0,0-2.12,.45-2.56-.9,0,0-.34-.88-.84-1.11,0,0-.69-.47,.05-.47,0,0,.75,.06,1.17,.78,.66,1.17,1.77,.83,2.2,.63,.07-.48,.27-.82,.48-1.02-1.69-.19-3.4-.43-3.4-3.34,0-.83,.23-1.25,.71-1.78-.08-.2-.34-1.01,.08-2.05,.63-.2,2.09,.82,2.09,.82,.6-.17,1.26-.26,1.9-.26s1.29,.09,1.9,.26c0,0,1.45-1.02,2.09-.82,.41,1.05,.16,1.86,.08,2.05,.48,.54,.78,.95,.78,1.78,0,2.92-1.78,3.15-3.47,3.34,.28,.24,.51,.69,.51,1.4,0,1.02,0,2.28,0,2.53,0,.2,.14,.44,.52,.37,3.02-1,5.07-3.87,5.07-7.23C15,3.18,11.6,0,7.4,0ZM2.94,10.43s-.03,.1,.02,.16c.05,.05,.12,.07,.16,.03,.04-.03,.03-.1-.02-.16-.05-.05-.12-.07-.16-.03Zm-.33-.24s0,.09,.07,.12c.05,.03,.11,.02,.13-.02,.02-.04,0-.09-.07-.12-.06-.02-.11,0-.13,.02Zm.98,1.08s-.03,.13,.04,.19c.07,.07,.16,.08,.2,.03,.04-.04,.02-.13-.04-.19-.07-.07-.16-.08-.2-.03Zm-.34-.44s-.05,.11,0,.18,.13,.1,.17,.07c.05-.04,.05-.12,0-.19-.04-.07-.12-.1-.17-.06h0Z"
                    />
                  </svg>
                </i>
                <a href="https://github.com/bminusg/" target="_blank" rel="">
                  <span>GitHub</span>
                </a>
              </li>
              <li class="contact--links-list__item flex">
                <i class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 17.63"
                  >
                    <path
                      d="M1.37,3.48c-.15,0-.28,.05-.35,.16-.07,.11-.06,.25,.01,.39l1.72,2.98s0,0,0,.01L.05,11.79c-.07,.14-.07,.28,0,.39,.06,.1,.18,.17,.33,.17H2.93c.38,0,.56-.26,.69-.49,0,0,2.64-4.67,2.74-4.85-.01-.02-1.75-3.05-1.75-3.05-.13-.23-.32-.48-.71-.48H1.37Z"
                    />
                    <path
                      d="M12.05,0c-.38,0-.54,.24-.68,.48,0,0-5.48,9.71-5.66,10.03,0,.02,3.61,6.63,3.61,6.63,.13,.23,.32,.48,.71,.48h2.54c.15,0,.27-.06,.34-.16,.07-.11,.07-.25,0-.39l-3.58-6.55s0-.01,0-.02L14.95,.55c.07-.14,.07-.28,0-.39-.06-.1-.18-.16-.34-.16h-2.57Z"
                    />
                  </svg>
                </i>
                <a
                  class="flex"
                  href="https://www.xing.com/profile/Benjamin_Gebauer6/"
                  target="_blank"
                >
                  XING
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="contact--img-wrapper flex flex--center">
          <div class="contact--img" :class="{ 'is--active': isVisible }">
            <picture>
              <source srcset="@/assets/me@2x.webp" type="image/webp" />
              <source srcset="@/assets/me@2x.png" type="image/png" />
              <img
                src="@/assets/me@2x.webp"
                width="380"
                height="494"
                alt="Portrait Benjamin Gebauer"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "Contact",
  props: ["isVisible"],
  data() {
    return {
      mail: "",
    };
  },
  watch: {
    isVisible(value: boolean) {
      if (value) this.mail = "benny.gebauer@bminusg.de";
      else this.mail = "";
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/less/utils/variables.less";

.contact {
  padding: @cluster 0;

  &--grid {
    margin: @cluster 0;
  }

  &--txt {
    grid-area: col-1;

    @media screen and (max-width: @breakpoint-m) {
      grid-area: col-2;
    }
  }

  &--img {
    flex: 0 1 380px;
    opacity: 0;
    transform: matrix(0.9, 0, 0, 0.9, 0, 80);
    transition: @transition-slide-in;

    &.is--active {
      opacity: 1;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }

    &-wrapper {
      grid-area: col-2;

      @media screen and (max-width: @breakpoint-m) {
        grid-area: col-1;
      }
    }
  }

  &--links {
    &-list {
      &__item {
        margin: @cluster / 4 0;
        .icon {
          margin: 0 @cluster / 8 0 0;
          fill: @color-grey-dark;
        }
      }
    }
  }
}
</style>
