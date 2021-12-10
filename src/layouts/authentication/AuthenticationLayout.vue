<template>
  <v-app>
    <authentication-view />
  </v-app>
</template>

<script>
export default {
  name: "AuthenticationLayout",
  components: {
    AuthenticationView: () => import(
      /* webpackChunkName: "authentication-view" */
      './AuthenticationView'
    )
  }
}
</script>

<style scoped>

</style>
