var http = require('http');

var server = http.createServer(function(req,res){
    res.write("<h1>Hello to nodejs</h1>");
    res.end()
})

server.listen(4500)