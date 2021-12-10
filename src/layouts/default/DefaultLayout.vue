<template>
  <v-app>
    <default-app-bar @drawer="drawer = !drawer" />
    <default-drawer v-model="drawer" />
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
  data: () => ({
    drawer: false,

  }),
}
</script>

<style scoped>

</style>
