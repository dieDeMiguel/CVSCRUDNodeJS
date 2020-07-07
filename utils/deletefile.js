const fs = require('fs');

function deleteFile(fileName, callback) {
    fs.unlink(fileName, (err) => {
        if (err) throw err;
        callback(null, 'successfully deleted ' + fileName);
    });
}


  module.exports = deleteFile;