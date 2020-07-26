const deleteUser = require('./deleteUser');
const storeItem = require('./storeitem');

function updateUser(user, fileName, callback) {
    deleteUser(fileName, user.email, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            storeItem(user, fileName, (error, response) => {
                if(error) {
                    callback(error, null);
                } else {
                    callback(null, {
                        message: 'User succesfully logged',
                        token: user.token
                    });
                }
            })
        }
    })
}

module.exports = updateUser;