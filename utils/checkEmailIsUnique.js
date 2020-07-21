const readFile = require('./readfile');
const items = require('../controllers/items');
const fs = require('fs');

function checkEmailIsUnique(email, fileName, callback) {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(false, null);
        } else {
            for(user of response) {
                if(user.email === email) {
                    callback('This email is taken, choose another one', null);
                    return;
                }
            }
            callback(null, true);
        }
    })
}

module.exports = {
    checkEmailIsUnique
}