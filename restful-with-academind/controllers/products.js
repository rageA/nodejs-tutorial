const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message:'handling GET request to / products'
    });
});

router.post('/', (req, res, next) =>{
    res.status(201).json({
        message:'handling POST request to / products'
    });
});

// note the semicolon this denote its a parameter
router.get('/:productID', (req, res, next) =>{
    const id = req.params.productID;
    if(id === 'special'){
        res.status(200).json({
            message:'you discovered the special ID', ID:id
        });
    }else{
        res.status(200).json({
            message:'you aint getting an ID'
        });

    }

});



module.exports = router;