<template lang="html">
  <form
    action="/"
    method="post"
    class="login-form"
    @submit="checkForm">

    <!-- ALERTS -->
    <Alerts
      v-show="valErrors.length > 0"
      :items="valErrors" />

    <!-- USERNAME -->
    <TextInput
      v-model="username"
      type="email"
      name="username"
      label="Email"
      sublabel="Ingresar Email"
      placeholder="Usuario"
      validate="email|required"
      class="mb-6" />

    <!-- PASSWORD -->
    <TextInput
      v-model="password"
      type="password"
      name="password"
      label="Contraseña"
      sublabel="Tu contraseña secreta"
      placeholder="Contraseña"
      validate="required|min:6"
      class="mb-6" />

    <!-- PASSWORD REPEAT -->
    <TextInput
      v-model="password_confirmation"
      type="password"
      name="password_confirmation"
      label="Repetir Contraseña"
      sublabel="Para estar seguros"
      placeholder="Contraseña"
      validate="required|min:6"
      class="mb-2" />

    <!-- SUBMIT BUTTON -->
    <ButtonWithIcon
      type="submit"
      title="Ingresar"
      icon="arrow-right"
      class="mt-4" />
  </form>
</template>

<script>
import Alerts from '~/components/Alerts/Alerts'
import TextInput from '~/components/Forms/Inputs/TextInput'
import ButtonWithIcon from '~/components/Elements/ButtonWithIcon'

import valErrorsMixin from '~/mixins/validation/valErrors'

export default {
  components: {
    Alerts,
    TextInput,
    ButtonWithIcon
  },
  mixins: [valErrorsMixin],
  data() {
    return {
      username: null,
      password: null,
      password_confirmation: null
    }
  },
  methods: {
    checkForm(e) {
      e.preventDefault()
      if (this.username && this.password && this.password_confirmation) {
        if (this.errors.items.length == 0) {
          if (this.password == this.password_confirmation) {
            // FORM SUBMMITED
            console.log('passed')
            this.$nuxt.$router.replace({
              path: `${process.env.authUrl.baseUrl}/login`
            })
          } else {
            this.addValidationError('Las contraseñas no coinciden.')
          }
        } else {
          this.addValidationError('Revisa los campos!')
        }
      } else {
        if (!this.username) this.addValidationError('Ingresa tu Usuario.')
        if (!this.password) this.addValidationError('Ingresa tu Contraseña.')
        if (!this.password_confirmation) {
          this.addValidationError('Ingresa tu Contraseña Nuevamente.')
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/crm_variables.scss';

.login-form {
  .recover-link {
    @apply text-sm text-blue;
    font-family: $gotham-medium;
    &:hover {
      @apply underline;
    }
  }
}
</style>
