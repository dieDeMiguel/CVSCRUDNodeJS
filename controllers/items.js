const fs = require('fs');
const storeItem = require('../utils/storeitem');
const readFile = require('../utils/readfile');
const validateIDName = require('../utils/validateIDName');
const validateID = require('../utils/validateID');
const deleteItem = require('../utils/deleteItem');
const getItemById = require('../utils/getItemById');
const createNewItem = require('../utils/createNewItem');
const fileName = "items.json";


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
        deleteItem(fileName, id, (error) => {
            if(error) {
                callback(error, null);
            } else {
                const newItem = createNewItem(changes.name, id);
                storeItem(newItem, fileName, (error, response) => {
                    if(error) {
                        callback(error, null);
                    } else {
                        callback(null, response);
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