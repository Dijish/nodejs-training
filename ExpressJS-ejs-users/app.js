const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routesData = require('./routes');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routesData.routes);

app.listen(3000);
