/**
 * Created by rongzhx on 2017/5/12 0012.
 */
var path = require("path");

module.exports = {
    entry: './index.js',
    output:{
        path: path.resolve(__dirname, './'),
        filename:'main.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                query:{
                    presets:["es2015", "react"]
                }
            }
        ]
    }
};