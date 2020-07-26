function checkEmailAndFindIndex(item, email, array) {
    const isMatch = (item) => item.email == email;
    const index = array.findIndex(isMatch);

    return index;
}

module.exports = checkEmailAndFindIndex;