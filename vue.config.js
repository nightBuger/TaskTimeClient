const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions:{
    electronBuilder:{
      preload:'src/main/preload.js',
      mainProcessFile:'src/main/background.js'
    },
  },
  pages:{
    index:{
      entry:'src/render/main.js'
    }
  }
})