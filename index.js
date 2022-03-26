const http = require('http');


 
const server = http.createServer((req, res) => {
    if(req.url === 'localhost:3004/weather' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end(); 
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'}); 
        res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
    }
  
});
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));




