const express = require('express');
const web = require('../URL_id');
const router = express.Router();
var Question = require('../models/question');

var questions = [
    {
        id: "1",
        text: "hola que tal",
        options: ["be", "mal"],
        group: "a"
    },
    {
        id: "2",
        text: "patata",
        options: ["si", "no"],
        group: "b"
    }
]

router.get('/:id', async (req, res, next) => {
    //return await Question.findById(req.params.id).lean().exec();
    console.log("ID: ", req.params.id);
    console.log("Selected: ", questions[req.params.id - 1]);
    var webpage = await web.generateWebpage(questions[req.params.id - 1]);
    res.send(webpage);
});

// router.post('/', (req, res, next) => {
//     res.status(200).json({
//         message: "post to questions"
//     });
// });



//TODO
// get question by id

module.exports = router;
