<template lang="html">
  <div>
    <p class="search-container">
      <i class="icon-search" />
      <input
        type="search"
        placeholder="Buscar Inmuebles">
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/mixins.scss';

.search-container {
  @apply flex w-full relative bg-grey-lighter;
  i {
    @apply flex-none absolute text-blue-darker;
    top: 0.4rem;
    left: 1rem;
  }
  input {
    @include transition(0.4s all);
    @apply flex-auto bg-grey-lighter text-sm px-4 py-2;
    text-indent: 1.5rem;
    &:focus {
      @apply bg-grey-light;
    }
  }
}
</style>
