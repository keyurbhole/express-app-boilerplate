/**
 * Get unique error field name
 * @param {Object} error 
 */
const getUniqueErrorMessage = (error) => {
  let output;

  try {
    let fieldName = error.errmsg.substring(error.errmsg.lastIndexOf('.$') + 2, error.errmsg.lastIndexOf('_1'));
    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';

  } catch (ex) {
    output = 'Unique field already exists';
  }

  return output;
};

/**
 * Get the error message from error object
 * @param {Object} error 
 */
const getErrorMessage = (error) => {
  let message = '';

  if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        message = getUniqueErrorMessage(error);
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (let errName in error.errors) {
      if (error.errors[errName].message) {
        message = error.errors[errName].message;
      }
    }
  }

  return message;
};

export default getErrorMessage;
