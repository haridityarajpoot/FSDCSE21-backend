const fs = require("fs")

fs.writeFile("student.txt","Name:Hariditya Rajpoot\nRoll No:519",(res)=>{
    if(res){
        console.log(ans);
    }
});
console.log("File Created succesfully");

let data = fs.readFile("student.txt","utf8",(err,data)=>{
    if(err){
        console.log("error occur")
    }else{
        console.log(data);
    }
});
console.log("\nFile content");
