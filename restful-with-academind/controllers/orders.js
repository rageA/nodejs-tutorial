const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders retrieved'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'order created'
    });
});

// note the semicolon this denote its a parameter
router.get('/:orderID', (req, res, next) => {
    const id = req.params.orderID;
    res.status(200).json({
        message: 'here is your order details', ID: id
    });
});



module.exports = router;