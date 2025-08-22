const Joi = require('joi');

const couponSchema = Joi.object({
  code: Joi.string(),
  amount: Joi.string(),
  discount_type: Joi.array().items(Joi.string()),
  description: Joi.string(),
});

module.exports = { couponSchema };