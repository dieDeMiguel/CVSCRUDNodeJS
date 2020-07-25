const fs = require('fs');
const checkEmailIsUnique = require('../utils/checkEmailIsUnique');
const storeItem = require('../utils/storeitem');
const getItemByEmail = require('../utils/getItemByEmail');
const fileName = 'users.json';

const createUser = (user, callback) => {
    if(!user.email) {
        return callback('The user must have en email', null)
    }
    checkEmailIsUnique(user.email, fileName, (error) => {
        if(error) {
            return callback(error, null);
        } 
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
        
    });
}

const login = (user, callback) => {
    getItemByEmail(fileName, user.email, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            if(response.password === user.password) {
                callback(null, {
                    message: "User succesfully logged"
                })
            } else {
                callback({
                    message: 'Wrong password'
                }, null);
            }
        }
    })
}


 
module.exports = {
    createUser,
    login
}