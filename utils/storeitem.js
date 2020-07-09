const fs = require('fs');
const readFile = require('./readfile');

function storeItem(objectToStore, fileName, callback) {
    fs.access(fileName, (err) => {
        if (!err) {
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
        } else {
            const firstItem = [ {"id":0, "name": "#"} ];
            fs.writeFile(fileName, JSON.stringify(firstItem), (error) => {
                if(error) {
                    callback(error);
                    return;
                } else {
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