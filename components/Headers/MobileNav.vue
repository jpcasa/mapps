<template lang="html">
  <nav class="mobile-nav">
    <nuxt-link
      v-for="(item, i) in main_menu"
      :key="i"
      :to="item.url"
      :class="item.active ? 'active' : ''"
      @click.native="activate_item(i)">
      <i :class="item.icon" />
      <span>{{ item.title }}</span>
    </nuxt-link>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      main_menu: 'menus/mainMenu'
    })
  },
  methods: {
    ...mapActions({
      activate_item: 'menus/activate_item'
    })
  }
}
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
  a.active {
    @apply bg-blue;
    span,
    i {
      @apply text-white;
    }
  }
}
</style>
