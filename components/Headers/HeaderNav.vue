<template lang="html">
  <nav class="header-nav">
    <nuxt-link to="/app/tablero">Resumen</nuxt-link>
    <nuxt-link to="/app/tablero/reportes">Reportes</nuxt-link>
    <nuxt-link to="/app/tablero/noticias">Noticias</nuxt-link>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/crm_variables.scss';

.header-nav {
  @apply w-full text-center flex bg-white;
  a {
    @apply flex-1 text-xs text-grey-dark px-2 py-2 border-b-2 border-grey-lighter;
    &:hover {
      font-family: $gotham-medium;
      @apply border-blue text-blue-darker;
    }
  }
  a.nuxt-link-exact-active {
    font-family: $gotham-medium;
    @apply border-blue text-blue-darker;
  }
}
</style>
