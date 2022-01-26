const PORT = process.env.PORT || 3000;
var http = require("http");

// Create server object
http
    .createServer(function(request,response){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World!\n"); // Write a response to the client
        response.end("This is the end"); // End response
    })
    .listen(PORT); // The server object listens on port
