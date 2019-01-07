export default {
  data() {
    return {
      valErrors: []
    }
  },
  methods: {
    addValidationError(errorMsg) {
      this.valErrors.push(errorMsg)
    }
  }
}
