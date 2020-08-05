var fs= require('fs');

var data=fs.readFileSync('sample.txt');
console.log(data.toString());

// using callBacks

data=fs.readFile('sample.txt', function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log("read file "+data.toString());
    }
})
console.log("file read "+data);
console.log("over");