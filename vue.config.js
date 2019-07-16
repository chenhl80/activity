const goods = require('./data/goods.json');
const ratings = require('./data/ratings.json');
const seller = require('./data/seller.json');

module.exports = {
    //baseUrl: '/', // 根路径
    publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
    lintOnSave: false, // 是否开启eslint保存检测, 有效值: true || false || 'error'
    devServer: {
        open: true,
        host: 'localhost',
        port: 8085,
        https: false,
        hotOnly: false,
        proxy: {
            // 配置跨域
            '/api': {
                target: 'http//localhost:5000/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before(app) {
            // http://localhost:8081/api/goods
            app.get('/api/goods', (req, res) => {
                res.json(goods);
            });

            app.get('/api/ratings', (req, res) => {
                res.json(ratings);
            });

            app.get('/api/seller', (req, res) => {
                res.json(seller);
            });
        }
    },
    chainWebpack: config => {
        config.module
            .rule('zepto')
            .test(require.resolve('zepto'))
            .use('exports')
            .loader('exports-loader?window.Zepto')
            .end()
            .use('script')
            .loader('script-loader')
            .end()
            //  if you want import zepto in the main.js you can not use this
            //  如果你想在main.js中引入zepto，下面的配置可以不用复制
        config
            .plugin('env')
            .use(require.resolve('webpack/lib/ProvidePlugin'), [{ $: 'zepto' }])
    }

};