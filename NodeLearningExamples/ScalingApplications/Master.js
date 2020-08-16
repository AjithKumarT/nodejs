var child_process= require('child_process');

// exec
/*for(var i=0; i<4; i++){
    var workerprocess=child_process.exec('node Support.js '+i, function(err, stdout, stderr){
        if(err){
            console.log('err '+err);
        }
        else{
            console.log('stdout '+stdout);
            console.log('stderr '+stderr);
        }
    })
    workerprocess.on('exit', function(code){
        console.log("child process exites with exit code "+code);
    })
}*/

//spawn
/*for(var i=0; i<4; i++){
    var workerprocess=child_process.spawn('node', ['Support.js', i]);
    workerprocess.stdout.on('data', function(data){
        console.log('stdout '+data);
    })
    workerprocess.stderr.on('data', function(data){
        console.log('stderr '+data);
    })
    workerprocess.on('close', function(code){
        console.log('close '+code);
    })
}*/

//fork
for(var i=0; i<4; i++){
    var workerprocess=child_process.fork('Support.js',[i]);
 
    workerprocess.on('close', function(code){
        console.log('close '+code);
    })
}