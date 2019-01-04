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
    <div class="">
      {{ isAuthenticated ? 'Si' : 'No' }}
    </div>
  </section>
</template>

<script>
import authenticatedMixin from '~/mixins/authenticated'

export default {
  mixins: [authenticatedMixin]
}
</script>

<style>
</style>
