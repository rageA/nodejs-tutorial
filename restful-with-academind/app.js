const express = require('express');
const app = express();

const productRoutes = require('./controllers/products');
const orderRoutes = require('./controllers/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;