const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Quiz= new Schema(
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
            type: String,
            required: true
        }
    }
)