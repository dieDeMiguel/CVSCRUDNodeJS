const readFile = require('./readfile');
const findIndex = require('./findIndex');
const spliceAndStringify = require('./spliceAndStringify');
const writeFile = require('./writeFile');

function deleteObject(fileName, id, callback) {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            const item = response.find((item) => item.id == id);
            if(item == undefined) {
                callback('Unable ot find an object with the provided id', null)
            } else {
                const index = findIndex(item, id, response);
                response = spliceAndStringify(index, response);
                writeFile(fileName, response, (error, response)=> {
                    if(error) {
                        callback(error, null);
                    } else {
                        callback(null, 'Objecto with ID #:' + id + ' was removed from memory');
                    }
                })
            }
        }
    });
}

  module.exports = deleteObject;