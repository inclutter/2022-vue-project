<template>
  <v-container fluid>
    <v-card class="pa-3">
      <v-row dense>
        <v-col
          v-for="j in justify"
          :key="j"
          :justify="j"
          cols="auto"
        >
          <v-icon large>
            {{ j }}
          </v-icon>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Icons",
  data: () => ({
    justify: [
      'mdi-robot-confused',
      'mdi-gesture-tap-button',
      'mdi-form-textbox',
      'mdi-table-large-plus',
      'mdi-format-text-variant-outline',
      'mdi-format-bold',
      'mdi-grid-large',
      'mdi-github',
      'mdi-face-man-outline',
    ],
  })
}
</script>

<style scoped>

</style>
