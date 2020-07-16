const fs = require('fs');
const readFile = require('./readfile');
const stringifyAndSave = require('./stringify&store');
const { writeFile } = require('./writeFile');
const getFileExtension = require('./getFileExtension');

function storeItem(item, fileName, callback) {
    fs.access(fileName, (err) => {
        //The file exists if there is no error
        if (!err) {
            readFile(fileName, (error, response) => {
                if(error) {
                    callback(error, null)
                } else {
                    itemsArray = response;
                    itemsArray.push(item);
                    itemsArray = JSON.stringify(itemsArray, null, 2);
                    writeFile(fileName, itemsArray, (error, response) => {
                        if(error) {
                            callback(error, null)
                        } else {
                            callback(null, response);
                        }
                    })
                }
            })         
        } else { 
            //The file doesn't exist
            if(fileName.length < 7 || getFileExtension(fileName) != 'json') {
                callback('The name of the file must have at least 4 words and the file extension must be ".json".')
            } else {
                const emptyArray = [];
                emptyArray.push(item);
                writeFile(fileName, JSON.stringify(emptyArray), (error, response) => {
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

module.exports = {
    storeItem  
};