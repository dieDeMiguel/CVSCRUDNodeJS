const readFile = require('./readfile');
const findIndex = require('./findIndex');
const spliceAndStringify = require('./spliceAndStringify');
const writeFile = require('./writeFile');

function deleteObject(fileName, id, callback) {
    fileName == 'items.json' ? fileName = 'items.json' : fileName = 'users.json';
    readFile(fileName, (error, response) => {
        if(error) {
            callback(error, null);
        } else {
            if(id == parseInt(id, 10)) {
                console.log(id)
                const item = response.find((item) => item.id == id);
                if(item == undefined) {
                    callback('Unable ot find an item with the provided id', null)
                } else {
                    const index = findIndex(item, id, response);
                    response = spliceAndStringify(index, response);
                    writeFile(fileName, response, (error, response)=> {
                        if(error) {
                            callback(error, null);
                        } else {
                            callback(null, 'Item #:' + id + ' was removed from memory');
                        }
                    })
                }
            } else {
                readFile(fileName, (error, response) => {
                    if(error) {
                        callback(error, null);
                    } else {
                        const item = response.find((user)=>user.email == id);
                        if(item == undefined) {
                            callback('Unable to find a User with the provided email', null);
                        } else {
                            const index = findIndex(item, id, response);
                            response = spliceAndStringify(index, response);
                            console.log('response dentro deleteObject en la parte de email', response)
                            writeFile(fileName, response, (error) => {
                                if(error) {
                                    callback(error, null);
                                } else {
                                    callback(null, 'The User with email: ' + id + ' was removed from memory');
                                }
                            })
                        }
                    }
                })
                
            }
        }
    })
}

  module.exports = deleteObject;