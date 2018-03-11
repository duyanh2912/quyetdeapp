const express = require('express');
const Router = express.Router();

const questionController = require('../controllers/questionController');

Router.get('/:id',(req, res)=>{
    try {
        questionController.findQuestionById(req.params.id, (err, question)=>{
            if (err) console.log(err)
            else {
                res.render('question', {
                    askRouter: '',
                    homeRouter: '',
                    question: question,
                    totalVotes: question.yes + question.no,
                    percentYes: ((question.yes*100)/(question.yes + question.no)).toFixed(2),
                    percentNo: ((question.no*100)/(question.yes + question.no)).toFixed(2)
                });
            }
        });
    } catch (ex) {
        console.log(ex);
    }
});

module.exports = Router;