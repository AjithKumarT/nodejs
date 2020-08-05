var events=require('events')
var eventEmitter= new events.EventEmitter();



var listener1= function(){
    console.log('listener 1');
}
var listener2= function(){
    console.log('listener 2');
}
eventEmitter.on('connection', listener1);
eventEmitter.addListener('connection', listener2);

eventEmitter.emit('connection');

var listnerCount= require('events').EventEmitter.listenerCount
(eventEmitter,'connection');
console.log("count is "+listnerCount);


eventEmitter.removeListener('connection', listener1);
console.log('listener1 removed');

listnerCount= require('events').EventEmitter.listenerCount
(eventEmitter,'connection');
console.log("count is "+listnerCount);

eventEmitter.emit('connection');