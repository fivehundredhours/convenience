var http = require("http");
const { v4: uuidv4 } = require('uuid');
var port = 3000
var instance = process.env.instance_name || uuidv4()
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(`Hello Node instance: ${instance}`);
 }).listen(port);
 
 console.log(`Server running at http://127.0.0.1:${port}/`);