function getUserIDFromToken(token) {
    token = token.split(' ')[1];
    token = Buffer.from(token, 'base64').toString('ascii');
    return token.split('.')[1];
}

module.exports = getUserIDFromToken;