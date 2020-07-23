function checkIDAndFindIndex(item, id, array) {
    const isMatch = (item) => item.id == id;
    const index = array.findIndex(isMatch);

    return index;
}

module.exports = {
    checkIDAndFindIndex
};