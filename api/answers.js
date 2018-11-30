const express = require('express');
const router = express.Router();
var Question = require('../models/question');
var Answer = require('../models/answer');

router.post('/', async (req, res, next) => {
    const quest = await Question.findOne({id_fura: req.body.id}).select('_id').lean().exec();
    if(!req.body.group || req.body.group === "undefined") req.body.group = "";

    const answer = {
        uuid: req.body.uuid,
        userCode: req.body.userCode || "",
        quest: quest._id,
        group: req.body.group || "",
        value: req.body.value
    };
    await Answer.create(answer);
    res.send({});
});

module.exports = router;
