const express = require('express');
const Router = express.Router();

const questionController = require('../controllers/questionController');

Router.get('/', (req, res)=>{
    try {
        questionController.findAll((err, docs)=>{

        });

        res.render('home', {
            question: questionList[id],
            askRouter: '',
            homeRouter: 'active'
        });
    } catch (ex) {
        console.log(ex);
    }
});

module.exports = Router;