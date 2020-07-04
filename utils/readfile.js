const fs = require('fs');

function readFile(fileName, callback) {
    fs.readFile(fileName, (error, data) => {
        if(error) {
            callback('The file couldn\'t be read', null);
        } else {
            data = JSON.parse(data.toString('utf8'));
            callback(null, {
                id: data.id,
                name: data.name
            })
        }
    })
}
  


module.exports = readFile;