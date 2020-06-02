const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
// const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');
const withTM = require('next-transpile-modules');

const nextConfig = {
  target: 'serverless',
  // webpack(config, options) {
  //     return config;
  // }
};

module.exports = withPlugins(
  [
    // withCSS,
    withImages,
    [withTM, { transpileModules: [] }],
    [withOffline, {
      workboxOpts: {
        swDest: 'sw.js',
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'offlineCache',
              expiration: {
                maxEntries: 200,
              },
            },
          },
        ],
      }
    }],
  ],
  nextConfig
);
