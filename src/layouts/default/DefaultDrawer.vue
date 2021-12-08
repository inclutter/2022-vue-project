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

    <v-divider />

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

    <v-divider />

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        active-class="primary"
        class="py-1"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "DefaultDrawer",
  data: () => ({
    gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/'},
      { title: 'Grid System', icon: 'mdi-grid-large', to: '/grid-system'},
      { title: 'Grid List Page', icon: 'mdi-grid-large', to: '/grid-list-page'},
      { title: 'Breakpoints', icon: 'mdi-format-bold', to: '/breakpoints'},
      { title: 'Typography', icon: 'mdi-format-text-variant-outline', to: '/typography'},
      { title: 'Tables', icon: 'mdi-table-large-plus', to: '/tables'},
      { title: 'Forms', icon: 'mdi-form-textbox', to: '/forms'},
      { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons'},
      { title: 'Icons', icon: 'mdi-robot-confused', to: '/icons'},
      { title: 'SignIn', icon: 'mdi-login', to: '/authentication/sign-in'},
      { title: 'SignUp', icon: 'mdi-logout', to: '/authentication/sign-up'},
      { title: 'ProductList', icon: 'mdi-reproduction', to: '/page/product-list'},
    ],
    sites: [
      { url: 'http://inclutter.com:8081', icon: 'mdi-face-man-outline', title: 'Jenkins'},
      { url: 'https://www.notion.so/inclutter', icon: 'mdi-view-dashboard', title: 'Notion'},
      { url: 'https://github.com/inclutter', icon: 'mdi-github', title: 'Github'},
      { url: 'https://inclutter.atlassian.net/jira', icon: 'mdi-github', title: 'JIRA'},
    ],
    right: null,
  })
}
</script>

<style scoped>

</style>
