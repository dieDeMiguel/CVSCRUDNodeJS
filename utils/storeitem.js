const fs = require('fs');
const fileName = 'items.csv';

function storeItem(objectToStore, callback) {  
    //In this line the name of the object saved in the file is saved with the sanitized new name from objectToStore parameter 
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