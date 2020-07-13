const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebappWebpackPlugin = require("webapp-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");


if (!process.env.API_URI) {
  throw new Error("Environment variable API_URI not set");
}
if (!process.env.FACEBOOK_URI) {
  throw new Error("Environment variable FACEBOOK_URI not set");
}
if (!process.env.INSTAGRAM_URI) {
  throw new Error("Environment variable INSTAGRAM_URI not set");
}
if (!process.env.TWITTER_URI) {
  throw new Error("Environment variable TWITTER_URI not set");
}
if (!process.env.YOUTUBE_URI) {
  throw new Error("Environment variable YOUTUBE_URI not set");
}


console.log(process.env.FACEBOOK_URI);

module.exports = ({ sourceDir, distDir }) => ({
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
      }),
    ],
  },
  entry: {
    app: `${sourceDir}/index.tsx`,
  },
  output: {
    path: distDir,
    publicPath: "/",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          experimentalWatchApi: true,
          transpileOnly: true,
        },
      },
      {
        test: /\.(woff2?|ttf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "/fonts/",
            },
          },
        ],
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "/images/",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 85,
              },
              pngquant: {
                quality: "65-90",
                speed: 4,
              },
              gifsicle: {
                enabled: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: distDir,
    }),
    new HtmlWebpackPlugin({
      filename: `${distDir}/index.html`,
      template: `${sourceDir}/index.html`,
      SHOP_NAME: process.env.SHOP_NAME,
      API_URI: process.env.API_URI,
    }),
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      exclude: "node_modules",
    }),
    // PWA plugins
    new WebappWebpackPlugin({
      logo: `${sourceDir}/images/favicon.png`,
      prefix: "images/favicons/",
      favicons: {
        appName: "Saleor",
        appDescription: "Storefront for the Saleor e-commerce platform",
        display: "standalone",
        developerURL: null, // prevent retrieving from the nearest package.json
        background: "#ddd",
        theme_color: "#333",
      },
    }),
    new webpack.EnvironmentPlugin({
      API_URI: "http://localhost:8000/graphql/",
      SHOP_NAME: process.env.SHOP_NAME,
      FACEBOOK_URI: process.env.FACEBOOK_URI,
      INSTAGRAM_URI: process.env.INSTAGRAM_URI,
      TWITTER_URI: process.env.TWITTER_URI,
      YOUTUBE_URI:process.env.YOUTUBE_URI,
    }),
  ],
  node: {
    fs: "empty",
    module: "empty",
  },
});
