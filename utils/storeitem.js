const fs = require('fs');
const fileName = 'items.csv';

function storeItem(objectToStore, callback) {   
    objectToStore.name = objectToStore.name.trim();
    stringItem = JSON.stringify(objectToStore);
    fs.writeFile(fileName, stringItem, (error, response) => {
        if(error) {
            callback('There was an error', null);
        } else {
            callback(null, 'Object stored correctly. Object name: "' + objectToStore.name + '". Object ID: "' + objectToStore.id + '"');
        }
    })
}

module.exports = storeItem;