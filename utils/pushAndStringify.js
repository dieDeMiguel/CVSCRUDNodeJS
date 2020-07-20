function pushAndStringify(item, array=[]) {
    arrayWithItem = array.push(item);
    
    return JSON.stringify(arrayWithItem);
}

module.exports = pushAndStringify;