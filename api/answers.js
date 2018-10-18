const express = require('express');
const router = express.Router();
var Question = require('../models/question');

var Answer = require('../models/answer');

// router.get('/', async (req, res, next) => {
//     console.log(req);
//     res.status(200).json({
//         message: "get to answers"
//     });
// });

router.post('/', async (req, res, next) => {
    //parse del id de pregunta dins del body per extreure el grup

    //get del grup a partir del id de pregunta
    //req.body.group = await Question.findById(req.body.id).select('group').lean().exec();
    //await Answer.create(req.body);
    console.log("BODY: ",req.body);
    res.status(200).json({
        message: "get to answers"
    });
});

//TODO
//post answer to question

module.exports = router;
