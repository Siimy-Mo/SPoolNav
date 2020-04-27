// 全局配置

module.exports = {

  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/css/global-color.scss";
        `
      }
    }
  }
};
