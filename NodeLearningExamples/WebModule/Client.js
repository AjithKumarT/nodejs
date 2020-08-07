var http=require('http');
var options={
    host:'localhost',
    port: '8080',
    path: '/index.html'
}
var body="";
var callback=function(res){
    res.on('data',function(data){
        body+=data;
    })
    res.on('end',function(){
        console.log(body);
    })
}

var req=http.request(options,callback);
req.end();