<template lang="html">
  <div class="alerts z-50">
    <div class="flex flex-col">
      <Alert
        v-for="(item, i) in items"
        :key="i"
        :msg="item"
        :index="i"
        title="Ya casi!"
        type="error"
        class="flex-1 mt-4 mx-4"
        @closealert="closeAlertChild" />
    </div>
  </div>
</template>

<script>
import Alert from '~/components/Alerts/Alert'

export default {
  components: {
    Alert
  },
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    closeAlertChild(index) {
      this.items.splice(index, 1)
      console.log(this.items)
    }
  }
}
</script>

<style lang="scss">
.alerts {
  @apply fixed w-full pin-t pin-l;
}
</style>
