const fs = require('fs');
const { checkEmailIsUnique } = require('../utils/checkEmailIsUnique');
const { storeItem } = require('../utils/storeitem');
const { getItemByEmail } = require('../utils/getItemByEmail');
const { readFile } = require('../utils/readfile');
const { deleteItem } = require('../utils/deleteItem');
const fileName = 'users.json';

const createUser = (user, callback) => {
    checkEmailIsUnique(user.email, fileName, (error) => {
        if(error) {
            return callback(error, null);
        } else {
            storeItem(user,fileName, (error, response) => {
                if(error) {
                    callback(error, null);
                } else {
                    callback(null, {
                        name: user.name,
                        lastName: user.lastName,
                        email: user.email
                    })
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

const getAllUsers = (callback) => {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            callback(null, response);
        }
    });
}

const updateUser = (data, callback) => {
    getItemByEmail(fileName, data.email, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            deleteItem
            if(data.name) {
                response.name = data.name;
            } 
            if(data.lastName) {
                response.lastName = data.lastName;
            } 
            if(data.password) {
                response.password = data.password;
            } 
            storeItem(response, fileName, (error, response) => {
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
    createUser,
    getUser,
    getAllUsers, 
    updateUser
}