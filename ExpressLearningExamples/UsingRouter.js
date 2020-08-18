var express= require('express');
var app= express();

var route=require('./RouterEx.js');

app.use('/', route);

app.get('/:id([0-9]{5})', function(req,res){
    res.send("welcome id : "+req.params.id);
})
app.get('*', function(req,res){
    res.send('invalid route');
})
app.listen(8080);