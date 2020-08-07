console.log("filename "+__filename);
console.log("dirname "+__dirname);

function print(){
    console.log("Hello ");
}
var t=setInterval(print, 2000);

function stop(){
    clearInterval(t);
    console.log("interval cleared")
}
setTimeout(stop, 8000);