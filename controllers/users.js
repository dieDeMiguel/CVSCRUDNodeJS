const fs = require('fs');
const { checkEmailIsUnique } = require('../utils/checkEmailIsUnique');
const { storeItem } = require('../utils/storeitem');
const { makeUserObject } = require('../utils/makeUserObject');
const { getItemByEmail } = require('../utils/getItemByEmail');
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

const getUser = (email, callback) => {
    getItemByEmail(fileName, email, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            callback(null, response);
        }
    })
}

module.exports = {
    createUser,
    getUser
}