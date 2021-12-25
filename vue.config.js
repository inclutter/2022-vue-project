const fs = require('fs')
module.exports = {
  // options...
  devServer: {
    disableHostCheck: true,
    https: true
  },
  transpileDependencies: [
    'vuetify'
  ],
  runtimeCompiler: true
};
