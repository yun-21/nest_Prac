const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
  if(req.method==='GET'){
    if(req.url==='/'){
      const first = fs.readFileSync('./index.html','utf-8')
      res.writeHead(200,{'Content-Type':'text/html; charset=utf8'})
      res.end(first);
    }
  }
})
server.listen(8080)