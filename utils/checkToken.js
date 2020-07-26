const getItemByEmail = require('./getItemByEmail');

function checkToken(email, token, fileName, callback) {
    getItemByEmail(fileName, email, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            if(response.token == token) {
                callback(null, {
                    email: response.email,
                    name: response.name,
                    lastName: response.lastName,
                });
            } else {
                callback('The token doesn\'t match our records', null);
            }
        }
    })
}

module.exports = checkToken;