<template>
  <v-app>
    <default-app-bar />
    <default-drawer />
    <default-view />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  components: {
    DefaultView: () => import(
      /* webpackChunkName: "default-view" */
      './DefaultView'
    ),
    DefaultDrawer: () => import(
      /* webpackChunkName: "default-drawer" */
      './DefaultDrawer'
    ),
    DefaultAppBar: () => import(
      /* webpackChunkName: "default-app-bar" */
      './DefaultAppBar'
    ),
  },
}
</script>

<style scoped>

</style>
