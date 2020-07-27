const readFile = require('./readfile');

function find(id, fileName, callback) {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(error, null); 
        } else {
            if(id == parseInt(id, 10)) {
                item = response.find((item) => item.id == id);
                if(item === undefined) {
                    callback('Unable to find an item with the provided ID', null);
                } else {
                    callback(null, item);
                }
            } else {
                user = response.find((user) => user.email == id);
                if(user === undefined) {
                    callback('Unable to find a user with the provided email', null);
                } else {
                    callback(null, user);
                }
            }
        }
    });   
}

module.exports = find;