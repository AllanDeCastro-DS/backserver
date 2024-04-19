//19/04 criar o primeiro server com node

const http = require('http');

const server = http.createServer((req, res) =>{
    
   console.log('efetuando pedido'); 
  //declarando um header
  res.setHeader('content-type', 'text/html')
   res.write("<h1>o que você deseja</h1>");
   res.write("<h2>Dormir</h2>")
   res.write("<h2>Cafézinho</h2>")
   res.end()
});

server.listen(3000,'localhost',() =>{
console.log('server no ar');


})