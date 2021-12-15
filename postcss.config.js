module.exports = {
  plugins: {
    autoprefixer: {}, //用来自动处理浏览器前缀的一个插件。
    "postcss-pxtorem": {
      "rootValue": 37.5, // 设计稿宽度的1/10
      "propList": ['hight','width','margin','padding'] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部，正则
    }
  }
}