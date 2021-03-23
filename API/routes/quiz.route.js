const express = require("express")
const quizRoute = express.Router()
const Quiz = require('../models/quiz.model')

quizRoute.route('/getall').get(function(req, res){
    Quiz.find(function(err, quizzes){
        if (err){
            console.log(err)
            res.json(err)
        }
        else {
            res.json(quizzes)
        }
    })
})

quizRoute.route('/getbycategory/:category').get(function(req, rex){
    let req_category = req.params.category
    Quiz.find({category: req_category}, function(err, quizzes){
        if (err){
            console.log(err)
            res.json(err)
        }
        else{
            res.json(quizzes)
        }
    })
})

module.exports = quizRoute;