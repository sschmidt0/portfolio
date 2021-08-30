const Validator = require('validator');
const isEmpty = require('is-empty');

export const validateInput = (data) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.fullName = !isEmpty(data.fullName) ? data.fullName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.message = !isEmpty(data.message) ? data.message : "";

  // Name checks
  if (Validator.isEmpty(data.fullName)) {
    errors.fullName = "Introduzca un nombre";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Introduzca un correo electrónico";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "El correo electrónico no es válido";
  }
  // Message checks
  if (Validator.isEmpty(data.message)) {
    errors.message = "Introduzca un mensaje";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
