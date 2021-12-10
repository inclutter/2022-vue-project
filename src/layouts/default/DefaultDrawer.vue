<template>
  <v-navigation-drawer
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
import DefaultDrawerHeader from "./DefaultDrawerHeader";
import DefaultList from "./DefaultList";
import DefaultComponentList from "./DefaultComponentList";
export default {
  name: "DefaultDrawer",
  components: {DefaultComponentList, DefaultList, DefaultDrawerHeader},
  data: () => ({
    gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/'},
      { title: 'Pages', icon: 'mdi-menu', items: [
        { title: 'Authentication', icon: 'mdi-login', items: [
          { title: 'SignIn', icon: 'mdi-login', to: '/authentication/sign-in'},
          { title: 'SignUp', icon: 'mdi-logout', to: '/authentication/sign-up'},
        ]},
        { title: 'ProductList', icon: 'mdi-reproduction', to: '/page/product-list'},
      ]},
      { title: 'Grid System', icon: 'mdi-grid-large', to: '/grid-system'},
      { title: 'Grid List Page', icon: 'mdi-grid-large', to: '/grid-list-page'},
      { title: 'Breakpoints', icon: 'mdi-format-bold', to: '/breakpoints'},
      { title: 'Typography', icon: 'mdi-format-text-variant-outline', to: '/typography'},
      { title: 'Tables', icon: 'mdi-table-large-plus', to: '/tables'},
      { title: 'Forms', icon: 'mdi-form-textbox', to: '/forms'},
      { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons'},
      { title: 'Icons', icon: 'mdi-robot-confused', to: '/icons'},
    ],
    sites: [
      { url: 'http://inclutter.com:8081', icon: 'mdi-face-man-outline', title: 'Jenkins'},
      { url: 'https://www.notion.so/inclutter', icon: 'mdi-view-dashboard', title: 'Notion'},
      { url: 'https://github.com/inclutter', icon: 'mdi-github', title: 'Github'},
      { url: 'https://inclutter.atlassian.net/jira', icon: 'mdi-xml', title: 'JIRA'},
    ],
    right: null,
  })
}
</script>

<style scoped>

</style>
