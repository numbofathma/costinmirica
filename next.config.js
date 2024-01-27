const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.costinmirica.com',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
};

module.exports = nextConfig;
