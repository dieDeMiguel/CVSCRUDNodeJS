const checkIfUnique = require('../utils/checkIfUnique');
const storeItem = require('../utils/storeitem');
const find = require('../utils/find');
const generateToken = require('../utils/generateToken');
const updateUser = require('../utils/updateUser');
const findUserByToken = require('../utils/findUserByToken');
const { response } = require('express');
const fileName = 'users.json';

const createUser = (user, callback) => {
    if(!user.email) {
        return callback('The user must have en email', null)
    }
    if(!user.userID) {
        return callback('The user must have a "userID"');
    }
    checkIfUnique(user.userID, fileName, (error) => {
        if(error) {
            return callback(error, null);
        } 
        storeItem(user,fileName, (error) => {
            if(error) {
                callback(error, null);
            } else {
                callback(null, {
                    userID: user.userID,
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
                const token = generateToken(response.userID);
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

const getProfile = (token, callback) => {
    if(!token){
        callback('The token must be declared', null);
    }
    findUserByToken(token, fileName, (error, response) => {
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