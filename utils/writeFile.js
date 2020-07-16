const fs = require('fs');

function writeFile(fileName, input, callback) {
    fs.writeFile(fileName, input, (error) => {
        if(error) {
            callback('Something went wrong while saving the file', null);
        } else {
            callback('The input was saved into memory');
        }
    });
}

module.exports = {
    writeFile
};