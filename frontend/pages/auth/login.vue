<template lang="html">
  <section class="page-login">
    <LoginForm class="flex-auto" />
    <p class="page-login-message">¿No tienes cuenta?
      <nuxt-link to="/auth/register">Registrate aquí</nuxt-link>
    </p>
  </section>
</template>

<script>
import LoginForm from '~/components/Forms/LoginForm.vue'

export default {
  layout: 'auth',
  middleware: 'anonymous',
  components: {
    LoginForm
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
