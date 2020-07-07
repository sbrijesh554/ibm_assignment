var config = {
    entry: './main.js',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       port: 8080,
       historyApiFallback: true
    },
    mode: 'development',
    devtool: "source-map",
    module: {
       rules: [
         {
            test: [/.jsx$|.js$/],
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react', 'stage-2']
            }
         },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          {
				test: /\.(jpe?g|png|gif)$/,
				loaders: [ "url-loader"]
			}
       ]
    }
 }
 module.exports = config;