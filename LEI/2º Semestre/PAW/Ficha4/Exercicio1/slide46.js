var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    fs.readFile('teste.html', function(err, data) {
        console.log("abertura");
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        console.log("termino");
    })
}).listen(8080); 