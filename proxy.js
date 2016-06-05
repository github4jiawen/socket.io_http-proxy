var http = require('http');
var httpProxy = require('http-proxy');

var proxy = new httpProxy.createProxyServer({
    target: {
        host: 'localhost',
        port: 8080
    }
});

var proxyServer = new http.createServer(function (req, res) {
    console.log('web');
    proxy.web(req, res);
}).listen(8081);

proxyServer.on('upgrade', function (req, socket, head) {
    console.log('upgrade');
    proxy.ws(req, socket, head);
});