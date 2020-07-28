const readFile = require('./readfile');
const items = require('../controllers/items');
const fs = require('fs');

function checkIfUnique(id, fileName, callback) {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(false, null);
        } else {
            if(id == parseInt(id)) {
                console.log('id', id)
                item = response.find((item) => item.id == id);
                if(item === undefined) {
                    callback(null, true);
                } else {
                    callback('This id is taken, choose another one', null);
                }
            } else {
                const user = response.find(user => user.email == id);
                if(user === undefined) {
                    callback(null, true);
                } else {
                    callback('This email is taken, choose another one', null);
                }
            }
        }
    });
}

module.exports = checkIfUnique;