<template lang="html">
  <main>

    <!-- LOADING -->
    <Loading v-if="!loaded" />

    <!-- MAIN HEADER -->
    <header id="app-header">

      <!-- TOP BAR -->
      <TopBar
        id="top-bar"
        @open-sidebar="sidebar = true" />

      <!-- SEARCH BAR -->
      <SearchProperties id="search-properties" />
      <!-- HEADER NAV -->
      <HeaderNav />

    </header>
    <!-- END MAIN HEADER -->

    <!-- MAIN CONTENT -->
    <section id="main-content">
      <div class="container mx-auto px-4">
        <nuxt />
      </div>
    </section>
    <!-- END MAIN CONTENT -->

    <!-- MAIN MOBILE NAVIGATION -->
    <MobileNav id="mobile-nav" />

    <transition name="fade">
      <MenuSidebar
        v-if="sidebar"
        id="menu-sidebar"
        @close-sidebar="sidebar = false" />
    </transition>

  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import TopBar from '~/components/Headers/TopBar'
import Loading from '~/components/Elements/Loading'
import HeaderNav from '~/components/Headers/HeaderNav'
import MobileNav from '~/components/Headers/MobileNav'
import MenuSidebar from '~/components/Sidebars/MenuSidebar'
import SearchProperties from '~/components/Forms/SearchProperties'

export default {
  components: {
    TopBar,
    Loading,
    HeaderNav,
    MobileNav,
    MenuSidebar,
    SearchProperties
  },
  data() {
    return {
      sidebar: false,
      loaded: false
    }
  },
  computed: {
    ...mapState({
      app_entry_url: state => state.menus.app_entry_url
    })
  },
  mounted() {
    const path = this.check_url()
    if (path.length) {
      this.check_url_entry(path)
    }
    this.loaded = true
  },
  methods: {
    check_url() {
      let path = $nuxt.$route.path.split('/')
      path.shift()
      if (
        path[0] == this.app_entry_url[0] &&
        path[1] == this.app_entry_url[1]
      ) {
        return []
      }
      return path
    },
    ...mapActions({
      check_url_entry: 'menus/check_url_entry'
    })
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/mixins.scss';

#app-header {
  @apply fixed pin-t pin-l w-full z-10;
}
#main-content {
  @apply w-full block mb-8 bg-grey-lighter flex pt-4 pb-6;
  margin-top: 6.5rem;
  @include mq_lg {
    margin-top: 5.4rem;
    margin-bottom: 0;
  }
  div {
    @apply flex-1;
  }
}
#mobile-nav {
  @apply fixed z-10 pin-b pin-l;
}
#search-properties,
#mobile-nav {
  @include mq_lg {
    @apply hidden;
  }
}
#menu-sidebar {
  @apply fixed h-screen w-screen z-20 pin-t pin-l;
}

.slide-enter-active {
  animation: slide-in 0.4s;
}

.slide-leave-active {
  animation: slide-in 0.4s reverse;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
