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

const isPublic = process.env.REACT_APP_TYPE === "public";
const isDevelopment = process.env.NODE_ENV === "development";

var multipleEntry = null;

if (isDevelopment) {
  multipleEntry = require("react-app-rewire-multiple-entry")([
    {
      // Webpack extra entry
      entry: isPublic ? "src/public-index.js" : "src/index.js",
      // HTML template used in plugin HtmlWebpackPlugin
      template: "public/index.html",
      // The file to write the HTML to. You can specify a subdirectory
      outPath: "index.html",
      // Visit: "http://localhost:3000/index.html"
    },
  ]);
} else {
  multipleEntry = require("react-app-rewire-multiple-entry")([
    {
      // Webpack extra entry
      entry: "src/public-index.js",
      // HTML template used in plugin HtmlWebpackPlugin
      template: "public/index.html",
      // The file to write the HTML to. You can specify a subdirectory
      outPath: "public-index.html",
      Visit: "http://localhost:3000/public/index.html",
    },
    {
      // Webpack extra entry
      entry: "src/index.js",
      // HTML template used in plugin HtmlWebpackPlugin
      template: "public/index.html",
      // The file to write the HTML to. You can specify a subdirectory
      outPath: "index.html",
      Visit: "http://localhost:3000/index.html",
    },
  ]);
}

// const multipleEntry = require('react-app-rewire-multiple-entry')([
//   {
//     // Webpack extra entry
//     entry: 'src/public-index.js',
//     // HTML template used in plugin HtmlWebpackPlugin
//     template: 'public/public-app.html',
//     // The file to write the HTML to. You can specify a subdirectory
//     outPath: 'index.html',
//     Visit: "http://localhost:3000/public/index.html"
//   },
//   {
//     // Webpack extra entry
//     entry: 'src/index.js',
//     // HTML template used in plugin HtmlWebpackPlugin
//     template: 'public/index.html',
//     // The file to write the HTML to. You can specify a subdirectory
//     outPath: 'private-index.html',
//     Visit: "http://localhost:3000/index.html"
//   },
// ]);

module.exports = {
  webpack: override(
    // usual webpack plugin
    multipleEntry.addMultiEntry,
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
