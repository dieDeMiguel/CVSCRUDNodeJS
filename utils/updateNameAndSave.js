const { readFile } = require('./readfile');

const pushAndStringify = require('./pushAndStringify');

function updateNameAndSave(item, fileName, id, callback) {
    readFile(fileName, (error, response) => {
        if(error) {
            callback(error, null)
        } else {
            pushAndStringify(item, response, (error, response)=> {
                if(error) {
                    callback(error, null);
                } else {
                    callback(null, response);
                }
            })
        }
    })
}

module.exports = {
    updateNameAndSave
}