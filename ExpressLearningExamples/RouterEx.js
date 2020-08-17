var express= require('express');
var router=express.Router();

module.exports=router.get('/', function(req,res){
    console.log('router get');
    res.send("Hello World");
});
module.exports=router.get('/route', function(req,res){
    console.log('router get route');
    res.send("Hello World route");
});