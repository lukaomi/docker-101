const http = require('http');
const fetch = require('node-fetch');

const server = http.createServer(async (req, res) => {
  if (req.url === '/') {
    try {
      const todoServiceUrl = `http://todo-list:5000/api/data`;

      const response = await fetch(todoServiceUrl);
      const data = await response.json();

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ service: 502, data }));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'An error occurred while fetching data from the Todo service' }));
    }
  }
  
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

const PORT = process.env.PORT || 80;

server.listen(PORT, () => {
  console.log(`Node.js server is running on port ${PORT}`);
});