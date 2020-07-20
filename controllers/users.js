const fs = require('fs');
const checkEmailIsUnique = require('../utils/checkEmailIsUnique');
const fileName = 'users.js';

const createUser = (name, lastName, email, password) => {
    console.log(checkEmailIsUnique(email, fileName));
    return;
    newUser = {
        name: name,
        lastName: lastName,
        email: email,
        password: password
    }
    fs.writeFile(fileName, newUser)
}

module.exports = {
    createUser
}