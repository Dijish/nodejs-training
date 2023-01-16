const express = require('express');

const Router = express.Router();

const users = [];

Router.get('/', (req, res, next) => {
    res.render('home', {
        docTitle: 'Home Page'
    });
});

Router.post('/users', (req, res, next) => {
    const { username } = req.body;
    users.push({ username });
    res.render('users', {
        users,
        docTitle: 'Users List'
    });
});

exports.routes = Router;
exports.users = users;

