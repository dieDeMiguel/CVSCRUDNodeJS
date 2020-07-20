const fs = require('fs');
const {getItemById}  = require('./getItemById');
const readFile = require('./readfile');
const checkIDAndFindIndex = require('./checkIDAndFindIndex');
const { spliceAndStringify } = require('./spliceAndStringify');
const { writeFile } = require('./writeFile');

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
                        const index = checkIDAndFindIndex(item, id, response);
                        if(index != -1) {
                            response = spliceAndStringify(index, response);
                            writeFile(fileName, response, (error, response) => {
                                if(error) {
                                    callback(error, null)
                                } else {
                                    callback(null, "The file with ID: " + id + " was deleted from memory");
                                }
                            });
                        } else {
                            callback('Unable to find an object with id: ' + id + ' in the file', null);
                        } return ;
                    }
                }
            })
        }
    })
}

  module.exports = deleteItem;