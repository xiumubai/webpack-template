# webpack-template

https://itxiaohao.github.io/passages/webpack4-pack-js/

## features

## 起步

- 打包第一个文件
- 配置模块(webpack.config.js)
- npm scripts

## 管理资源

- 加载 css 设置 rules style-loader css-loader
- 加载 images 图像

## 管理输出

到目前为止，我们都是在 index.html 文件中手动引入所有资源，然而随着应用程序增长，并且一旦开始 在文件名中使用 hash 并输出 多个 bundle，如果继续手动管理 index.html 文件，就会变得困难起来。然而，通过一些插件可以使这个过程更容易管控

- 设置多入口，打包 index.js print.js
- 设置 HtmlWebpackPlugin
- 清理 /dist 文件夹

## 开发环境

- 使用 source map
-
