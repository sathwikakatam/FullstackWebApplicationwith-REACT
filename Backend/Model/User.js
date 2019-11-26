var MongoClient = require('mongoose');
const UserSchema = new MongoClient.Schema({
  email: String,
  username: String,
  role: String,
});

module.exports.UserModel = MongoClient.model('User', UserSchema);
