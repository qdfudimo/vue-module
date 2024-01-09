const {
  defineConfig
} = require('@vue/cli-service')
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
console.log(ModuleFederationPlugin);
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3004,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack:{
    plugins:[
      new ModuleFederationPlugin({
        name: '_app_one_remote2', // 当前APP作为remote暴露组件时的APP的名字
        // library: 'app_one_remote', // 当前APP作为remote暴露组件时的library名字
        filename: 'remoteEntry2.js',
        // 所有被暴露的组件会打包到这个文件中，同理使用者也需要从这里引入
        remotes: {
           // '导入别名':'远程应用名称/远程应用地址/导入文件的名称'
          app_two: "_app_one_remote@http://localhost:3003/remoteEntry.js",
          // remote_two: "remote_app@http://localhost:3001/remote_index.js",
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
        // 定义该库作为host时可能要引用的remote
        // exposes: {
        //   './AppContainer': './src/components/HelloWorld.vue'
        // },
        // 定义该库作为remote时，要暴露出去的组件。左边是相对路径和组件名字（其他库使用时候），右边是该组件在本库内的路径
        // shared: ["Vue"] // 和引入的组件公用的dependency
      })
    ]
  }
})