const res = require('express/lib/response');
const path = require('path');

const __path = function () {
    //It gives the directory name excluding the filename:
    console.log("Folder Name: " + path.dirname(__dirname));

    //It gives the directory name including the filename without extension:
    console.log("Folder Name: " + path.dirname(__filename));

    //It gives the only filename with extension:
    console.log("File Name: " + path.basename(__filename));

    //It gives the extension name only from the dot(.):
    console.log("Extention Name: " + path.extname(__filename));

    //It parse the url in Object format:
    console.log("Parse : ", path.parse(__filename));

    //It joins the path with forward shlash / in the url and convert in a full url:
    console.log("Joinning the path : ", path.join(__dirname, 'order', 'app.js'));

    //It formats the url from Object to the url:
    console.log(path.format({
        root: '/',
        dir: '/Users/vishalgupta/LearningStuff/Nodejs Modules/path',
        base: 'index.js',
        ext: '.js',
        name: 'index'
    }));

    //check if the path is absolute or not:
    console.log(path.isAbsolute('/path/checking/by/the/forwardshlash'));

    //path normalize it return the normal path if otherthan that:
    console.log(path.normalize('/path/checking/by/the///forwardshlash'));

    //for the relative path it automates:
    console.log(path.relative('/a/b/c/todo', '/a/b/c/api/todo1'));

    //path resolve:
    console.log(path.resolve('/foo/bar', '/tmp/file/'))

}

module.exports = {
    __path
}