const fs = require('fs');
const {storeItem} = require('../utils/storeitem');
const readFile = require('../utils/readfile');
const { validateIDName } = require('../utils/validateIDName');
const { validateID } = require('../utils/validateID');
const deleteItem = require('../utils/deleteItem');
const { getItemById } = require('../utils/getItemById');
const fileName="items.json"


const  createItem = (item, callback) =>{
    if(validateIDName(item.name, item.id)) {
       item.name = item.name.trim(); 
       storeItem(item, fileName, (error, response) => {
          if(error) {
              callback(error, null);
          } else {
              callback(null, response);
          }
       })
    } else {
        callback("The item must have a positive numeric ID and a name larger than 3 words", null);
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
        getItemById(fileName, id, (error, response) => {
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
        getItemById(fileName, id, (error, response) => {
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

const removeItem = (id, callback) => {
    deleteItem(fileName, id,  (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            callback(null, response);
        }
    })  
}
 
module.exports = {
    createItem,
    listItems,
    getItem,
    updateItem, 
    removeItem
};