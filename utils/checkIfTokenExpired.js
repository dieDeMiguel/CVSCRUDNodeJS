function checkIfTokenExpired(token) {
    token = token.split(' ')[1];
    token = Buffer.from(token, 'base64').toString('ascii');
    timeStamp = token.split('.')[0];
    if( Date.now() - timeStamp > 3600000) {
        return false
    } else {
        return true;
    }
}

module.exports = checkIfTokenExpired;