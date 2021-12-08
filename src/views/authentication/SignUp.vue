<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <div class="text-h5 font-weight-black mb-10">
              회원가입
            </div>
            <v-text-field
              label="이메일"
              prepend-icon="mdi-email"
              clearable
            />
            <v-text-field
              label="비밀번호"
              prepend-icon="mdi-lock-outline"
              clearable
            />
            <v-text-field
              label="비밀번호 확인"
              prepend-icon="mdi-lock-outline"
              clearable
            />
            <v-btn
              block
              x-large
              color="primary"
              rounded
              class="mt-6"
            >
              가입하기
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignUp"
}
</script>

<style scoped>

</style>
