const fs = require('fs');
const {checkEmailIsUnique} = require('../utils/checkEmailIsUnique');
const { storeItem } = require('../utils/storeitem');
const { makeUserObject } = require('../utils/makeUserObject');
const fileName = 'users.json';

const createUser = (name, lastName, email, password, callback) => {
    checkEmailIsUnique(email, fileName, (error) => {
        if(error) {
            callback(error, null);
            return;
        } else {
            newUser = makeUserObject(name, lastName, email, password);
            storeItem(newUser,fileName, (error, response) => {
                if(error) {
                    callback(error, null);
                } else {
                    callback(null, response);
                }
            });
        }
    });
}

module.exports = {
    createUser
}