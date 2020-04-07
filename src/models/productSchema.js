const database = require('../config/databaseConfig');

const productSchemma = new database.Schema({
  createdDate: {
    type: Date,
    default: Date.now()
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  characteristics: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: String,
    required: true,
    trim: true
  },
  color: {
    type: String,
    required: true,
    trim: true
  },
  purchaseTagValue: {
    type: Number,
    required: true
  },
  amountPaidOnPurchase: {
    type: Number,
    required: true
  },
  valueForMargin: {
    type: Number
  },
  suggestedPrice: {
    type: Number,
    required: true
  }
});

const Product = new database.model('Product', productSchemma);

module.exports = Product;
