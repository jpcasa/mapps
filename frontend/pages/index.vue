<template>
  <section class="container text-center">
    <h1>Home</h1>
    <nav class="w-full text-center">
      <nuxt-link
        class="inline-block p-2"
        to="/auth/login">Login</nuxt-link>
      <nuxt-link
        class="inline-block p-2"
        to="/auth/register">Register</nuxt-link>
    </nav>
  </section>
</template>

<script>
export default {
  middleware: 'anonymous'
}
</script>

<style>
</style>
