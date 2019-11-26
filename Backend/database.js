var users = require('./data').users;
var products = require('./data').products;
var ProductModel = require('./Model/Product').ProductModel;
var UserModel = require('./Model/User').UserModel;
//calling mongoose install mongoose with npm install mongoose
var MongoClient = require('mongoose');
//creating url where it has to host
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
//connecting for mongodb
var db = MongoClient.connection;
db.on('error', error => {
    console.log("error");
});
//MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
//if (err) throw err;
db.once('open', function () {
    console.log("Database created!");
    UserModel.insertMany(users, (error) => {
        if (error) {
            console.log("users didn't load");
        }
        else {
            console.log("users created");
        }
    });
    ProductModel.insertMany(products, (error) => {
        if (error) {
            console.log("products didn't load")
        }

        else {
            console.log("products created");
        }
    });
});
module.exports.db;
console.log("exported");
    //If everything is success the data will be saved in mongoDb with the name db