const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/apis', {
        logLevel: 'debug',
        target: "http://167.172.203.59:8080",
        changeOrigin: true,

    }));
};
