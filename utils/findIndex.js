function findIndex(item, key, array) {
    if(key == parseInt(key)) {
        const isMatch = (item) => item.id == key;
        const index = array.findIndex(isMatch);
        return index;
        
    } else {
        const isMatch = (item) => item.email == key;
        const index = array.findIndex(isMatch);
        return index;
    }
    
}

module.exports = findIndex;