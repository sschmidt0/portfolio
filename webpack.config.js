var config = Encore.getWebpackConfig();
config.node = { fs: 'empty' };
module.exports = config;
