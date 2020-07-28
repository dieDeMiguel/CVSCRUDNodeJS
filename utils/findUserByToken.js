const find = require('./find');
const getUserIDFromToken = require('./getUserIDFromToken');
const checkIfTokenExpired = require('../utils/checkIfTokenExpired');

function findUserByToken(token, fileName, callback) {
    if(checkIfTokenExpired(token)) {
        userID = getUserIDFromToken(token);
        find(userID, fileName, (error, response) => {
            if(error) {
                callback(error, null);
            } else {
                callback(null, {
                    userID: response.userID,
                    name: response.name,
                    lastName: response.lastName,
                    email: response.email
                });
            }
        });  
    } else {
        callback('The token has expired after one hour', null);
    }
}

module.exports = findUserByToken;