
function spliceAndStringify(index, array) {
    array.splice(index, 1);
    return JSON.stringify(array);
}

module.exports = spliceAndStringify;