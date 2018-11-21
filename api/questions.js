const express = require('express');
const web = require('../URL_id');
const router = express.Router();
var Question = require('../models/question');

router.get('/:id', async (req, res, next) => {
    var quest = await Question.findOne({id_fura: req.params.id}).lean().exec();
    if(!quest) return res.status(404).send("Question not found");
    quest.group = req.query.group;
    console.log('Quest: ', quest);
    var webpage = await web.generateWebpage(quest);
    res.send(webpage);
});

module.exports = router;
