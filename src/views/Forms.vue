<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Form Validation
      </v-card-title>
      <v-card-text>
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
        >
          <v-form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name@@@"
              rules="required|max:10"
            >
              <v-text-field
                v-model="name"
                label="Name"
                :counter="10"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="PhoneNumber"
              :rules="{
                required: true,
                numeric: true,
                digits: 11
              }"
            >
              <v-text-field
                v-model="phoneNumber"
                label="PhoneNumber"
                :counter="11"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="E-Mail"
              :rules="{
                required: true,
                email: true
              }"
            >
              <v-text-field
                v-model="email"
                label="E-Mail"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="Select"
              :rules="{
                required: true
              }"
            >
              <v-select
                v-model="select"
                label="Select"
                :items="items"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="Checkbox"
              :rules="{
                required: true
              }"
            >
              <v-checkbox
                v-model="checkbox"
                label="Checkbox"
                value="1"
                :error-messages="errors"
              />
            </validation-provider>
            <v-btn
              type="submit"
              color="primary"
              class="mr-4"
              :disabled="invalid"
            >
              submit
            </v-btn>
            <v-btn type="clear">
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
import { max, required, numeric, digits, email } from 'vee-validate/dist/rules.js'
extend('max', {
  ...max,
  message: `{_field_}필드는 {length}자를 초과할 수 없습니다.`
})
extend('required',{
  ...required,
  message: '{_field_}필드는 필수값 입니다.'
})
extend('numeric',{
  ...numeric,
  message: '{_field_}필드는 숫자로만 구성되어야 합니다.'
})
extend('digits',{
  ...digits,
  message: '{_field_}필드는 {length}자리여야 합니다.'
})
extend('email',{
  ...email,
  message: '잘못 입력된 이메일 주소입니다.'
})
export default {
  name: "Forms",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    phoneNumber: null,
    name: null,
    email: null,
    select: null,
    checkbox: null,
    items: [
      { text: '아이템1', value: 1 },
      { text: '아이템2', value: 2 },
      { text: '아이템3', value: 3 },
    ],
  }),
  methods: {
    submit () {
      this.$refs.observer.validate().then(
        result => {
          console.log(result)
          if(result) {
            alert('양식 제출')
          }
        }
      )
    },
    clear() {
      this.phoneNumber = null,
      this.name = null,
      this.email = null,
      this.select = null,
      this.checkbox = null
    }
  }
}
</script>

<style scoped>

</style>
