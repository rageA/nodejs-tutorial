const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../../models/Idea');
const Idea = mongoose.model('ideas');

router.get('/add', (req, res) => {
    res.render('ideas/add');
});

router.get('', (req, res) =>{

    res.render()


});

router.post('/', (req, res) => {
    let errors = [];

    if (!req.body.title) {
        errors.push({ text: 'Please add a title' });
    }

    if (!req.body.details) {
        errors.push({ text: 'Please add some details' });
    }

    if (errors.length > 0) {
        res.render('ideas/add', {
            errors: errors,
            title: req.body.title,
            details: req.body.details
        });
    } else {
        const newUser = {
            title: req.body.title,
            details: req.body.details
        }

        console.log(newUser.title + " " + newUser.details)

        new Idea(newUser)
            .save()
            .then(idea => {
                res.redirect('/ideas');
            });
    }
});

module.exports = router;