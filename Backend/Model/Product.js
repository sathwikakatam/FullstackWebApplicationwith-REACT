var MongoClient = require('mongoose');
const ProductSchema = new MongoClient.Schema({
  name: String,
  price: Number,
  images: [String],
  categories: [String],
  featured: Boolean,
});

module.exports.ProductModel = MongoClient.model('Product', ProductSchema);
