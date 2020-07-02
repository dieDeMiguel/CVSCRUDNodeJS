const fs = require('fs');
  
function validateItem(item){
  item.name = item.name.trim();
  if(!item.id || !item.name) {
    return({
      error: "The item must have and ID and a name"
    });
  } else if(item.name.length < 4 && Number.isInteger(item.id)) {
    throw new Error('The name must be at least 4 words long');
  } else if(item.id && item.name.length >3)  {
    return true;
  } 
}
  


module.exports = validateItem;