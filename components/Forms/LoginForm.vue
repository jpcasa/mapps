<template lang="html">
  <form
    action="/"
    method="post"
    class="login-form"
    @submit="uploadForm">

    <!-- ALERTS -->
    <Alerts
      v-show="valErrors.length > 0"
      :items="valErrors" />

    <!-- USERNAME -->
    <TextInput
      v-model="username"
      type="text"
      name="username"
      label="Email"
      sublabel="Ingresar Email"
      placeholder="Email"
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
      class="mb-2" />

    <!-- RECOVERY LINK -->
    <div class="block text-right">
      <nuxt-link
        to="/auth/recover-password"
        class="recover-link">
        Olvidé mi contraseña
      </nuxt-link>
    </div>

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
      password: null
    }
  },
  methods: {
    uploadForm(e) {
      e.preventDefault()
      if (this.username && this.password) {
        if (this.errors.items.length == 0) {
          //
          // HANDLE FORM SUBMISSION
          //
          this.$nuxt.$router.replace({
            path: `${process.env.authUrl.baseUrl}/process-login`
          })
        } else {
          this.addValidationError('Revisa los campos!')
        }
      } else {
        if (!this.username) this.addValidationError('Ingresa tu Usuario.')
        if (!this.password) this.addValidationError('Ingresa tu Contraseña.')
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
