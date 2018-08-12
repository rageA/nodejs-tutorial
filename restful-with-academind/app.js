const express = require('express');
const app = express();
const morganLogging = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./controllers/products');
const orderRoutes = require('./controllers/orders');

mongoose.connect('mongodb://raged_node_shop_0317:'+
        process.env.MONGO_ATLAS_PW+
        '@cluster0-shard-00-00-goznt.mongodb.net:27017,cluster0-shard-00-01-goznt.mongodb.net:27017,cluster0-shard-00-02-goznt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    {
        useNewUrlParser: true
    }
);

app.use(morganLogging('dev'));
// the following line will allow this app to parse simple type, denote by extended: false
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status(404);
    next(error);
});


app.use((error, req, res, next)=>{
   res.status(error.status || 500);
   res.json({
       error:{message: error.message}
   });
});

module.exports = app;