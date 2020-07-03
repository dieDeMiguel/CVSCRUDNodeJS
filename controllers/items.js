const fs = require('fs');

const storeItem = require('../utils/storeitem');
const readFile = require('../utils/readfile');
const validateData = require('../utils/validation');
const fetchOneByID = require('../utils/getoneitem');

const  createItem = (item, callback) =>{
    if(validateData(item)) {
       storeItem({item}, (error, response) => {
          if(error) {
              callback(error, null);
          } else {
              callback(null, response);
          }
       });
    }
}

const readFileFromMemory = (fileName, callback) => {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(error, null)
        } else {
            callback(null, response);
        }
    })
}

const getByID = (fileName, id, callback) => {
    const item = {
        id: id,
        name: fileName
    }
    if(validateData(item)) {
        fetchOneByID(item, (error, response) => {
            if(error) {
                callback(error, null);
            } else {
                callback(null, response);
            }
        })
    }
}

module.exports = {
    createItem: createItem,
    readFileFromMemory: readFileFromMemory,
    getByID: getByID
};