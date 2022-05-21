/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

const nextConfig = {
  distDir: 'dist',
  cssModules: true,
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "@primary-color": "#f74a49",
        "@border-radius-base": ".5em"
      }
    }
  }
}

module.exports = withLess(nextConfig)
