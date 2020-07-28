function generateToken(userID) {
    const date = Date.now().toString();
    const dateUserID = date + "." + userID;
    let buff = new Buffer(dateUserID);
    let base64data = buff.toString('base64');
    return base64data;
}

module.exports = generateToken;