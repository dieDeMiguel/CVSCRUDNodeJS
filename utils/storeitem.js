const fs = require('fs');

function storeItem(objectToStore, callback) {   
    objectToStore.name = objectToStore.name.trim();
    stringItem = JSON.stringify(objectToStore);
    fs.writeFile(objectToStore.fileName, stringItem, (error, response) => {
        if(error) {
            callback('There was an error', null);
        } else {
            callback(null, 'Object stored correctly. Object name: "' + objectToStore.name + '". Object ID: "' + objectToStore.id + '"');
        }
    })
}


module.exports = storeItem;