# vue-module
webpack模块联邦学习 webpack5才能使用
## 首先要把vuecli升级到最新版cli5 

vuecli升级vucli5
要将Vue CLI（@vue/cli）从版本4升级到版本5，可以按照以下步骤进行操作：

首先确保已经安装了最新的Node.js。可以在命令行中运行node -v来查看当前安装的Node.js版本。如果需要更新或者安装Node.js，请参考官方网站上的指南。

打开命令行工具并输入以下命令来全局安装最新版本的Vue CLI：

 ```javascript

    npm uninstall -g vue-cli // 卸载老版本脚手架
    npm cache clean --force // 清除缓存之后
    npm install -g @vue/cli // 安装新的脚手架

 ```
或者
输入`npm install -g @vue/cli@latest`，安装最新版本的**vue-cli**，Mac是`sudo npm install -g @vue/cli@latest`