const fs = require('fs');
const storeItem = require('../utils/storeitem');
const readFile = require('../utils/readfile');
const { validateDataName, validateDataFileName } = require('../utils/validation');
const fetchOneByID = require('../utils/getoneitem');

const  createItem = (item, callback) =>{
    if(validateDataName(item.name, item.id)) {
       storeItem(item, (error, response) => {
          if(error) {
              callback(error, null);
          } else {
              callback(null, response);
          }
       });
    } else {
        callback("The item must have a numeric ID and a name larger than 3 words", null)
    }
}

const listItems = (fileName, callback) => {
    if(validateDataFileName(fileName)) {
        readFile(fileName, (error, response) => {
            if(error) {
                callback(error, null)
            } else {
                callback(null, response);
            }
        })
    }
}

const getItem = (fileName, id, callback) => {
    if(validateDataFileName(fileName, id)) {
        fetchOneByID(fileName, id, (error, response) => {
            if(error) {
                callback(error, null);
            } else {
                callback(null, response);
            }
        })
    } else {
        callback("The item must have a numeric ID and a file name larger to 5 words", null)
    }
}


//Update Item route.
const updateItem = (itemToUpdate, fileName, callback) => {
    if(validateDataName(itemToUpdate.name, itemToUpdate.id)) {
        fetchOneByID(fileName, itemToUpdate.id, (error, response) => {
            if(error) {
                callback(error, null);
            } else {
                response.name = itemToUpdate.name;
                response.fileName = itemToUpdate.fileName;
                storeItem(response, (error, response )=> {
                    if(error) {
                        callback(error, null)
                    } else {
                        callback(null, response);
                    }
                })
            }
        })
    } else {
        callback("The item must have a numeric ID and a name larger than 3 words", null)
    }
}
 
module.exports = {
    createItem: createItem,
    listItems: listItems,
    getItem: getItem,
    updateItem: updateItem
};