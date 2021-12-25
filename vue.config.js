const fs = require('fs')
module.exports = {
  // options...
  devServer: {
    disableHostCheck: true,
    https: {
      key: fs.readFileSync('src/assets/ssl/pub_www.inclutter.com.key'),
      cert: fs.readFileSync('src/assets/ssl/cert_www.inclutter.com.crt'),
      ca: fs.readFileSync('src/assets/ssl/rootca_www.inclutter.com.crt')
    },
  },
  transpileDependencies: [
    'vuetify'
  ],
  runtimeCompiler: true
};
