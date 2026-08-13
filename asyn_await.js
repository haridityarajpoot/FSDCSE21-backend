console.log("New code is running...");

function greet(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        },3000)
    });
}

async function display(){
    console.log("start");
    let data = await greet();
    console.log(data);

    console.log("end");
}

display();