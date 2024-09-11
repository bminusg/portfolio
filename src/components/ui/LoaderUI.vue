<template>
  <div class="loader flex flex--middle">
    <div class="loader--spinner"></div>
    <p class="small loader--label">Lädt...</p>
  </div>
</template>

<style lang="sass">
.loader
    flex-direction: column
    gap: var(--space-300)
    width: 100%
    height: 100%
    position: absolute

    &--spinner
        width: var(--space-450)
        height: var(--space-450)
        border: 3px solid var(--color-gray-200)
        border-top: 3px solid var(--color-gray-500)
        border-radius: 50%
        animation: preloader 1s linear infinite

        @keyframes preloader
            to
                transform: rotate(360deg)
</style>
