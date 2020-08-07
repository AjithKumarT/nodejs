var fs= require('fs');
var data="";
/* Remove comment to know normal file read and write
//async read
fs.readFile('sample.txt', function(err,dta){
    if(err){
        console.log(err);
    }
    else{
        console.log("async read : "+dta.toString());
    }
})

data=fs.readFileSync('sample.txt');
console.log("sync read:  "+data);

//WriteFile

fs.writeFile('output1.txt',data+" Kumar ",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("written");
    }
})*/

//FileOpen read write and close

fs.open('output.txt', 'r+' , function(err, fd){
     if(err){
         console.log("open err "+err);
     }
     else{
         console.log("opened successfully");
     }

     fs.write(fd, 'Writing file in open method', function(err){
         if(err){
             console.log(err);
         }
         else{
             console.log("written file in open method");
         }
     })

     fs.close(fd,function(err){
         if(err){
             console.log("file close error");
         }
         else{
             console.log("file closed successfully ");
         }
     })
})

//FileStat

fs.stat('output.txt', function(err, stats){
    if(err){
        console.log("stat error");
    }
    else{
        console.log(stats);
    }
    console.log("isFile "+stats.isFile());
})