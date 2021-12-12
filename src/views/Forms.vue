<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Form Validation
      </v-card-title>
      <v-card-text>
        <validation-observer>
          <v-form>
            <validation-provider
              v-slot="{ errors }"
              name="Name@@@"
              rules="max:10"
            >
              <v-text-field
                v-model="name"
                label="Name"
                :counter="10"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider>
              <v-text-field label="PhoneNumber" />
            </validation-provider>
            <validation-provider>
              <v-text-field label="E-Mail" />
            </validation-provider>
            <validation-provider>
              <v-select
                label="Select"
                :itmes="items"
              />
            </validation-provider>
            <validation-provider>
              <v-checkbox
                label="Checkbox"
                value="1"
              />
            </validation-provider>
            <v-btn
              type="submit"
              color="primary"
              class="mr-4"
            >
              submit
            </v-btn>
            <v-btn>
              clear
            </v-btn>
          </v-form>
        </validation-observer>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from  'vee-validate'
import { max } from 'vee-validate/dist/rules.js'
extend('max', {
  ...max,
  message: `{_field_}필드는 {length}자를 초과할 수 없습니다.`
})
export default {
  name: "Forms",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    name: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
  }),
}
</script>

<style scoped>

</style>
