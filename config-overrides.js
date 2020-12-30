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

function myOverrides(config) {
  config.module.rules[1].oneOf.unshift({
    test: /\.less$/,
    use: [
      require.resolve("style-loader"),
      require.resolve("css-loader"),
      {
        loader: require.resolve("postcss-loader"),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677

          ident: "postcss",
          plugins: () => [
            require("postcss-flexbugs-fixes"),
            autoprefixer({
              browsers: [
                ">1%",
                "last 4 versions",
                "Firefox ESR",
                "not ie < 9", // React doesn't support IE8 anyway
              ],
              flexbox: "no-2009",
            }),
          ],
        },
      },
      {
        loader: require.resolve("less-loader"),
        options: {
          // theme vars, also can use theme.js instead of this.
          // modifyVars: { "@brand-primary": "#1DA57A" },
          // modifyVars: theme,
          javascriptEnabled: true,
        },
      },
    ],
  });

  // css-modules
  config.module.rules[1].oneOf.unshift({
    test: /\.css$/,
    exclude: /node_modules|antd-mobile\.css/,
    use: [
      require.resolve("style-loader"),
      {
        loader: require.resolve("css-loader"),
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: "[local]___[hash:base64:5]",
        },
      },
      {
        loader: require.resolve("postcss-loader"),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: "postcss",
          plugins: () => [
            require("postcss-flexbugs-fixes"),
            autoprefixer({
              browsers: [
                ">1%",
                "last 4 versions",
                "Firefox ESR",
                "not ie < 9", // React doesn't support IE8 anyway
              ],
              flexbox: "no-2009",
            }),
          ],
        },
      },
    ],
  });

  // // file-loader exclude
  // let l = getBabelLoader(config.module.rules, fileLoaderMatcher);
  // l.exclude.push(/\.less$/);

  return config;
}

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
