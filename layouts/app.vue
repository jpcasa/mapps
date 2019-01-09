<template lang="html">
  <main>
    <!-- MAIN HEADER -->
    <header id="app-header">

      <!-- TOP BAR -->
      <TopBar />
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


  </main>
</template>

<script>
import TopBar from '~/components/Headers/TopBar'
import HeaderNav from '~/components/Headers/HeaderNav'
import MobileNav from '~/components/Headers/MobileNav'
import SearchProperties from '~/components/Forms/SearchProperties'

export default {
  components: {
    TopBar,
    HeaderNav,
    MobileNav,
    SearchProperties
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/mixins.scss';

#app-header {
  @apply fixed pin-t pin-l w-full z-10;
}
#main-content {
  @apply w-full block mb-12 bg-grey-light flex py-4;
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
</style>
