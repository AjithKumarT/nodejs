var express= require('express');
var app= express();

app.get('/', function(req, res){
    console.log('get');
    res.send("Hello World");
});
app.post('/', function(req, res){
    console.log('post');
    res.send("Hello World");
});
app.all('/', function(req, res){
    console.log('all');
    res.send("Hello World");
});
app.listen(8080);