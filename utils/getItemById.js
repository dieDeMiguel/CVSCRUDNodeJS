const fs = require('fs');
const iterateAndFindById = require('./iterateAndFindById');
 

function getItemById(fileName, id, callback) {
    iterateAndFindById(id, fileName, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            callback(null, response);
        }
    })
}

module.exports = getItemById;
