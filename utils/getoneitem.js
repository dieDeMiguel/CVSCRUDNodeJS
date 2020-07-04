const fs = require('fs');
const readFile = require('./readfile');
const {validateDataFileName } = require('./validation');

function fetchOneByID(fileName, id, callback) {
    if(validateDataFileName(fileName, id)) {
        readFile(fileName, (error, response) => {
            if(error) {
                callback(error, null)
            } else {
                const file = response;
                file.id == id ? callback(null, file) : callback('Unable to find an Object whithin the file with the provided ID', null)
            }   
        })
    } else {
        callback('The fileName must be at least 6 words long anf the ID must be numeric');
    }
}

module.exports = fetchOneByID;