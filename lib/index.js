const chunkHashComment = /\/\*\sinject-webpack-chunk-hash\s\*\//;

const injectFn = (compilation) => (chunks, callback = () => {}) => {
  chunks.forEach(chunk => {
    chunk.files.forEach(file => {
      const originalSource = compilation.assets[file].source();
      const chunkCommentRE = RegExp(chunkHashComment, 'g');

      compilation.assets[file].source = () =>
        originalSource.replace(
          chunkCommentRE,
          `"${chunk.renderedHash}"`
        );
    });
  });

  callback();
};

class InjectChunkMetaPlugin {
    apply(compiler) {
      if (compiler.hooks) {
        const plugin = { name: "ChunkMetaWebpackPlugin" };

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
