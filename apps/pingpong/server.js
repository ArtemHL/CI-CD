const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('ok');
    }
    else if (req.url === '/bestProgrammer') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('ArtemHl');
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' })    
        res.end("pong");
    }
});

server.listen(8080, '0.0.0.0', () => {
    console.log('Server running on port 8080');
});