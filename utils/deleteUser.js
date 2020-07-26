const readFile = require('./readfile');
const checkEmailAndFindIndex = require('./checkEmailAndFindIndex');
const spliceAndStringify = require('./spliceAndStringify');
const writeFile = require('./writeFile');


function deleteUser(fileName, email, callback) {
   readFile(fileName, (error, response) => {
       if(error) {
           callback(error, null);
       } else {
            const index = checkEmailAndFindIndex(item, email, response);
            if(index != -1) {
                const array = spliceAndStringify(index, response);
                writeFile(fileName, array, (error, response) => {
                    if(error) {
                        callback(error, null);
                    } else {
                        callback(null, response);
                    }
                });
            } else {
                callback('Unable to find an object with email: ' + email + ' in the file', null);
            } return ;
       }
   })
}

module.exports = deleteUser;