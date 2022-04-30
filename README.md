# [性能优化](https://webpack.docschina.org/guides/build-performance/)

## loader

过使用 include 字段，仅将 loader 应用在实际需要将其转换的模块：

```js
const path = require('path');

module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
    ],
  },
};
```

## 引导(bootstrap)

每个额外的 loader/plugin 都有其启动时间。尽量少地使用工具。

```js

```

```js

```

```js

```

```js

```

```js

```
