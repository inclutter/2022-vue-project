<template>
  <v-list-group :prepend-icon="item.icon">
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </template>
    <template v-for="(child, index) in item.items">
      <default-component-list-group
        v-if="child.items"
        :key="`sub-group-${index}`"
        :item="child"
      />
      <default-component-list-item
        v-else
        :key="
          `child-${index}`"
        :item="child"
      />
    </template>
  </v-list-group>
</template>

<script>
export default {
  name: "DefaultComponentListGroup",
  components: {
    DefaultComponentListItem: () => import(
      /* webpackChunkName: "default-component-list-group" */
      './DefaultComponentListGroup'
    )
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
