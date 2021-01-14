module.exports = {
    entry: {
        "fetch_index": __dirname + "/fetch/fetch_index.js"
    },
    output: {
        path: __dirname + "/data_get",//打包后的文件存放的地方
        filename: "[name].js"//打包后输出文件的文件名
    },
    devServer: {
        // contentBase:"./data_get"
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300
        },
        proxy: {
            '/getAllDatasource': {
                target: "http://etl-front.rantion-admin.com/rantion_etl/basicData/datasource/getAllDatasource",
                changeOrigin: true,
                pathRewrite: {
                    '^/getAllDatasource': ''
                },

            },
            '/getAllJobTask': {
                target: "http://etl-front.rantion-admin.com/rantion_etl/etlTask/jobTask/getAllJobTask",
                changeOrigin: true,
                pathRewrite: {
                    '^/getAllJobTask': ''
                }
            },
            '/getAllTables': {
                target: "http://etl-front.rantion-admin.com/rantion_etl/basicData/tables/getAllTables",
                changeOrigin: true,
                pathRewrite: {
                    '^/getAllTables': ''
                }
            },
        }
    }
}