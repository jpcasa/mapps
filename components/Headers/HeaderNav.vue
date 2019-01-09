<template lang="html">
  <nav class="header-nav">
    <div class="header-nav-container">
      <nuxt-link to="/app/tablero">Resumen</nuxt-link>
      <nuxt-link to="/app/tablero/reportes">Reportes</nuxt-link>
      <nuxt-link to="/app/tablero/noticias">Noticias</nuxt-link>
    </div>
    <div class="header-nav-container-desktop">
      <div class="search">
        <SearchProperties color="white" />
      </div>
      <nav>
        <nuxt-link to="/app/tablero">Resumen</nuxt-link>
        <nuxt-link to="/app/tablero/reportes">Reportes</nuxt-link>
        <nuxt-link to="/app/tablero/noticias">Noticias</nuxt-link>
      </nav>
      <div class="add">
        <button class="btn btn-blue">Agregar</button>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchProperties from '~/components/Forms/SearchProperties'

export default {
  components: {
    SearchProperties
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/crm_variables.scss';
@import '~/assets/sass/helpers/mixins.scss';

.header-nav {
  @apply w-full text-center;
  // MOBILE
  .header-nav-container {
    @apply w-full text-center flex bg-white;
    @include mq_lg {
      @apply hidden;
    }
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

  // DESKTOP
  .header-nav-container-desktop {
    @apply w-full text-center bg-white px-4 border-b border-grey-light items-center hidden;
    @include mq_lg {
      @apply flex;
    }
    .search,
    .add {
      @apply flex-none;
      min-width: 12rem;
      .btn {
        @apply py-2 text-xs;
      }
    }
    .add {
      @apply text-right;
    }
    nav {
      @apply flex-auto;
      a {
        @apply inline-block py-3 px-4 border-b-2 border-white text-sm text-grey-dark;
        &:hover {
          @apply border-blue text-blue-darker;
        }
      }
    }
  }
}
</style>
