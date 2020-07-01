const fs = require('fs');
const { call } = require('../app');

const readFile = (fileName, callback) => {
   fs.readFile(fileName, (error, data) => {
       if(error) {
           callback('The file couldn\'t be read', null);
       } else {
           callback(null, {
               item : {
                   id: data.id, 
                   name: data.name
            }
           })
       }
    })
}
  


module.exports = readFile