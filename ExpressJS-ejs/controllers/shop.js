const Cart = require('../models/cart');
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', { 
            prods: products, 
            docTitle: "Shop", 
            path: '/',
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = parseFloat(req.params.productId);
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product,
            docTitle: product.title,
            path: '/product-detail'
        });
    });
    
};

exports.getIndex =  (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', { 
            prods: products, 
            docTitle: "Shop", 
            path: '/products',
        });
    });
};

exports.getCart = (req, res, next) => {
    Cart.getProducts(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for(let product of products) {
                const cartProductData = cart.products.find(p => +p.id === product.id);
                if (cartProductData) {
                    cartProducts.push({productData: product, qty: cartProductData.qty});
                }
            }
            console.log(cartProducts);
            res.render('shop/cart', {
                path: '/cart',
                docTitle: 'Your Cart',
                products: cartProducts
            });
        });
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(+prodId, product => {
        console.log(product);
        Cart.addProduct(prodId, product.price);
        res.redirect('/cart');
    });
};

exports.postCartDeleteItem = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(+prodId, product => {
        Cart.deleteProduct(prodId, product.price);
        res.redirect('/cart');
    });
};

exports.getCheckout= (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        docTitle: 'Checkoout'
    });
};

exports.getOrders= (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        docTitle: 'All Orders'
    });
};
