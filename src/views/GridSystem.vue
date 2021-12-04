<template>
  <v-container
    fluid
  >
    <v-card class="pa-3">
      <v-row>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>

      <v-row
        :style="{height: '120px'}"
        class="red"
        align="center"
      >
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
      <v-row
        :style="{height: '120px'}"
        class="yellow"
      >
        <v-col
          align-self="end"
        >
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      class="mt-5 pa-3"
      outlined
    >
      <v-row justify="space-around">
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "GridSystem"
}
</script>

<style scoped>

</style>
