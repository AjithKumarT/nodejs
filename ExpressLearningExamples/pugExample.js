var express= require('express');
var app= express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first',function(req, res){
    res.send('firstPage');
})

app.get('/name', function(req,res){
    res.render('firstPage', {
        name: "Ajith",
        id: "123"
    })
})
app.listen(8080);