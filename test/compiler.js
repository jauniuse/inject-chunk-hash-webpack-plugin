import webpack from 'webpack';
import MemoryFileSystem from 'memory-fs'
import InjectChunkMetaPlugin from '../lib/index';

const compiler = webpack({
    cache: false,
    entry: { fooo: `${__dirname}/fixtures/entry.js` },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].[chunkhash].js',
    },
    plugins: [new InjectChunkMetaPlugin()]
});

compiler.outputFileSystem = new MemoryFileSystem();

module.exports = compiler;
