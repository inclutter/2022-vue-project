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
import DefaultComponentListGroup from './DefaultComponentListGroup'
import DefaultComponentListItem from "./DefaultComponentListItem";
export default {
  name: "DefaultComponentListGroup",
  components: {DefaultComponentListItem},
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
