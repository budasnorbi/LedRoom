const 
	path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
	UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [{
				test: /\.(js)$/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
                test:/\.(jpeg|png|svg)$/,
                use:[
                    { 
                        loader: 'file-loader',
                        options:{ name:'[name].[ext]',
                          outputPath:'img/',
                          publicPath: 'img/'
                        } 
                    }
                ]
			},
			{
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'font/'
                    }
                }]
            }
		]
	},
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.html'
		}),
		new BundleAnalyzerPlugin()
	],
	devServer: {
	  historyApiFallback: true,
	  contentBase: './'
	}
};