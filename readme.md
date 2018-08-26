<h2 align="center">Install</h2>

```bash
npm i -D chunk-meta-webpack-plugin
```

<h2 align="center">Test</h2>

```bash
npm run test
```

<h2 align="center">Usage</h2>

**webpack.config.js**
```js
const ChunkMetaWebpackPlugin = require('chunk-meta-webpack-plugin')

module.exports = {
  //...
  plugins: [
      new ChunkMetaWebpackPlugin()
  ]
}
```

Plugin will replace comments
```js
/* inject-webpack-chunk-hash */
```
with chunk hash and chunk name.
Can be useful when using an external library which renders `html` outside current page and requires `css` file which was created by using [ExtractTextWebpackPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) with name `[name].[chunkHash].css`. Some printing libraries work like that.