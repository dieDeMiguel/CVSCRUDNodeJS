const find = require('./find');

function findUserByToken(token, fileName, callback) {
    token = token.split(' ')[1];
    token = Buffer.from(token, 'base64').toString('ascii');
    email = token.split('.')[1] + "." + token.split('.')[2];
    find(email, fileName, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            callback(null, {
                email: response.email,
                name: response.name,
                lastName: response.lastName,
            });
        }
    });
}

module.exports = findUserByToken;