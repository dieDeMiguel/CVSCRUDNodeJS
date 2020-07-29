const fs = require('fs');
  
function validateID(id, name = "") {
  if(id == parseInt(id) && name == "") {
    id = parseInt(id);
    return Number.isInteger(id);
  } else {
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
}

module.exports = validateID;