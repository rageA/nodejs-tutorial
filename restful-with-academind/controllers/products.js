const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../api/models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling GET request to / products'
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));

    res.status(201).json({
        message: 'handling POST request to / products'
    });
});

// note the semicolon this denote its a parameter
router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id === 'special') {
        res.status(200).json({
            message: 'you discovered the special ID', ID: id
        });
    } else {
        res.status(200).json({
            message: 'you aint getting an ID'
        });

    }

});



module.exports = router;