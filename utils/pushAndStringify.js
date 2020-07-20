function pushAndStringify(item, array=[]) {
    array.push(item);
    return JSON.stringify(array);
}

module.exports = {
    pushAndStringify
};