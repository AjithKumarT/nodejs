var http= require('http');
var fs=require('fs');
var url= require('url');

http.createServer(function(req,res){
var pathName= url.parse(req.url).pathname;
console.log("received path is "+pathName );
fs.readFile(pathName.substring(1),function(err,data){
    if(err){
        console.log(err);
        res.writeHead(400, {'Content-Type':'text/html'});
    }
    else{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
    }
    res.end();
})
}).listen(8080);