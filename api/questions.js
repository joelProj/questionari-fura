const express = require('express');
const router = express.Router();
var Question = require('../models/question');

router.get('/:id', async (req, res, next) => {
    return await Question.findById(req.params.id).lean().exec();
});

// router.post('/', (req, res, next) => {
//     res.status(200).json({
//         message: "post to questions"
//     });
// });



//TODO
// get question by id

module.exports = router;