var http = require('http');

var server = http.createServer(function(req,res){
    res.write("<h1>Hello to second nodejs</h1>");
    res.end()
})

server.listen(4600)