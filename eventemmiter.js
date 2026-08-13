// EventEmitter is class
// event("evevnt param"):trigger/create/fire anad on("evevt emit param",callback fun):listener that registered
// const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on("greet",()=>{
//     console.log("this is event emitter");
// })
// event.emit("greet");
// event.emit("greet");
// const EventEmitter = require("events");
// class MyEmitter extends EventEmitter{};
// const event=new MyEmitter();
// event.on("hello",(msg)=>{
//     console.log(`hello ${msg}`);//Template literals :`${var}`
// })
// event.on("exit",()=>{
//     console.log("exits myemmiter  application....");
// })
// event.emit("hello","CSE 21 this is fsd class");
// event.emit("exit");

//Simulate DOM-like event handling in Node.js usig event
//Button:click and mouseover events
const EventEmitter = require("events");
class Button extends EventEmitter{
    click(){
        console.log("call button click event");
        this.emit("click");
    }
    mouseover(){
        console.log("call button mouseiver event");
        this.emit("mouseover");
    }

} 
const button = new Button();
button.on("click",() => {
        console.log("Button clicked!");
})
button.on("mouseover",() => {
    console.log("mouseover done!");
})

button.click();
button.mouseover();











