const fs = require('fs');

function saveItem(item, callback) {
  const itemName = item.name.trim().toLowerCase();
  const itemId = item.id.trim();
  if(Number.isInteger(itemId) && itemName.length >3)  {
      const newItem = JSON.stringify({'id': itemId, 'name': itemName});
      const fileName = 'items.csv'
      fs.writeFile(fileName, newItem, (error) => {
          if(error) {
              callback('Error', error);
          }
          callback(null, newItem);
      });
  }  else if(!itemName && Number.isInteger(itemId)) {
      callback('The item must have a name', null);
    } else if(!itemId && itemName) {
      callback('The item must have an ID', null);
    } else if(itemName.length < 4 && Number.isInteger(itemId)) {
      console.log(itemName.length)
      callback('The name must have at least 4 words', null);
    } else if(!itemName && !itemId) {
        callback('The item must have a name and an Id', null);
    }
}
  


module.exports = saveItem;