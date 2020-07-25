const fs = require('fs');
const { iterateAndFindByEmail } = require('./iterateAndFindByEmail');
 

function getItemByEmail(fileName, email, callback) {
    iterateAndFindByEmail(email, fileName, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            callback(null, response);
        }
    })
}

module.exports = getItemByEmail;
