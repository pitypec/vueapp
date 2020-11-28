// module.exports = {
//   devserver: {
//     proxy: {
//       target: "https://vueapp-90cf0.firebaseio.com",
//       changeOrigin: true
//     }
//   }
// };

module.exports = {
  // options...
  devServer: {
    port: 3000,
    proxy: "https://vueapp-90cf0.firebaseio.com"
  }
};
