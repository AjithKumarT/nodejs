var express= require('express');
var app= express();

app.use('/route', function(req,res,next){
    console.log("request received at "+Date.now());
    
    next();
})

app.get('/route', function(req,res){
    res.send("Hi Hello");
})

//order of middleware
app.use(function(req,res,next){
console.log("start");
next();
})
app.get("/", function(req,res, next){
    console.log("end");
    res.send("middle");
    next();
})
app.use("/", function(req, res){
    console.log("second");
    
})

app.listen(8080);