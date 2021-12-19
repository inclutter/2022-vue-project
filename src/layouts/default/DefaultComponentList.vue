<template>
  <v-list
    expand
    dense
    nav
  >
    <template
      v-for="(item, index) in items"
    >
      <default-component-list-group
        v-if="item.items"
        :key="`group-${index}`"
        :item="item"
      />
      <default-component-list-item
        v-else
        :key="`item-${index}`"
        :item="item"
      />
    </template>
  </v-list>
</template>

<script>
import DefaultComponentListItem from "./DefaultComponentListItem";
import DefaultComponentListGroup from "./DefaultComponentListGroup";
export default {
  name: "DefaultComponentList",
  components: {DefaultComponentListItem, DefaultComponentListGroup},
  props: {
    items: {
      type: Array,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
