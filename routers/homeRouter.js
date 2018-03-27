const express = require('express');
const Router = express.Router();

const questionController = require('../controllers/questionController');

Router.get('/', (req, res)=>{
    try {
        questionController.findAll((err, questionList)=>{
            if(err) console.log(err)
            else {
                if(questionList.length == 0) {
                    res.render('home', {
                        question: null,
                        askRouter: '',
                        homeRouter: 'active'
                    });
                } else {
                    let randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
                    res.render('home', {
                        question: randomQuestion,
                        askRouter: '',
                        homeRouter: 'active'
                    });
                }
            }
        });
    } catch (ex) {
        console.log(ex);
    }
});

module.exports = Router;