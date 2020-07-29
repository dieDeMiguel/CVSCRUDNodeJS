const fs = require('fs');
const storeItem = require('../utils/storeitem');
const readFile = require('../utils/readfile');
const validateID = require('../utils/validateID');
const deleteObject = require('../utils/deleteObject');
const find = require('../utils/find');
const createNewItem = require('../utils/createNewItem');
const checkIfUnique = require('../utils/checkIfUnique');
const fileName = "items.json";


const  createItem = (item, callback) =>{
    if(validateID(item.id, item.name)) {
       checkIfUnique(item.id, fileName, (error, response) => {
            if(error) {
                callback(error, null);
            } else {
                storeItem(item, fileName, (error, response) => {
                    if(error) {
                        callback(error, null);
                    } else {
                        callback(null, response);
                    }
                });
            }
       })
    } else {
        callback('The ID must be numeric and the name must have at lest 4 words');
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
        find(id, fileName, (error, response) => {
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
        deleteObject(fileName, id, (error) => {
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
    deleteObject(fileName, id,  (error, response) => {
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