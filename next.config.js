module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        path: require.resolve("path-browserify"),
        os: false,
      }
    }
    return config;
  }
}
