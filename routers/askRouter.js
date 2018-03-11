const express = require('express');
const Router = express.Router();

const questionController = require('../controllers/questionController');

Router.get('/', (req, res)=>{
    res.render('ask',{
        askRouter: 'active',
        homeRouter: '',
    });
});

Router.post('/', (req, res)=>{
    try {
        questionController.addQuestion(req.body.question, function(err, question){
            if(err) console.log(err)
            else res.redirect('/question/'+question._id);
            console.log(question);
        });
    } catch (ex) {
        console.log(ex);
    }
});

module.exports = Router;