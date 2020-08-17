var express= require('express');
var app= express();

var route=require('./RouterEx.js');

app.use('/', route);

app.listen(8080);