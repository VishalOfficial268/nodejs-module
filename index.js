const http = require('http');
const PORT = 8001;
const HOST = 'localhost';

//creating server:
const server = http.createServer((req, res) => {

});

//listening the server:
server.listen(PORT, HOST, () => {
    console.log(`server listening at ${HOST}:${PORT}`);
})