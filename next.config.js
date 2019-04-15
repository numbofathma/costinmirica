const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules');

const nextConfig = {
    target: 'serverless',
    // webpack(config, options) {
    //     return config;
    // }
};

module.exports = withPlugins(
    [
        withCSS,
        withImages,
        withTypescript,
        [withTM, { transpileModules: [] }]
    ],
    nextConfig
);