const checkIfUnique = require('../utils/checkIfUnique');
const storeItem = require('../utils/storeitem');
const find = require('../utils/find');
const emailDateToken = require('../utils/emailDateToken');
const updateUser = require('../utils/updateUser');
const checkToken = require('../utils/checkToken');
const { response } = require('express');
const fileName = 'users.json';

const createUser = (user, callback) => {
    if(!user.email) {
        return callback('The user must have en email', null)
    }
    checkIfUnique(user.email, fileName, (error) => {
        if(error) {
            return callback(error, null);
        } 
        storeItem(user,fileName, (error) => {
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
    find(user.email, fileName, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            if(response.password === user.password) {
                const token = emailDateToken(response.email);
                response.token = token
                updateUser(response, fileName, (error, response) => {
                    if(error) {
                        callback(error, null);
                    } else {
                        callback(null, response)
                    }
                })
            } else {
                callback({
                    message: 'Wrong password'
                }, null);
            }
        }
    })
}

const getProfile = (email, token, callback) => {
    if(!token){
        callback('The token must be declared', null);
    }
    checkToken(email, token, fileName, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            callback(null, response);
        }
    })
}


 
module.exports = {
    createUser,
    login,
    getProfile
}