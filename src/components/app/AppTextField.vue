<template>
  <label>
    {{ label }}
    <v-text-field
      :value="value"
      class="mt-1"
      :outlined="outlined"
      :dense="dense"
      v-bind="$attrs"
      @input="value => $emit('input', value)"
      v-on="$listeners"
    />
  </label>
</template>

<script>
export default {
  name: "AppTextField",
  inheritAttrs: false,
  props: {
    dense: {
      type: Boolean,
      default: true
    },
    outlined: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
