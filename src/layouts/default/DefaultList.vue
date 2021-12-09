<template>
  <v-list
    dense
    nav
  >
    <v-list-item
      v-for="site in sites"
      :key="site.title"
      link
    >
      <v-list-item-icon>
        <v-icon>{{ site.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <a :href="site.url">{{ site.title }}</a>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "DefaultList",
  props: {
    sites: {
      type: Array,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
