const mongoose = require('mongoose');

const Schema = mongoose.model('Question', mongoose.Schema({

    id_fura: { type: String, required: true },
    text: { type: String, required: true },
    grup: { type: String, required: true },
    opcions: {
        type: [{ type: String, required: true }],
        default: []
    },
    answer: { type: Number, required: true },
    date: { type: Date, default: Date.now }

},
{ collection: 'questions' }));

module.exports = Schema;
    