/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['utfs.io'],
        remotePatterns: [{
            protocol: 'https',
            hostname: 'utfs.io',
            port: ''
        }]
    },
    experimental: {
        appDir: true,
        esmExternals: "loose", // <-- add this
        serverComponentsExternalPackages: ["mongoose"] // <-- and this
    },
    // and the following to enable top-level await support for Webpack
    webpack: (config) => {
      config.experiments = {
        topLevelAwait: true
      };
      return config;
    },
  }


