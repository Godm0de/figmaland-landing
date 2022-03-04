const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
			}
		]
	},
	resolve: {
        extensions: ['*', '.js', '.scss']
    },

	plugins: [
		new htmlWebpackPlugin(
		{
			title: 'Figmaland',
			template: './src/index.html',
			favicon: './src/assets/favicon.ico'
		}
	)],

	devServer: {
		static: path.resolve(__dirname, './build'),
		open: true,
		port: 4200,
		host: 'local-ipv4' && 'localhost',
		liveReload: true,
		watchFiles:['./src/index.html', './src/main.js'],
		compress: true,
		hot: false,
		client: {
			overlay: true,
			progress: true,
		}	
	},

}