const http = require('http');
const __fs = require('./fs');
const { __path } = require('./path');
const PORT = 8001;
const HOST = 'localhost';


//creating server:
const server = http.createServer((req, res) => {

    /** from fs file: */
    // __fs.readTheFileData(req, res);
    // __fs.streamTheData(req, res);
});


/** from path file: */
__path();


//listening the server:
server.listen(PORT, HOST, () => {
    console.log(`server listening at ${HOST}:${PORT}`);
})