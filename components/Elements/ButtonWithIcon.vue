<template lang="html">
  <button
    :type="type"
    :class="'btn btn-' + color">
    {{ title }}
    <span :class="'icon-' + icon" />
  </button>
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
    icon: {
      type: String,
      default: () => {
        return ''
      }
    },
    color: {
      type: String,
      default: () => {
        return 'blue'
      }
    }
  }
}
</script>

<style lang="scss">
</style>
