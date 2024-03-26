// const http = require('http');

// const server = http.createServer((req,res)=>{
    
//     if(req.url === '/hello' ){
//         res.writeHead(220,{ 'Content-Type': 'text/plain' });
//         res.send("hello world")
//     }

//     else{
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 Not Found\n');
//     }




// })

// const port = 5000;

// server.listen(port, ()=>{
//             console.log(`Server is running on Port ${port}`)
// })



// const express = require("express");

// const app = express();

// app.get("/hello",(req,res)=>{
//      res.send("hello world");
// })

// app.use((req,res,next)=>{
//     res.status(404).send("404 not found")
// })

// app.listen(port,()=>{

//      console.log(`Server is running on port:{port}`)
// })