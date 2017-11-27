module.exports = {
    "entry": [
        './src/index.js'
    ],
    "output": {
        filename: './build/bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/, 
            loader: 'babel-loader'
        }]
    }
}