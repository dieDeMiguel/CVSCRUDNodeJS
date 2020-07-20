function createNewItem(name, id) {
    name = name.trim();
    newItem = {
        id: id,
        name: name
    }
    return newItem;
}

module.exports = {
    createNewItem
};