const { body } = require('express-validator');

const createValidationSchema = {
  name: {
    isString: {
      errorMessage: 'Name must be a string'
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty'
    }
  },
  dname: {
    isString: {
      errorMessage: 'Course must be a string'
    },
    notEmpty: {  
      errorMessage: 'Course cannot be empty'
    }
  }
};

module.exports = {
  createValidationSchema
};