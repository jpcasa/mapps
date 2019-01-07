<template lang="html">
  <section class="page-login">
    <RecoverPasswordForm class="flex-auto" />
    <p class="page-login-message">¿No tienes contraseña?
      <nuxt-link to="/auth/login">Ingresa aquí</nuxt-link>
    </p>
  </section>
</template>

<script>
import RecoverPasswordForm from '~/components/Forms/RecoverPasswordForm.vue'

export default {
  layout: 'auth',
  middleware: 'anonymous',
  components: {
    RecoverPasswordForm
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/crm_variables.scss';

.page-login {
  @apply flex flex-col;
  .page-login-message {
    @apply text-sm;
    a {
      @apply text-blue;
      font-family: $gotham-medium;
      &:hover {
        @apply underline;
      }
    }
  }
}
</style>
