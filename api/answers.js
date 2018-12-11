const express = require('express');
const router = express.Router();
var Question = require('../models/question');
var Answer = require('../models/answer');

router.get('/list', async (req, res, next) => {
    var answers;
	if(req.query.filters){
		let filters = JSON.parse(req.query.filters);
		let validID;
		if(filters.id_fura){
			validID = await Question.findOne({id_fura: filters.id_fura}).select('_id').lean().exec();

			if(validID)filters.quest = validID._id;
			delete filters.id_fura;
		}
	
		answers = await Answer.find(filters).lean().exec();
	}
	else answers = await Answer.find({}).lean().exec();

	res.send(answers);
});

router.post('/', async (req, res, next) => {
    const quest = await Question.findOne({id_fura: req.body.id}).select('_id').lean().exec();
    if(!req.body.group || req.body.group === "undefined") req.body.group = "-";

    const answer = {
        uuid: req.body.uuid,
        userCode: req.body.userCode || "-",
        quest: quest._id,
        group: req.body.group || "-",
        value: req.body.value
    };
    await Answer.create(answer);
    res.send({});
});

module.exports = router;

// async function listAnswers(req, res, next){
// 	const perPage = parseInt(req.query._perPage);
// 	const start = (parseInt(req.query._page) - 1) * perPage;
// 	const sortBy = (req.query._sortDir == 'ASC' ? '' : '-') + req.query._sortField;	


// 	var answers;
// 	if(req.query._filters){
// 		let filters = JSON.parse(req.query._filters || '{}');
// 		let validID;
// 		if(filters.id_fura){
// 			validID = await Question.findOne({id_fura: filters.id_fura}).select('_id').lean().exec();

// 			if(validID)filters.quest = validID._id;
// 			delete filters.id_fura
// 		}

// 		const count = await Answer.count(filters).exec();
// 		res.set("X-Total-Count", count);
	
// 		answers = await Answer.find(filters).sort(sortBy).skip(start).limit(perPage).lean().exec();
// 	}
// 	else{
// 		const count = await Answer.count({}).exec();
// 		res.set("X-Total-Count", count);
	
// 		answers = await Answer.find({}).sort(sortBy).skip(start).limit(perPage).lean().exec();
// 	}

// 	res.send(answers);
// }