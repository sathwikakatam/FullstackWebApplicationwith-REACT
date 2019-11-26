var MongoClient = require('mongoose');
const OrderSchema = new MongoClient.Schema({
  customer: Schema.Types.ObjectId,
  timestamp: String,
  products: [{
    _id: Schema.Types.ObjectId,
    name: String,
    price: Number,
    images: [String],
  }],
  contact: {
    fullName: String,
    phoneNumber: String,
  },
  shippingAddress: {
    country: String,
    city: String,
    addressLine1: String,
    addressLine2: String,
    postalCode: String,
  },
});

module.exports.OrderModel = MongoClient.model('Order', OrderSchema);
