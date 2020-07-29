
function spliceAndStringify(index, array) {
    array.splice(index, 1);
    return JSON.stringify(array, null, 2);
}

module.exports = spliceAndStringify;