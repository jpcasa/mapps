<template lang="html">
  <nav class="mobile-nav">
    <nuxt-link to="/app/tablero">
      <i class="icon-home" />
      <span>Tablero</span>
    </nuxt-link>
    <nuxt-link to="/app/inmuebles">
      <i class="icon-home" />
      <span>Inmuebles</span>
    </nuxt-link>
    <nuxt-link to="/app/contactos">
      <i class="icon-home" />
      <span>Contactos</span>
    </nuxt-link>
    <nuxt-link to="/app/archivos">
      <i class="icon-home" />
      <span>Archivos</span>
    </nuxt-link>
    <nuxt-link to="/app/emails">
      <i class="icon-home" />
      <span>Emails</span>
    </nuxt-link>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/crm_variables.scss';

.mobile-nav {
  @apply flex w-full;
  a {
    @apply text-xs flex-1 text-center py-1 bg-blue-darker;
    &:hover {
      @apply bg-blue;
      span,
      i {
        @apply text-white;
      }
    }
    i,
    span {
      @apply block text-blue-lighter;
    }
    i {
      @apply mb-1 text-sm;
    }
    span {
      font-family: $gotham-book;
      font-weight: normal;
      font-size: 0.7rem;
    }
  }
}
</style>
