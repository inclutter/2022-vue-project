<template>
  <v-container fluid>
    <v-card>
      {{ customValue }}
      <v-card-text>
        <app-text-field
          v-model="customValue"
          label="나이"
          :error-messages="['error 메시지']"
          placeholder="여기에 입력해주세요"
        />
        <label>
          이름
          <v-text-field
            v-model="customValue"
            class="mt-1"
            outlined
            dense
          />
        </label>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import AppTextField from "../../components/app/AppTextField";
export default {
  name: "Forms",
  components: {AppTextField},
  data: () => ({
    customValue: null,
  }),
  methods: {
  }
}
</script>

<style scoped>

</style>
