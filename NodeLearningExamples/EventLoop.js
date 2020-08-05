var events=require('events');

var eventEmitter= new events.EventEmitter();

var eventHandler= function(){
    console.log("dta received");
    eventEmitter.emit('data_received');
}
eventEmitter.on('data_received', function(){
    console.log('data_received event handled');
})

eventEmitter.on('connection', eventHandler);
eventEmitter.emit('connection');