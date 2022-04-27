module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://iwenwiki.com:3000',
                changeOrigin: true,
                pathRewrite: {
                    "/api": ""
                }
            }
        }
    },
    // 关闭source-map
    productionSourceMap: false,
    // 不打包这些静态资源，采用CDN引入
    chainWebpack: config => {
        config.set('externals', {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'nprogress': 'NProgress'
        })
    }
}