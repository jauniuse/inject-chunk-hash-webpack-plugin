const chunkHashComment = "/* webpack-chunk-hash */";
const chunkNameComment = "/* webpack-chunk-name */";

const injectFn = (compilation) => (chunks, callback = () => {}) => {
  chunks.forEach(chunk => {

    chunk.files.forEach(file => {

      const originalSource = compilation.assets[file].source();

      compilation.assets[file].source = () =>
        originalSource
          .replace(chunkHashComment, chunk.renderedHash)
          .replace(chunkNameComment, chunk.name)
    });
  });

  callback();
};

class InjectChunkMetaPlugin {
    apply(compiler) {
      if (compiler.hooks) {
        const plugin = { name: "ChunkInjectPlugin" };

        compiler.hooks.compilation.tap(plugin, compilation => {
          compilation.hooks.optimizeChunkAssets.tapAsync(plugin, injectFn(compilation));
        });
      } else {
        compiler.plugin("compilation", compilation => {
          compilation.plugin("optimize-chunk-assets", injectFn(compilation));
        });
     }
   }
}

module.exports = InjectChunkMetaPlugin;
