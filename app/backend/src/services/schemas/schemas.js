import Joi from 'joi';

const validateEmail = Joi.string().email();
const validatePassword = Joi.string().min(6);

export {
  validateEmail,
  validatePassword,
};
