const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const Router = express.Router();

Router.get('/', (req, res, next) => {
    console.log(adminData.products);
    const { products } = adminData;
    res.render('shop', { 
        prods: products, 
        docTitle: "Shop", 
        path: '/', 
        hasProducts: products.length > 0,
        activeShop: true,
    });
});

module.exports = Router;

