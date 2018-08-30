<h2 align="center">Install</h2>

```bash
npm i -D inject-chunk-hash-webpack-plugin
```

<h2 align="center">Test</h2>

```bash
npm run test
```

<h2 align="center">Usage</h2>

**webpack.config.js**
```js
const InjectChunkHashWebpackPlugin = require('inject-chunk-hash-webpack-plugin')

module.exports = {
  //...
  plugins: [
      new InjectChunkHashWebpackPlugin()
  ]
}
```

Plugin will replace comments
```js
/* inject-webpack-chunk-hash */
```
with chunk hash.
Can be useful when using an external library which renders `html` outside current page and requires `css` file which was created by using [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) or [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) with name `[name].[chunkHash].css`. Some printing libraries work like that.