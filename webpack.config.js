const path = require('path');

module.exports = {
    entry : "./src/index.js",
    output: {
        path : path.join(__dirname, "build"),
        filename : "bundle2.js",
    },
    mode : "development", 
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"],
            },
            {
                test : /\.jpg$/,
                use : ['url-loader'],
            }
        ]
    },
}