const express = require('express');
const form = require('../user_form')
const web = require('../URL_id');
const router = express.Router();
var Question = require('../models/question');

router.get('/:id', async (req, res, next) => {
    var quest = await Question.findOne({id_fura: req.params.id}).lean().exec();
    if(!quest) return res.status(404).send("Question not found");

    quest.group = req.query.group;
    var questionLanguage = req.query.lang;
    
    quest.text = JSON.parse(quest.text);
    
    var textLanguages = quest.text.map((text)=>{return text.lang;});

    var langIndex = textLanguages.indexOf(questionLanguage);
    if(langIndex == -1){
        langIndex = textLanguages.indexOf(quest.default);
        questionLanguage = quest.default;
    }

    quest.text = quest.text[langIndex].text;
    
    quest.answers = JSON.parse(quest.answers);
    quest.answers = quest.answers.reduce((prev,curr)=>{
        if(curr.lang == questionLanguage) return curr.values.map((val)=>{ return val.value; });
        return prev;
    }, []);
    
    quest.language = questionLanguage;

    // var webpage = await form.generateForm();
    var webpage = await web.generateWebpage(quest);
    res.send(webpage);
});

module.exports = router;
