<template>
  <v-container>
    <router-link to="/">
      <v-img
        :src="require('@/assets/web_logo.png')"
        width="100"
        height="60"
        class="mx-auto"
        :gradient="gradient"
      />
    </router-link>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Minwoo's Test Page
        </v-list-item-title>
        <v-list-item-subtitle>
          Hi~
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-container>
</template>

<script>
export default {
  name: "DefaultDrawerHeader",
}
</script>

<style scoped>

</style>
