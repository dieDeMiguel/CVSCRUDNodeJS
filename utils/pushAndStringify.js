function pushAndStringify(item, array=[]) {
    arrayWithItem = array.push(item);
    
    return JSON.stringify(array);
}

module.exports = pushAndStringify;