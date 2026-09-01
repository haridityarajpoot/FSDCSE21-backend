import http from 'http'
const server = http.createServer((req,res)=>{
res.writeHead(200,{"Context-type":"text/html"});    
res.write("hello! world");
res.write("<h1>welcome to my sercver</h1>")
res.end();
})

server.listen(8000,() => {
    console.log("server is running on port 8000");
})