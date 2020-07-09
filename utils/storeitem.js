const fs = require('fs');
const readFile = require('./readfile');

function storeItem(objectToStore, fileName, callback) {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(error, null)
        } else {
            itemsArray = response;
            itemsArray.push(objectToStore);
            itemsArray = JSON.stringify(itemsArray);
            fs.writeFile(fileName, itemsArray, (error)=> {
                if(error) {
                    callback(error, null);
                } else {
                    callback(null, 'The object with ID: #' + objectToStore.id + ' has been saved to memory');
                    return;
                }
            });
        }
    })         
} 

function storeAfterDeleting(objectsToStore, fileName, callback) {
    fs.writeFile(fileName, objectsToStore, (error) => {
        if(error) {
            callback('Something went wrong while storing the changes in the file');
        } callback(null, 'The file was updated');
    })
}


module.exports = {
    storeItem: storeItem,
    storeAfterDeleting: storeAfterDeleting
};