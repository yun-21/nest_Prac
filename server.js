const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      console.log("get")
      const first = fs.readFileSync('./front-react/public/index.html', 'utf-8')
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' })
      res.end(first);
    }
    else if(req.url === '/index.bundle.js'){
      const second=fs.readFileSync('./front-react/dist/index.bundle.js')
      res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf8' })
      res.end(second);
    }
  }
  if (req.method === 'POST') {
    if (req.url === '/send') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString()
      });
      req.on('end', () => {
        const data = JSON.parse(body);
        
        console.log('받은 데이터:', data);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data))

      })
    }
  }
})
server.listen(8080)