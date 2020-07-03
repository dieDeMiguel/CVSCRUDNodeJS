const fs = require('fs');
const readFile = require('./readfile');

function fetchOneByID(item, callback) {
    readFile(item.name, (error, response) => {
        if(error) {
            callback(error, null)
        } else {
            //Yes Charly, I know the next line is crazy, the reason why I choosed this approach I can explain
            const file = JSON.parse(Buffer.from(response.toString('base64'), 'base64').toString('ascii'));

            for(itemInFile of file ) {
                //why does the statement "file.id == item.id" is only true with 2 equal signs and not with 3?
                if(itemInFile.id == item.id) {
                    callback(null, itemInFile);
                } 
            }  
            callback('Unable to find an Object whithin the file with the provided ID', null);  
        }
    })
}

module.exports = fetchOneByID;