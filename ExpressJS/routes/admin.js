const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const Router = express.Router();

const products = [];

Router.get('/add-product', (req, res, next) => {
    res.render('add-product', { 
        docTitle: "Add Product", 
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true,
    });
});

Router.post('/product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = Router;
exports.products = products;
