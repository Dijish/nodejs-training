const express = require('express');

const adminController = require('../controllers/admin');

const Router = express.Router();

Router.get('/add-product', adminController.getAddProducts);
Router.post('/product', adminController.postAddProduct);
Router.get('/product-list', adminController.getProducts);
Router.get('/edit-product/:productId', adminController.getEditProducts);
Router.post('/edit-product', adminController.postEditProducts);
Router.post('/delete-product', adminController.postEditProducts);

exports.routes = Router;
