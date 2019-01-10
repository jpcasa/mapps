<template lang="html">
  <section>
    <h1>Tablero</h1>
  </section>
</template>

<script>
import authMixin from '~/mixins/auth/authenticated'

export default {
  layout: 'app',
  mixins: [authMixin]
}
</script>

<style lang="scss">
</style>
