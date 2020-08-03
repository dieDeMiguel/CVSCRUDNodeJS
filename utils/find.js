const readFile = require('./readfile');

function find(id, fileName, callback) {
    if(typeof id === Number) {
        readFile(fileName, (error, response) => {
            if(error) {
                callback(error, null); 
            } else {
                id == parseInt(id, 10);
                item = response.find((item) => item.id == id);
                if(item === undefined) {
                    callback('Unable to find an object with the provided ID', null);
                } else {
                    callback(null, item);
                } 
            }  
        });
    } else {
        readFile(fileName, (error, response) => {
            if(error) {
                callback(error, null); 
            } else {
                id == parseInt(id, 10);
                item = response.find((item) => item.email == id);
                if(item === undefined) {
                    callback('Unable to find an object with the provided ID', null);
                } else {
                    callback(null, item);
                } 
            }  
        });
    }
}

module.exports = find;