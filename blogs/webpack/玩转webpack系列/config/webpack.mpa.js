'use strict';

const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const setMPA = () => {
	const entry = {};
	const htmlWebpackPlugins = [];
	const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));

	Object.keys(entryFiles)
		.map((index) => {
			const entryFile = entryFiles[index];
			const match = entryFile.match(/src\/(.*)\/index\.js/);
			const pageName = match && match[1];

			entry[pageName] = entryFile;
			htmlWebpackPlugins.push(
				new HtmlWebpackPlugin({
					inlineSource: '.css$',
					template: path.join(__dirname, `src/${pageName}/index.html`),
					filename: `${pageName}.html`,
					chunks: ['vendors', pageName],
					inject: true,
					minify: {
						html5: true,
						collapseWhitespace: true,
						preserveLineBreaks: false,
						minifyCSS: true,
						minifyJS: true,
						removeComments: false
					}
				})
			);
		});

	return {
		entry,
		htmlWebpackPlugins
	}
}

const { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
	entry,
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]_[chunkhash:8].js'
	},
	plugins: htmlWebpackPlugins,
};