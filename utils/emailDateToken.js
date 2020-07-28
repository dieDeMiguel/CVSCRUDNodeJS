function emailDateToken(email) {
    const date = Date.now().toString();
    const dateEmail = date + "." + email;
    let buff = new Buffer(dateEmail);
    let base64data = buff.toString('base64');
    return base64data;
}

module.exports = emailDateToken;