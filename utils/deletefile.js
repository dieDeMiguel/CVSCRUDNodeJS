const fs = require('fs');
const {fetchOneByIDAndDelete}  = require('./getoneitem');

function deleteItem(fileName, id, callback) {
     fetchOneByIDAndDelete(fileName, id, (error, response) => {
         if(error) {
            callback(error, null);
        } else {
            callback(null, response);
        }
    })
}

  module.exports = deleteItem;