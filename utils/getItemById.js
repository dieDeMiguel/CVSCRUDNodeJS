const fs = require('fs');
const readFile = require('./readfile');
const { validateID } = require('./validateID');


function getItemById(fileName, id, callback) {
    if(validateID(id)) {
        readFile(fileName, (error, response) => {
            if(error) {
                callback('There was a problem while reading the file', null);
            } else {
                for(item of response) {
                    item.id = item.id.toString();
                    if(item.id === id) {
                        callback(null, item);
                    } else {
                        callback('Unable to find an item with the provided ID', null);
                    }
                    return
                }
            }
        });
    } else {
        callback('Something went wrong while reading the file');
    }
}

module.exports = {
    getItemById
};