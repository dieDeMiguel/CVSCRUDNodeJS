const fs = require('fs');
  
function validateDataName(name, id) {
  id = parseInt(id);
  name = name.trim();
  if(id.length == 0 || name.length == 0) {
    return false;
  } else if(name.length < 4 && Number.isInteger(id)) {
    return false;
  } else if(id && name.length >3)  {
    return true;
  } 
}

function validateID(id=1) {
  id = parseInt(id);
  return Number.isInteger(id);
}

  
module.exports = {
  validateDataName: validateDataName,
  validateID: validateID
}