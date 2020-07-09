const fs = require('fs');
const readFile = require('./readfile');
const { validateID } = require('./validation');
const {storeItem, storeAfterDeleting} = require('./storeitem');

function fetchOneByID(fileName, id, callback) {
    if(validateID(id)) {
        readFile(fileName, (error, response) => {
            if(error) {
                callback(error, null)
            } else {
                for(item of response) {
                    if(item.id == id) {
                        callback(null, item);
                        return;
                    } 
                } 
                callback('Unable to find an Object whithin the file with the provided ID', null);
                return;
            }
        })
    } else {
        callback('Something went wrong while reading the file');
    }
}

function fetchOneByIDAndDelete(fileName, id, callback) {
    if(validateID(id)) {
        readFile(fileName, (error, response) => {
            if(error) {
                callback(error, null);
            } else {
                for(item of response) {
                    const isMatch = (item) => item.id == id;
                    const index = response.findIndex(isMatch);
                    if(isMatch(item)) {
                        response.splice(index, 1);
                        response = JSON.stringify(response);
                        storeAfterDeleting(response, fileName, (error) => {
                            if(error) {
                                callback(error, null);
                                return;
                            } else  {
                                callback(null, 'The file with ID: #' + item.id + ' was deleted');
                                return;
                            }
                        })
                        return 
                    }
                } callback('Unable to find an Item with the provided ID', null);
            }
        })
    } else {
        callback('Something went wrong while reading the file');
    }
}

module.exports = {
    fetchOneByID: fetchOneByID,
    fetchOneByIDAndDelete: fetchOneByIDAndDelete
};