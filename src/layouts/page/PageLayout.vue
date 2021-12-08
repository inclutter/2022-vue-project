<template>
  <v-app>
    <page-app-bar />
    <page-view />
  </v-app>
</template>

<script>
import PageAppBar from "./PageAppBar";
import PageView from "./PageView";
export default {
  name: "PageLayout",
  components: {
    PageAppBar,
    PageView
  }

}
</script>

<style scoped>

</style>
