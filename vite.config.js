const { defineConfig } = require('@vue/cli-service')

export default defineConfig({
    publicPath: process.env.NODE_ENV === 'production'
    ? '/Animaccord/'
    : '/'
  });