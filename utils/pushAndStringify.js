function pushAndStringify(item, array=[]) {
    array.push(item);
    return JSON.stringify(array, null, 2);
}

module.exports = {
    pushAndStringify
};