const {
  override,
  disableEsLint,
  overrideDevServer,
  watchAll,
  addDecoratorsLegacy,
  fixBabelImports,
  addLessLoader,
  getBabelLoader,
} = require("customize-cra");
// const { injectBabelPlugin, getLoader } = require('react-app-rewired');

// const fileLoaderMatcher = function (rule) {
//   return rule.loader && rule.loader.indexOf(`file-loader`) != -1;
// }



module.exports = {
  webpack: override(
    // usual webpack plugin
    // myOverrides,
    addDecoratorsLegacy(),
    disableEsLint(),
    fixBabelImports([
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
      {
        libraryName: "antd-mobile",
        libraryDirectory: "es",
        style: true,
      },
    ]),
    addLessLoader({
      javascriptEnabled: true,
      // modifyVars: {'@primary-color': '#a50052'},
    }),
    disableEsLint()
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  ),
};
