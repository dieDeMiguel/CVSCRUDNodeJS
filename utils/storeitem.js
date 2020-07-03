const fs = require('fs');

function storeItem(objectToStore, callback) {
    objectToStore.item.name = objectToStore.item.name.trim();
    stringItem = JSON.stringify(objectToStore.item);
    const fileName = 'items.csv';
    fs.writeFile(fileName, stringItem, (error, response) => {
        if(error) {
            callback('There was an error', null);
        } else {
            callback(null, 'Object stored correctly. Object name: "' + objectToStore.item.name + '". Object ID: "' + objectToStore.item.id + '"');
        }
    });
}


module.exports = {
    storeItem: storeItem
}