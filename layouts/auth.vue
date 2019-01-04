<template lang="html">
  <section class="section-auth">
    <div class="section-auth-container">
      <img
        class="w-48 mb-8"
        src="/1x/logo.png"
        alt="Logo Mapps360">
      <Title
        class="mb-4"
        title="Bienvenido,"
        subtitle="Ingresa para continuar" />
      <SimpleNav
        :items="menu"
        class="mb-8" />
      <nuxt class="flex-auto" />
    </div>
  </section>
</template>

<script>
import Title from '~/components/Elements/Title'
import SimpleNav from '~/components/Navigation/SimpleNav'

export default {
  components: {
    Title,
    SimpleNav
  },
  data() {
    return {
      menu: [
        { title: 'Ingresar', url: '/auth/login' },
        { title: 'Registrarse', url: '/auth/register' }
      ]
    }
  }
}
</script>

<style lang="scss">
.section-auth {
  @apply w-full h-screen flex;
  .section-auth-container {
    @apply flex-1 w-full h-full px-8 py-12 flex flex-col;
  }
}
</style>
