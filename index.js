const PORT = process.env.PORT || 3000;
var http = require("http");

// Create server object
http
    .createServer(function(request,response){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("This is the first cloud demonstration!\n"); // Write a response to the client
        response.end("--Jukka--"); // End response
    })
    .listen(PORT); // The server object listens on port
