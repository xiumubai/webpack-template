# webpack-template

https://itxiaohao.github.io/passages/webpack4-pack-js/

## features

### 起步

- 打包第一个文件
- 配置模块(webpack.config.js)
- npm scripts

### 管理资源

- 加载 css 设置 rules style-loader css-loader
- 加载 images 图像

### 管理输出

到目前为止，我们都是在 index.html 文件中手动引入所有资源，然而随着应用程序增长，并且一旦开始 在文件名中使用 hash 并输出 多个 bundle，如果继续手动管理 index.html 文件，就会变得困难起来。然而，通过一些插件可以使这个过程更容易管控

- 设置多入口，打包 index.js print.js
- 设置 HtmlWebpackPlugin
- 清理 /dist 文件夹

### 开发环境

- 使用 source map
- 开发工具
  - Watch Mode 实时监听打包
  - webpack-dev-server 基本的 web server，并且具有 live reloading
  - webpack-dev-middleware

### [代码分离](https://webpack.docschina.org/guides/code-splitting/)

- 入口起点：使用 entry 配置手动地分离代码。
- 防止重复：使用 Entry dependencies 或者 SplitChunksPlugin 去重和分离 chunk。
- 动态导入：通过模块的内联函数调用来分离代码。

- 预获取/预加载模块(prefetch/preload module)

### 缓存

- 输出文件的文件名
- 提取引导模板(extracting boilerplate)
- 模块标识符(module identifier)

### 创建 library

- 外部化 lodash
-
