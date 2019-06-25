var fs = require('fs');
var http = require('http');

// Es5
/*
http.createServer(function(req,res){
    fs.appendFile('mytext2.txt','First time append\n', function(err){
        if(err) throw err;
        else{
            fs.readFile('mytext2.txt',function(err,result){
                if(err) throw err;
                res.write(result);
                res.end();
            })
        }
    }) 
}).listen(8600);
*/
// Es6
http.createServer((req,res) => {
    fs.appendFile('mytext2.txt','First time append\n',(err) => {
        if(err) throw err;
        else{
            fs.readFile('mytext2.txt',(err,result)=>{
                if(err) throw err;
                res.write(result);
                res.end();
            })
        }
    }) 
}).listen(8600);

/*
fs.writeFile('mytext.txt', 'hello to file api', function(err, file){
    if(err) throw err;
    console.log('datasaved')
});

fs.writeFile('mytext1.txt', 'hello to fs 1', function(err, file){
    if(err) throw err;
    console.log('datasaved')
});

fs.appendFile('mytext2.txt','First time append\n', function(err){
    if(err) throw err;
    else{
        console.log('data appended')
    }
})

fs.readFile('mytext2.txt','utf-8',function(err,result){
    if(err) throw err;
    console.log(result);
})*/