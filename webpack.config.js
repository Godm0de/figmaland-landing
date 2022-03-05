const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './src/main.js',
	},

	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].[contenthash].js',
	},



	module: {
		rules: [
			{
				test: /\.(s(a|c)ss)$/,
				use: ['style-loader','css-loader', 'sass-loader']
			},
			{
				test: /\.pug$/,
				use: ['pug-loader']
			}
		]
	},
	resolve: {
        extensions: ['*', '.js', '.scss', '.pug']
    },

	plugins: [
		new HtmlWebpackPlugin(
		{
			title: 'Figmaland',
			template: './src/index.pug'
		},
	)],

	devServer: {
		static: path.resolve(__dirname, './build'),
		open: true,
		port: 4200,
		host: 'local-ipv4' && 'localhost',
		liveReload: true,
		watchFiles:['*.pug', './src/main.js'],
		compress: true,
		hot: false,
		client: {
			overlay: true,
			progress: true,
		}	
	},

}
