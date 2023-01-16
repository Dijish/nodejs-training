const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('admin/edit-product', { 
        docTitle: "Add Product", 
        path: '/admin/add-product',
        editing: false
    });
};

exports.postAddProduct = (req, res, next) => {
    const { title, imageUrl, price, desc } = req.body;
    const product = new Product(null,title,imageUrl,desc, price );
    product.save();
    res.redirect('/');
};

exports.getEditProducts = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(+prodId, product => {
        console.log('product: ', product);
        if (!product) {
            res.redirect('/');
        }
        res.render('admin/edit-product', { 
            docTitle: "Edit Product", 
            path: '/admin/edit-product',
            editing: editMode,
            product
        });
    });
};

exports.postEditProducts = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.desc;
    const updatedPrice = req.body.price;
    const updatedProd = new Product(
        +prodId,
        updatedTitle,
        updatedImageUrl,
        updatedDesc,
        updatedPrice
    );
    updatedProd.save();
    res.redirect('/admin/product-list')
};

exports.postDeleteProducts = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deletById(prodId);
    res.redirect('/admin/product-list');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/product-list', {
            path: 'admin/product-list',
            docTitle: 'Products List',
            prods: products
        });
    });
};