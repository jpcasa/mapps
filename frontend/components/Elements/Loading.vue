<template lang="html">
  <section class="loading">
    <div class="loading-container">
      <p>
        <img
          src="/gif/logo.gif"
          alt="Mapps360 Logo Gif">
        <span>{{ msg }}</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: () => {
        return 'Mejorando tu vida...'
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/crm_variables.scss';

.loading {
  @apply fixed z-50 w-screen h-screen pin-t pin-l bg-white;
  .loading-container {
    @apply flex w-full h-full items-center justify-center;
    p {
      @apply text-center;
      span {
        @apply block text-blue-darker mt-2;
        font-family: $gotham-medium;
      }
    }
  }
}
</style>
