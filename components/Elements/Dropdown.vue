<template lang="html">
  <div class="dropdown">
    <p>
      Perfil
      <i class="icon-x-circle" />
    </p>
    <nuxt-link to="/">
      <i class="icon-home" />
      <span>Algo</span>
    </nuxt-link>
    <nuxt-link to="/">
      <i class="icon-home" />
      <span>Algo</span>
    </nuxt-link>
    <nuxt-link to="/">
      <i class="icon-home" />
      <span>Algo</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/mixins.scss';
@import '~/assets/sass/helpers/crm_variables.scss';

.dropdown {
  @apply absolute bg-white z-30 flex flex-col w-32 rounded-lg shadow-md;
  p {
    @apply text-white text-center text-sm py-2 border-b bg-blue-darker rounded-t-lg cursor-default relative;
    font-family: $gotham-medium;
    i {
      @apply absolute text-white cursor-pointer;
      right: 0.25rem;
    }
  }
  a {
    @apply text-grey-dark px-4 py-2;
    &:hover {
      @apply bg-grey-light;
      i,
      span {
        @apply text-grey-dark;
      }
    }
    i,
    span {
      @apply text-grey-dark inline-block;
    }
    span {
      @apply text-sm;
    }
    i {
      @apply relative;
      top: 1px;
    }
    &:last-of-type {
      @apply rounded-b-lg;
    }
  }
}
</style>
