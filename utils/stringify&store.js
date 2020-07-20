const fs = require('fs');
const { writeFile } = require('./writeFile');

function stringifyAndSave(fileName, array, callback) {
    array = JSON.stringify(array, null, 2);
    writeFile(fileName, array, 'utf8', (error)=> {
        if(error) {
            callback(error, null);
        } else {
            callback(null, 'The item has been saved to memory');
        }
    });
}

module.exports = stringifyAndSave;
