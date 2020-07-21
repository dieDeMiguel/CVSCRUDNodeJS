function makeUserObject(name, lastName, email, password) {
    newUser = {
        name: name,
        lastName: lastName,
        email: email,
        password: password
    };
    return newUser;
}

module.exports = {
    makeUserObject
};