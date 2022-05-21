module.exports = {
    plugins: {
     
      'postcss-pxtorem': {
        rootValue: 1080 / 10,
        unitPrecision: 5,
        propList: ["*"],
        selectorBlackList: [/^\.html/], //排除html样式
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
      }
  
    }
  }