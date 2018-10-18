const mongoose = require('mongoose'),
    ObjectId = Schema.ObjectId;

const Schema = mongoose.model('Answer', mongoose.Schema({

    deviceId: { type: String, required: true },
    user: { type: String, required: true },
    answer: { type: String, required: true },
    question: { type: ObjectId, ref: 'Question', required: true },
    date: { type: Date, default: Date.now }

},
{ collection: 'answers' }));

module.exports = Schema;