const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Categories = ['Sport','Computers & IT','Gaming','Sports','Celebrities','Culture','Esport']
let Quiz = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        questions: [new Schema(
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
                    enum: Categories,
                },
                difficulty: {
                    type: String,
                    enum: ['Easy','Medium','Hard','200IQ',]
                }
            }
        )],
        category: {
            type: String,
            enum: Categories,
            required: true
        },
        difficulty: {
            type: String,
            enum: ['Easy','Medium','Hard','200IQ',]
        }
    }
)

module.exports = mongoose.model("Quiz", Quiz);
