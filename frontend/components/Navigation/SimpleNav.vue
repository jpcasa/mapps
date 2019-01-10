<template lang="html">
  <nav class="simple-nav">
    <span
      v-for="(item, i) in items"
      :key="i">
      <nuxt-link
        :to="item.url"
        class="simple-nav-item">
        {{ item.title }}
      </nuxt-link>
      <span
        v-if="showSlash(i)"
        class="simple-nav-slash">/
      </span>
    </span>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    showSlash(index) {
      if (index < this.items.length - 1) return true
      return false
    }
  }
}
</script>

<style lang="scss">
.simple-nav {
  .simple-nav-item {
    @apply text-grey-dark;
    &:hover {
      @apply text-blue;
    }
  }
  .simple-nav-item.nuxt-link-exact-active {
    @apply text-blue;
  }
  .simple-nav-slash {
    @apply text-grey-dark;
  }
}
</style>
