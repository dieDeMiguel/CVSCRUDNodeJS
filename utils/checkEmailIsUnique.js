const readFile = require('./readfile');

function checkEmailIsUnique(email, fileName, callback) {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            for(user of response) {
                console.log('user.id', user.id);
            }
        }
    })
}

module.exports = {
    checkEmailIsUnique
}