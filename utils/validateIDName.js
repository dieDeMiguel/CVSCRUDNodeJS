const fs = require('fs');
  
function validateIDName(name, id) {
  id = parseInt(id);
  name = name.trim();
  if(id < 1 || name.length < 4) {
    return false;
  } else if(name.length < 4 && Number.isInteger(id)) {
    return false;
  } else if(id && name.length >3)  {
    return true;
  } 
}

module.exports = {
  validateIDName
}