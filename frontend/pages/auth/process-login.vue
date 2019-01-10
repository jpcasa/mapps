<template lang="html">
  <div class="flex w-screen h-screen items-center justify-center">
    <p>Logging In...</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted() {
    this.set_user({
      username: 'hola@jpcasabianca.com',
      first_name: 'Juan Pablo',
      last_name: 'Casabianca',
      email: 'hola@jpcasabianca.com',
      avatar: '/1x/user.png',
      groups: {
        name: 'agent'
      }
    })
    this.interval = setInterval(() => {
      this.$nuxt.$router.replace({
        path: process.env.appUrl.baseUrl
      })
    }, 2000)
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
