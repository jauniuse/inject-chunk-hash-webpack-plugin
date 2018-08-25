function test() {
    const name = '/* webpack-chunk-name */';
    const hash = '/* webpack-chunk-hash */';
    return {name, hash};
}

module.exports = test;
