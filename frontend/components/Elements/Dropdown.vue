<template lang="html">
  <div class="dropdown">
    <p>
      {{ title }}
      <i
        class="icon-x-circle"
        @click="close()" />
    </p>
    <nuxt-link
      v-for="(item, i) in items"
      :key="i"
      :to="item.url">
      <i :class="item.icon" />
      <span>{{ item.title }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => {
        return ''
      }
    },
    items: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  methods: {
    close() {
      this.$emit('close-dropdown')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/mixins.scss';
@import '~/assets/sass/helpers/crm_variables.scss';

.dropdown {
  @apply absolute bg-white z-30 flex flex-col w-48 rounded-lg shadow-md;
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
