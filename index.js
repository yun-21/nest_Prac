const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      const first = fs.readFileSync('./index.html', 'utf-8')
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' })
      res.end(first);
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