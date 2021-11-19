// /* eslint-disable no-irregular-whitespace */
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
// function addStyleResource(rule) {
//     rule.use('style-resource')
//         .loader('style-resources-loader')
//         .options({
//             patterns: [
//                 path.resolve(__dirname, 'src/styles/variable.less') // 需要全局导入的less
//             ]
//         });
// }
module.exports = {
    lintOnSave: true,
    configureWebpack: {
        mode: 'development',
        devtool: 'source-map'
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, 'src/assets/styles/global.less'),
                path.resolve(__dirname, 'src/assets/styles/variable.less')
            ]
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('u', resolve('src/utils'))
            .set('v', resolve('src/views'))
            .set('c', resolve('src/components'))
            .set('a', resolve('src/assets'));

        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end();
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: ''
            },
            less: {
                javascriptEnabled: true
            }
        }
    },
    pages: {
        org: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Eli商城'
        }
    },
    devServer: {
        open: false,
        // host: "192.168.0.137",
        host: '0.0.0.0', //局域网和本地访问
        //host: "192.168.1.137",
        port: 8080,
        https: false,
        hotOnly: true,
        proxy: {
            '/v01': {
                target: process.env.VUE_APP_BASE_URL + '/resource',
                pathRewrite: {'^/resource': ''},
                changeOrigin: true
            }
        }
    }
};
