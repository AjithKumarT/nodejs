var buf=  Buffer.alloc(10);
var buf1=  Buffer.from([ 8, 6, 7, 5, 3, 0, 9]);
var buf2=  Buffer.from("Hello World", 'utf-8');

buf.write("Hello World ", "utf-8");
console.log("buf1 "+buf1.toString(undefined,0,5));
console.log("buf "+buf);
console.log("buf2 "+buf2);
for(var i=0; i<buf1.length;i++){
    console.log("buf1 "+buf1[i]);
}
console.log("buf2 json "+buf2.toJSON(buf2));
var temp=Buffer.concat([buf,buf2]);
console.log("buf concat "+temp);
console.log("buf compare "+buf.compare(buf2));
var buf3= Buffer.alloc(10);
buf2.copy(buf3);
console.log("buf copy "+buf3);
console.log("buf slice "+buf3.slice(0,3));
console.log("buf isBuffer "+Buffer.isBuffer(buf3));
console.log("buf isEncod "+Buffer.isEncoding("utf-8"));