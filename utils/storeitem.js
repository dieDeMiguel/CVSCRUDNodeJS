const fs = require('fs');
const readFile = require('./readfile');
const writeFile = require('./writeFile');
const getFileExtension = require('./getFileExtension');
const pushAndStringify = require('./pushAndStringify');

function storeItem(item, fileName, callback) {
    fs.access(fileName, (err) => {
        //The file exists if there is no error
        if (!err) {
            readFile(fileName, (error, response) => {
                if(error) {
                    callback(error, null)
                } else {
                    if(item.id) {
                        const itemsArray = pushAndStringify(item, response);
                        writeFile(fileName, itemsArray, (error) => {
                            if(error) {
                                callback(error, null)
                            } else {
                                callback(null, 'The file has been updated, the new name is ' + item.name);
                            }
                        });
                    } else {
                        item.id = response.length + 1;
                        const itemsArray = pushAndStringify(item, response);
                        writeFile(fileName, itemsArray, (error) => {
                            if(error) {
                                callback(error, null)
                            } else {
                                callback(null, 'The file has been updated, the new name is ' + item.name);
                            }
                        })
                    }
                }
            })         
        } else { 
            //The file doesn't exist
            if(fileName.length < 7 || getFileExtension(fileName) != 'json') {
                callback('The name of the file must have at least 4 words and the file extension must be ".json".')
            } else {
                array = pushAndStringify(item);               
                writeFile(fileName, array, (error, response) => {
                    if(error) {
                        callback(error, null);
                    } else {
                        callback(null, response);  
                    }
                });
            }       
        }
    })
} 

module.exports = storeItem;