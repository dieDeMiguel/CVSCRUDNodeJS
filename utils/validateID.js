const fs = require('fs');

function validateID(id=1) {
  id = parseInt(id);
  return Number.isInteger(id);
}

module.exports = {
    validateID
}