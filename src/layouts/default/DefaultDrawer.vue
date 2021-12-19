<template>
  <v-navigation-drawer
    v-model="drawer"
    v-bind="$attrs"
    app
    dark
  >
    <template
      v-slot:img="props"
    >
      <v-img
        :src="require('@/assets/sidebar2.jpg')"
        :gradient="gradient"
        v-bind="props"
      />
    </template>
    <default-drawer-header />
    <v-divider />
    <default-list :sites="sites" />
    <v-divider />
    <default-component-list :items="items" />
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
import DefaultDrawerHeader from "./DefaultDrawerHeader";
import DefaultList from "./DefaultList";
import DefaultComponentList from "./DefaultComponentList";
export default {
  name: "DefaultDrawer",
  components: {DefaultComponentList, DefaultList, DefaultDrawerHeader},
  computed: {
    ...mapState('app', {
      gradient: 'gradient',
      items: 'items',
      sites: 'sites'
    }),
    drawer: {
      get () {
        return this.$store.getters['app/getDrawer']
      },
      set (value) {
        return this.$store.dispatch('app/toggleDrawer', value)
      }
    }
  }
}
</script>

<style scoped>

</style>
