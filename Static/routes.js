const path = require('path');

const express = require('express');

const Router = express.Router();

Router.get('/', (req, res, next) => {
    res.sendFile(path.resolve('home.html'));
});

Router.get('/users', (req, res, next) => {
    res.sendFile(path.resolve('users.html'));
});

module.exports = Router;
