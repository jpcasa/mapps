<template lang="html">
  <form
    action="/"
    method="post"
    class="recover-password-form"
    @submit="uploadForm">

    <div
      v-if="recovered"
      class="recovered">
      <p>Te enviamos un email con instrucciones para recuperar tu contraseña.</p>
      <nuxt-link
        class="recover-link"
        to="/auth/login">Ingresar</nuxt-link>
    </div>

    <div v-if="!recovered">
      <!-- ALERTS -->
      <Alerts
        v-show="valErrors.length > 0"
        :items="valErrors" />

      <!-- USERNAME -->
      <TextInput
        v-model="username"
        type="email"
        name="username"
        label="Recuperar Contraseña"
        sublabel="Ingresa tu email y te enviaremos un link de recuperación a tu email."
        placeholder="Ingresa tu email"
        validate="email|required"
        class="mb-6" />

      <!-- SUBMIT BUTTON -->
      <ButtonWithIcon
        type="submit"
        title="Ingresar"
        icon="arrow-right"
        class="mt-4" />
    </div>

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
      recovered: false
    }
  },
  methods: {
    uploadForm(e) {
      e.preventDefault()
      if (this.username) {
        if (this.errors.items.length == 0) {
          this.recovered = true
        } else {
          this.addValidationError('Revisa los campos!')
        }
      } else {
        if (!this.username) this.addValidationError('Ingresa tu Usuario.')
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/crm_variables.scss';

.recover-password-form {
  .recover-link {
    @apply text-sm text-blue;
    font-family: $gotham-medium;
    &:hover {
      @apply underline;
    }
  }
  .recovered {
    p {
      @apply text-sm;
    }
    a {
      @apply mt-2 inline-block;
    }
  }
}
</style>
