const fs = require('fs');

const storeItem = (id, name, callback) => {
    newItem = JSON.stringify({'id': id, 'name': name});
    const fileName = 'items.csv'
    fs.writeFile(fileName, newItem, (error) => {
      if(error) {
        callback('Error', error);
      }
      callback(null, newItem);
    })
  }
  


module.exports = storeItem