<template lang="html">
  <div
    :class="'alert ' + type"
    role="alert">
    <p class="alert-title">{{ title }}</p>
    <p class="alert-msg">{{ msg }}</p>
    <i
      class="alert-close icon-x"
      @click="closeAlert()" />
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
    title: {
      type: String,
      default: () => {
        return ''
      }
    },
    msg: {
      type: String,
      default: () => {
        return ''
      }
    },
    index: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  methods: {
    closeAlert() {
      this.$emit('closealert', this.index)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/crm_variables.scss';
@import '~/assets/sass/helpers/mixins.scss';

.alert {
  @apply border-l-4 px-4 py-3 relative;
  .alert-title {
    @apply text-sm mb-1;
    font-family: $gotham-medium;
  }
  .alert-msg {
    @apply text-xs;
  }
  .alert-close {
    @apply absolute cursor-pointer rounded-full p-1;
    top: 0.3rem;
    right: 0.3rem;
  }
}
.alert.error {
  @apply border-red text-red-dark bg-red-lightest;
  .alert-close {
    @include transition(0.3s all);
    &:hover {
      @apply bg-red-lighter;
    }
  }
}
.alert.warning {
  @apply border-orange text-orange-dark bg-orange-lightest;
}
.alert.success {
  @apply border-green text-green-dark bg-green-lightest;
}
</style>
