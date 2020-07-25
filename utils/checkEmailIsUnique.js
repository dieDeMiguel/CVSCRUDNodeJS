const readFile = require('./readfile');
const items = require('../controllers/items');
const fs = require('fs');

function checkEmailIsUnique(email, fileName, callback) {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(false, null);
        } else {
            const valueOrUndefined = response.find(user => user.email == email);
            if(valueOrUndefined == undefined) {
                callback(null, true)
            } else {
                callback('This email is taken, choose another one', null);
            }
        }
    })
}

module.exports = checkEmailIsUnique;