const fs = require('fs');
const {getItemById}  = require('./getItemById');
const readFile = require('./readfile');

function deleteItem(fileName, id, callback) {
    getItemById(fileName, id, (error, response) => {
         if(error) {
            callback(error, null);
        } else {
            readFile(fileName, (error, response) => {
                if(error) {
                    callback(error, null)
                } else {
                    for(item of response) {
                        const isMatch = (item) => item.id == id;
                        const index = response.findIndex(isMatch);
                        if(isMatch(item)) {
                            response.splice(index, 1);
                            response = JSON.stringify(response);
                            storeItem(response, fileName, (error) => {
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
                    }
                }
            })
        }
    })
}

  module.exports = deleteItem;