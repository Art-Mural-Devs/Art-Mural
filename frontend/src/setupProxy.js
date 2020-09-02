const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/apis', {
        logLevel: 'debug',
        target: "http://157.245.187.107:8080",
        changeOrigin: true,
        secure: true,

    }));
};
