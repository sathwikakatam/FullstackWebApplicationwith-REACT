const express = require('express');
const cors = require('cors');
const app = express();

const mongo = require('mongoose');
const userModel = require('./Model/User').UserModel;
const productModel = require('./Model/Product').ProductModel;
const db = require('./database').db;
const port = 5000;
app.use(cors())
app.get('/product', async (req, res) => {
    const products = await productModel.find() || [];
    res.send(products);
});
app.get('/product/:id', async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);

        res.send(product);


    }
    catch (e) {
        res.status("404").end();
    }

});
app.get('/users', async (req, res) => {
    const users = await userModel.find() || [];
    res.send(users);
});
app.get('/users/:id', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);

        res.send(user);


    }
    catch (e) {
        res.status("404").end();
    }

});
app.listen(port, () => console.log("listening"));
