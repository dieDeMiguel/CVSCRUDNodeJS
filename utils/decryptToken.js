const find = require('./find');
const getUserIDFromToken = require('./getUserIDFromToken');
const checkIfTokenExpired = require('./checkIfTokenExpired');

function decryptToken(token, fileName, callback) {
    if(checkIfTokenExpired(token)) {
        id = getUserIDFromToken(token);
        find(id, fileName, (error, response) => {
            if(error) {
                callback(error, null);
            } else {
                callback(null, {
                    id: response.id,
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

module.exports = decryptToken;