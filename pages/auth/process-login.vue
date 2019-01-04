<template lang="html">
  <div class="flex w-screen h-screen items-center justify-center">
    <p>Logging In...</p>
  </div>
</template>

<script>
export default {
  created() {
    this.interval = setInterval(() => {
      this.$nuxt.$router.replace({ path: '/app/inmuebles' })
    }, 2000)
  }
}
</script>

<style lang="scss">
</style>
