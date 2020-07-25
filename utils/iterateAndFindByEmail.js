const readFile = require('./readfile');

function iterateAndFindByEmail(email, fileName, callback) {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(error, null); 
        } else {
            for(item of response) {
                if(item.email === email) {
                    callback(null, item);
                    return;
                } 
            } callback({
                message: 'User not found'
            }, null);
        }
    })   
}

module.exports = { iterateAndFindByEmail }