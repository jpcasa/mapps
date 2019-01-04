import { mapGetters } from 'vuex'

export default {
  middleware: 'authenticated',
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated'
    })
  }
}
