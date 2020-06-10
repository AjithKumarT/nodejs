var express=require('express')
const app= express()
app.get('/',function(req,res){
    res.send("hello World ")
})
app.get('/a',function(req,res){
    var id=req.query.id
    res.send("hello World "+id)
})
app.get('/:id',function(req,res){
    var id=req.params.id
    res.send("hi "+id)
})
app.listen(9000,function(req,res){
    console.log("running...")
})