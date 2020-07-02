const fs = require('fs');

const storeItem = require('../utils/storeitem');
const readFile = require('../utils/readfile');
const validateData = require('../utils/validation');

function createItem(item, callbackFunction) {
    if(validateData(item)) {
       return callbackFunction(item);
    }
}

module.exports = {
    createItem: createItem
};