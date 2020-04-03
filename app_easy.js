const http = require('http');
const router = require('./router');


// Servidor con acceso al router ---no tocar
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	router.routes(req, res);
	
}).listen(3032, 'localhost');
 //fin del servidor ---no tocar
