const http = require('http')
const port = 9000


function responseHandler(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Is this working?');
    res.end();
}

const server = http.createServer(responseHandler);
server.listen(port);