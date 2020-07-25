const fs = require('fs');

function writeFile(fileName, input, callback) {
    fs.writeFile(fileName, input, (error) => {
        if(error) {
            callback('Something went wrong while saving the file', null);
        } else {
            callback(null, 'file has been updated with the indicated changes');
        }
    });
}

module.exports = writeFile;