<template lang="html">
  <main>
    <!-- MAIN HEADER -->
    <header id="app-header">

      <!-- TOP BAR -->
      <TopBar />
      <!-- SEARCH BAR -->
      <SearchProperties />
      <!-- HEADER NAV -->
      <HeaderNav />

    </header>
    <!-- END MAIN HEADER -->

    <!-- MAIN CONTENT -->
    <section id="main-content">
      <nuxt />
    </section>
    <!-- END MAIN CONTENT -->

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
#app-header {
  @apply fixed pin-t pin-l w-full z-10;
}
#main-content {
  @apply w-full block mb-12;
  margin-top: 6.5rem;
}
#mobile-nav {
  @apply fixed z-10 pin-b pin-l;
}
</style>
