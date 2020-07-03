const fs = require('fs');

function readFile(fileName, callback) {
    fs.readFile(fileName, (error, data) => {
        if(error) {
            callback('The file couldn\'t be read', null);
        } else {
            callback(null, data);
        }
    })
}
  


module.exports = readFile;