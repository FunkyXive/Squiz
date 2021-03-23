const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Question= new Schema(
    {
        question: {
            type: String,
            required: true,
        },
        answers: {
            type: [String],
            required: true,
        },
        correctAnswer: {
            type: Number,
            required: true
        },
        category: {
            type: [String],
        },
        difficulty: {
            type: String,
        }
    }
)

module.exports = mongoose.model("Question", Question);
