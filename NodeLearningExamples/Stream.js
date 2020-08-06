var fs=require('fs');
var data='';
//Reading Streams

var readStream= fs.createReadStream('sample.txt');
readStream.setEncoding('UTF-8');
readStream.on('data', function(chunk){
data+=chunk;
})

readStream.on('end', function(){
    console.log(data);
})

readStream.on('error',function(err){
    console.log(err.stack);
})
console.log("Program ends");

//Writing Streams
var dt="Write Stream program"
var writeStream= fs.createWriteStream('output.txt');
writeStream.write(dt,'utf-8');
writeStream.end();
writeStream.on('finish', function(){
    console.log("over");
})

writeStream.on('error', function(err){
    console.log(err.stack);
})

console.log("Program ends for writing");

//Piping

var rs=fs.createReadStream('sample.txt');
var ws=fs.createWriteStream('output1.txt');
rs.pipe(ws);

//Chaining
//zip or compressing remove comment for compress operation

var zlib=require('zlib');

/*fs.createReadStream('sample.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('sample.txt.gz'))
console.log("compressed");  */

//unzip or decompressing

fs.createReadStream('sample.txt.gz').pipe(zlib.createUnzip()).pipe(fs.createWriteStream('decompressed.txt'));
console.log('decompressed');