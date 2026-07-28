



const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
        // resolve("succesfull");
        reject(" network")
    })
}
let promise = getPromise();
promise.then((res) => {
    console.log("promise fullfilled",res);
})

promise.catch((err) => {
    console.log("rejected",err)
})