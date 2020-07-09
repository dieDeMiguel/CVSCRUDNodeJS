const fs = require('fs');
const {storeItem} = require('../utils/storeitem');
const readFile = require('../utils/readfile');
const { validateDataName, validateID } = require('../utils/validation');
const deleteItem = require('../utils/deletefile');
const { fetchOneByID, fetchOneByIDAndDelete } = require('../utils/getoneitem');
const fileName="items.csv"


const  createItem = (item, callback) =>{
    if(validateDataName(item.name, item.id)) {
       item.name = item.name.trim(); 
       storeItem(item, fileName, (error, response) => {
          if(error) {
              callback(error, null);
          } else {
              callback(null, response);
          }
       })
    } else {
        callback("The item must have a numeric ID and a name larger than 3 words", null);
    }
}

const listItems = (callback) => {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            callback(null, response);
        }
    })
}

const getItem = (id, callback) => {
    if(validateID(id)) { 
        fetchOneByID(fileName, id, (error, response) => {
            if(error) {
                callback(error, null);
            } else {
                callback(null, response);
            }
        })
    } else {
        callback("The item must have a numeric ID", null);
    }
}


//Update Item method.
const updateItem = (changes, id, callback) => {
    if(validateID(id)) {
        fetchOneByIDAndDelete(fileName, id, (error, response) => {
            if(error) {
                callback(error, null);
            } else {
                newItem = {
                    id: id,
                    name: changes.name.trim()
                }
                storeItem(newItem, fileName, (error, response)=> {
                    if(error) {
                        callback(error, null);
                    } else {
                        callback('The file was updated coorectly, the new name is: ' + newItem.name);
                        return;
                    }
                })
            }
        })  
    } else {
        callback("The item must have a numeric ID and a name larger than 3 words", null);
    }
}

const removeFile = (id, callback) => {
    deleteItem(fileName, id,  (error, response) => {
        if(error) {
            callback(error, null);
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