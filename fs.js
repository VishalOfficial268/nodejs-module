const fs = require('fs');

// by the file system reading the data:
const readTheFileData = function (req, res) {
    fs.readFile('input.txt', (error, data) => {
        if (error) throw error;
        res.end(data.toString())
    });
}

//by the streaming method reading the data:
const streamTheData = function (req, res) {
    const readableStream = fs.createReadStream('input.txt');
    readableStream.on('data', (chunkdata) => {
        res.write(chunkdata);
    });
    readableStream.on('end', () => {
        res.end();
    });
    readableStream.on('error', () => {
        console.log("error got while streaming...")
        res.end();
    })
}

//exporting the functions as the module:
module.exports = {
    readTheFileData,
    streamTheData
};
