const fs = require('fs');
  
function validateDataName(name, id) {
  id = parseInt(id);
  name = name.trim();
  if(id.length == 0 || name.length == 0) {
    return false
  } else if(name.length < 4 && Number.isInteger(id)) {
    return false
  } else if(id && name.length >3)  {
    return true;
  } 
}

function validateDataFileName(fileName, id=1) {
  fileName = fileName.trim();
  id = parseInt(id);
  //console.log(fileName, id)
  if(!Number.isInteger(id) || fileName.length <6) {
    return false
  } else if(Number.isInteger(id) && fileName.length > 5)  {
    return true;
  } 
}
  
module.exports = {
  validateDataName: validateDataName,
  validateDataFileName: validateDataFileName
}