const express = require('express');

const Product = require('../models/productSchema');

const { validate, ValidationError, Joi } = require('express-validation');

const router = express.Router();

const productValidation = {
  body: Joi.object({
    type: Joi.string().required(),
    brand: Joi.string().required(),
    characteristics: Joi.string().required(),
    size: Joi.string().required(),
    color: Joi.string().required(),
    purchaseTagValue: Joi.number().required(),
    amountPaidOnPurchase: Joi.number().required(),
    suggestedPrice: Joi.number().required()
  })
};

router.get('/', async (req, resp) => {
  try {
    const products = await Product.find();
    resp.json(products);
  } catch (erro) {
    console.log(err);
    resp.status(500).json({ message: 'Error using database' });
  }
});

module.exports = app => {
  app.use('/products', router);
  app.use(function(err, req, resp, next) {
    if (err instanceof ValidationError) {
      return resp.status(err.statusCode).json(err);
    }

    return resp.status(500).json(err);
  });
};
