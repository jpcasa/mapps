<template lang="html">
  <div class="">
    <Loading msg="Cerrando Sesión..." />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Loading from '~/components/Elements/Loading'

export default {
  components: {
    Loading
  },
  mounted() {
    this.set_user()
    this.$nuxt.$router.replace({
      path: '/auth/login'
    })
  },
  methods: {
    ...mapActions({
      set_user: 'auth/set_user'
    })
  }
}
</script>

<style lang="scss">
</style>
