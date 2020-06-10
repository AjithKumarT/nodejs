console.log("Hello World")
var a= 6
var b= 3
var c= a+b
console.log("sum is " +c)
var http=require('http')
http.createServer(function(req,res){
   // res.write("hello world from server")
   res.end("hello from server")
    //res.end()
}).listen(8080)