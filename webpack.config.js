const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
    // mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    //   assetModuleFilename: 'images/[hash][ext][query]'
    },

    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },   

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
                // type: 'asset/resource'
            },
            // {
            //     test:/\.html$/,
            //     use: [
            //       'html-loader'
            //     ]
            // },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test bootstrap',
            template: './index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //       {
        //         from: path.resolve(__dirname, 'src/favicon.ico'),
        //         to: path.resolve(__dirname, 'dist')
        //       }
        //     ]
        // }),
    ],
};