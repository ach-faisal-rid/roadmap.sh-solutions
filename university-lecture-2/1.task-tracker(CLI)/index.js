const http = require('http');

const server = http.createServer( function(request, response){
    response.end('hello bro');
}) ;

server.listen(3001, "127.0.0.1", '', function () {
    console.log('server menyala!...');
});