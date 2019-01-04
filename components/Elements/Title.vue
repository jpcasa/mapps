<template lang="html">
  <div class="">
    <h1
      :style="fontSize"
      class="title">
      {{ title }}
    </h1>
    <h3
      v-if="subtitle != ''"
      class="subtitle">{{ subtitle }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: () => {
        return 2
      }
    },
    title: {
      type: String,
      default: () => {
        return 'Hello World'
      }
    },
    subtitle: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  computed: {
    fontSize() {
      return `font-size: ${this.size}rem;`
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/crm_variables.scss';

.title {
  @apply text-blue-darker;
}
.subtitle {
  font-family: $gotham-book;
  @apply text-grey-dark;
}
</style>
