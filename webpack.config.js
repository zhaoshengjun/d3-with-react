var webpack = require('webpack');

module.exports = {
  watch: true,
  output: {
    filename:'bundle.js'
  }
}

/*
* when using gulp-webpack-stream, there's no need for entry and output.
* gulp will handle it by using gulp.src() and gulp.dest()
*/

// module.exports = {
//   entry: "./index.js",
//   output: {
//     path: __dirname + "/public",
//     filename: "bundle.js"
//   }  
// };