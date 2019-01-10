export default function({ store, redirect }) {
  if (!store.getters['auth/isAuthenticated']) {
    return redirect(
      `${process.env.authUrl.baseUrl}/${process.env.authUrl.loginUrl}`
    )
  }
}
