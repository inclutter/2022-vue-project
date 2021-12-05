<template>
  <v-container>
    <v-card>
      <v-card-title>
        $vuetify.breakpoint.name: {{ $vuetify.breakpoint.name }}
      </v-card-title>
      <v-container class="grey lighten-3">
        <v-card
          class="pa-3"
          outlined
          :height="height"
        >
          Breakpoints
        </v-card>
      </v-container>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        Typography
      </v-card-title>
      <v-container class="grey lighten-3">
        <v-card class="pa-3 text-h2 primary dark-3">
          컨텐츠
        </v-card>
        <v-card class="pa-3 text-h2 secondary lighten-3">
          컨텐츠
        </v-card>
        <v-card class="pa-3 text-h2 error">
          컨텐츠
        </v-card>
        <v-card class="pa-3 text-h2 primary--text">
          컨텐츠
        </v-card>
        <v-card class="pa-3 text-h2 secondary--text">
          컨텐츠
        </v-card>
        <v-card class="pa-3 text-h2 error--text">
          컨텐츠
        </v-card>
        <v-container>
          <v-card
            class="pa-3 d-none d-sm-block"
            outlined
          >
            <p class="text-h1">
              Heading 1
            </p>
            <p class="text-h2">
              Heading 2
            </p>
            <p class="text-h3 text-sm-subtitle-1">
              Heading 3
            </p>
            <p class="text-h4">
              Heading 4
            </p>
            <p class="text-h5">
              Heading 5
            </p>
            <p class="font-weight-black">
              Black text
            </p>
            <p class="font-weight-thin">
              font-weight-thin
            </p>
            <p class="text-justify">
              Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.

              Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
            </p>
            <p class="text-center text-sm-right">
              Morbi mattis ullamcorper velit.
            </p>
            <!--          Heading 2
            Heading 3
            Heading 4
            Heading 5
            Heading 6
            Subtitle 1
            Subtitle 2
            Body 1
            Body 2
            Font
            Roboto
            Weight
            400
            Size
            0.875rem
            Letter spacing
            .0178571429em
            BUTTON
            Caption-->
          </v-card>
        </v-container>
        <v-container class="mt-5">
          <v-card
            class="pa-3"
            outlined
          >
            <p class="text-h1">
              Heading 1
            </p>
            <p class="text-h2">
              Heading 2
            </p>
            <p class="text-h3 text-sm-subtitle-1">
              Heading 3
            </p>
            <p class="text-h4">
              Heading 4
            </p>
            <p class="text-h5">
              Heading 5
            </p>
            <p class="font-weight-black">
              Black text
            </p>
            <p class="font-weight-thin">
              font-weight-thin
            </p>
            <p class="text-justify">
              Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.

              Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
            </p>
            <p class="text-center text-sm-right">
              Morbi mattis ullamcorper velit.
            </p>
            <!--          Heading 2
            Heading 3
            Heading 4
            Heading 5
            Heading 6
            Subtitle 1
            Subtitle 2
            Body 1
            Body 2
            Font
            Roboto
            Weight
            400
            Size
            0.875rem
            Letter spacing
            .0178571429em
            BUTTON
            Caption-->
          </v-card>
        </v-container>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Typography"
}
</script>

<style scoped>

</style>
