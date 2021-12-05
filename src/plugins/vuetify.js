import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify);

const theme = {
  primary: colors.amber,
  secondary: '#0336FF'
}

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: 'sm' // This is equivalent to a value of 960
  },
  theme: {
    themes: {
      light: {
        primary: theme.primary,
        secondary: theme.secondary
      }
    },
  }
});
