const checkIfUnique = require('../utils/checkIfUnique');
const storeItem = require('../utils/storeitem');
const find = require('../utils/find');
const fileName = 'users.json';
const generateToken = require('../utils/generateToken');
const updateUser = require('../utils/updateUser');

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
                    id: user.id,
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email
                })
            }
        });
        
    });
}

const login = (user, callback) => {
    find(user.id.toString(), fileName, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            if(response.password === user.password) {
                user = response;
                user.token = generateToken(user.id.toString());   
                updateUser(user, fileName, (error, response) => {
                    if(error) {
                        callback(error, null);
                    } else {
                        callback(null, response)
                    }
                });
            } else {
                callback({
                    message: 'Wrong password'
                }, null);
            }
        }
    });
}
 
module.exports = {
    createUser,
    login
}