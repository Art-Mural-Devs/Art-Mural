const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/apis', {
        logLevel: 'debug',
        target: "http://138.68.59.137:8080/",
        changeOrigin: true,
    }));
};
