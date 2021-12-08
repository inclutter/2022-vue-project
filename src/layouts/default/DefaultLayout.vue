<template>
  <v-app>
    <default-app-bar @drawer="drawer = !drawer" />
    <default-drawer v-model="drawer" />
    <default-view />
  </v-app>
</template>

<script>
import DefaultDrawer from "./DefaultDrawer";
import DefaultAppBar from "./DefaultAppBar";
import DefaultView from "./DefaultView";
export default {
  name: "DefaultLayout",
  components: {
    DefaultView,
    DefaultDrawer,
    DefaultAppBar,
  },
  data: () => ({
    drawer: false,

  }),
}
</script>

<style scoped>

</style>
