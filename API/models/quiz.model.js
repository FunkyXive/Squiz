const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Quiz = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        questions: {
            type: [Object],
            required: true
        },
        category: {
            type: [String],
            enum: ['Sport','Computers & IT','Gaming','Sports','Celebrities','Culture','Esport'],
            required: true
        },
        difficulty: {
            type: String,
            enum: ['Easy','Medium','Hard','200IQ',]
        }
    }
)

module.exports = mongoose.model("Quiz", Quiz);
