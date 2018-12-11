const express = require('express');
const form = require('../user_form');
const router = express.Router();

router.get('/', async (req, res, next) => {

    var questionLanguage = req.query.lang;

    var webpage = await form.generateForm(questionLanguage);
    res.send(webpage);
});

module.exports = router;
