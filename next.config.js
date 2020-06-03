const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withTM = require('next-transpile-modules');
const CompressionPlugin = require('compression-webpack-plugin');

const nextConfig = {
  target: 'serverless',
  webpack(config, options) {
    config.plugins.push(
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg|png|jpg)$/,
        threshold: 8192,
        minRatio: 0.8
      })
    );

    return config;
  }
};

module.exports = withPlugins(
  [
    withImages,
    [withTM, { transpileModules: [] }],
  ],
  nextConfig
);
