var calc=require('./calc.js')
var addRes=calc.add(3,6)
var subRes=calc.sub(12,3)
console.log("add "+addRes)
console.log("sub "+subRes)

var fs=require('fs')
//var datas="Hi hello";
fs.readFile('calc.js','utf8',function(err,data){
    //datas=data
   // console.log(data)
   fs.writeFile('calc1.js',data,function(err){
    console.log("data saved")
})
})
/*fs.writeFile('calc1.js',datas,function(err){
    console.log("data saved")
})*/

fs.appendFile('calc1.js','//sampleappend',function(err){
    console.log("data saved")
})

fs.unlink('calc1.js', function(err){
    console.log("deleted")
})