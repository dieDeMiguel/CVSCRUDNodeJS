const fs = require('fs');

function storeItem(item, callback) {
    item.name = item.name.trim();
    stringItem = JSON.stringify(item);
    const fileName = 'items.csv';
    fs.writeFile(fileName, stringItem, (error) => {
        if(error) {
            callback(error);
        }
    });
}


module.exports = storeItem;