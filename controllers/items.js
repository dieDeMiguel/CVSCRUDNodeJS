const fs = require('fs');
const storeItem = require('../utils/storeitem');
const readFile = require('../utils/readfile');
const { validateDataName, validateID } = require('../utils/validation');
const fetchOneByID = require('../utils/getoneitem');
const deleteFile = require('../utils/deletefile');


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

const listItems = (callback) => {
    const fileName = 'items.csv';
    readFile(fileName, (error, response) => {
        if(error) {
            callback(error, null)
        } else {
            callback(null, response);
        }
    })
}

const getItem = (id, callback) => {
    const fileName="items.csv"
    if(validateID(id)) {
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
const updateItem = (itemToUpdate, id, callback) => {
    const fileName="items.csv"
    if(validateID(id)) {
        fetchOneByID(fileName, id, (error, response) => {
            if(error) {
                callback(error, null);
            } else {
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

const removeFile = (callback) => {
    const fileName = "items.csv";
    deleteFile(fileName, (error, response) => {
        if(error) {
            callback(error, null)
        } else {
            callback(null, response);
        }
    })  
}
 
module.exports = {
    createItem: createItem,
    listItems: listItems,
    getItem: getItem,
    updateItem: updateItem, 
    removeFile: removeFile
};