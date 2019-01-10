<template lang="html">
  <div class="text-input">
    <label :for="name">
      {{ label }}
      <span v-if="sublabel != ''">
        - {{ sublabel }}
      </span>
    </label>
    <input
      v-validate="validate"
      :name="name"
      :placeholder="placeholder"
      v-model="inputVal"
      :type="type"
      :data-vv-as="name">
    <span
      v-show="errors.first(name)"
      class="error">
      {{ errors.first(name) }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => {
        return ''
      }
    },
    name: {
      type: String,
      default: () => {
        return ''
      }
    },
    label: {
      type: String,
      default: () => {
        return ''
      }
    },
    sublabel: {
      type: String,
      default: () => {
        return ''
      }
    },
    model: {
      type: String,
      default: () => {
        return ''
      }
    },
    placeholder: {
      type: String,
      default: () => {
        return ''
      }
    },
    validate: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return { inputVal: this.model }
  },
  watch: {
    inputVal(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/crm_variables.scss';

.text-input {
  label {
    @apply block text-blue-darker mb-2 text-sm;
    font-family: $gotham-medium;
    span {
      @apply text-grey-dark;
      font-family: $gotham-book;
    }
  }
  input {
    @apply w-full block bg-grey-light py-3 rounded-lg text-blue-darker text-sm;
    text-indent: 1.5rem;
  }
  .error {
    @apply text-xs text-red-light mt-1 inline-block;
  }
}
</style>
