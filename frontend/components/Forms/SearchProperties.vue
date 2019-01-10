<template lang="html">
  <div>
    <p :class="'search-container ' + search_class">
      <i class="icon-search" />
      <input
        type="search"
        placeholder="Buscar Inmuebles">
    </p>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: () => {
        return 'grey'
      }
    }
  },
  computed: {
    search_class() {
      if (this.color == 'grey') {
        return 'search-container-grey'
      } else {
        return 'search-container-white'
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/mixins.scss';

.search-container {
  @apply flex w-full relative;
  i {
    @apply flex-none absolute text-blue-darker;
    top: 0.4rem;
    left: 1rem;
  }
  input {
    @include transition(0.4s all);
    @apply flex-auto text-sm px-4 py-2;
    text-indent: 1.5rem;
  }
}
.search-container-grey {
  @apply bg-grey-lighter;
  input {
    @apply bg-grey-lighter;
    &:focus {
      @apply bg-grey-light;
    }
  }
}
.search-container-white {
  @apply bg-white;
  input {
    @apply bg-white;
  }
}
</style>
