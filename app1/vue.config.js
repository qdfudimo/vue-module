const {
  defineConfig
} = require('@vue/cli-service')
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
console.log(ModuleFederationPlugin);
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3003,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  publicPath: 'auto',
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       defaultVendors: {
    //         name: 'chunk-vendors',
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: -10,
    //         chunks: 'async',
    //         reuseExistingChunk: true,
    //       },
    //       common: {
    //         name: 'chunk-common',
    //         minChunks: 2,
    //         priority: -20,
    //         chunks: 'async',
    //         reuseExistingChunk: true,
    //       },
    //     },
    //   },
    // },
    plugins: [
      new ModuleFederationPlugin({
        name: '_app_one_remote', // 当前APP作为remote暴露组件时的APP的名字
        // library: 'app_one_remote', // 当前APP作为remote暴露组件时的library名字
        filename: 'remoteEntry.js',
        // 所有被暴露的组件会打包到这个文件中，同理使用者也需要从这里引入
        // remotes: {
        //   app_two: "app_two_remote",
        //   app_three: "app_three_remote"
        // },
        // 定义该库作为host时可能要引用的remote
        exposes: {
          './AppContainer': './src/components/HelloWorld.vue',
          './tools': './src/utils/tools.js',
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
        // 定义该库作为remote时，要暴露出去的组件。左边是相对路径和组件名字（其他库使用时候），右边是该组件在本库内的路径
        // shared: ["Vue"] // 和引入的组件公用的dependency
      })
    ]
  }
})