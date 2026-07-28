// syncronus programming : code is executedd line by line
// console.log("JAva Script");
// function hello(){
//     console.log("hello hariditya");
// }
// hello();
// console.log("I am a cse student");
//asyncronus programming :

// const alpha =() => {
//     setTimeout(()=>{
//         console.log("I am hariditya rajppot");
//     },3000)

//     console.log(" I am from jhansi");
// }
// alpha();
//creatae a function dispaly (callback) that print " welcome to abes",then call callback which print learning "FSD in cse 21"
function welcome( callback){
            console.log("welcome to abes");
            callback();
}
function beta(){
    console.log("Learning FSD in cse 21");
}
welcome(beta);