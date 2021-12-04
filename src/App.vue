<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
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

    <v-main>
      <v-container
        fluid
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/'},
      { title: 'Grid System', icon: 'mdi-view-dashboard', to: '/grid-system'},
      { title: 'Grid List Page', icon: 'mdi-view-dashboard', to: '/grid-list-page'},
    ],
    sites: [
      { url: 'http://inclutter.com:8081', icon: 'mdi-view-dashboard', title: 'Jenkins'},
      { url: 'https://www.notion.so/inclutter', icon: 'mdi-view-dashboard', title: 'Notion'},
    ],
    right: null,
  }),
};
</script>
