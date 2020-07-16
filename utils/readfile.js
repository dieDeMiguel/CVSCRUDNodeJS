const fs = require('fs');

function readFile(fileName, callback) {
    fs.readFile(fileName, (error, data) => {
        if(error) {
            callback('The file couldn\'t be read', null);
        } else {
            data = JSON.parse(data.toString('utf-8'));
            callback(null, data);
        }
    })
}

module.exports = readFile;