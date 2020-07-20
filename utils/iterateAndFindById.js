const readFile = require('./readfile');

function iterateAndFindById(id, fileName, callback) {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(error, null); 
        } else {
            for(item of response) {
                item.id = item.id.toString();
                if(item.id === id) {
                    callback(null, item);
                    return;
                } 
            } callback('Unable to find an Item with the provided ID');
        }
    })   
}

module.exports = iterateAndFindById;