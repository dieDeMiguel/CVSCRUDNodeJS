const readFile = require('./readfile');

function generateToken(id) {
    const date = Date.now().toString();
    const dateID = date + "." + id;
    let buff = new Buffer(dateID);
    let base64data = buff.toString('base64');
    return base64data;
}

module.exports = generateToken;