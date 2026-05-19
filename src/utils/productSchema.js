import Joi from "joi";

const productSchema = Joi.object({

  name: Joi.string()
    .min(2)
    .max(50)
    .required(),

  price: Joi.number()
    .min(1)
    .required(),

  category: Joi.string()
    .required(),

  image: Joi.string()
    .required()

});

export default productSchema;