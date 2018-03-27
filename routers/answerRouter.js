const express = require('express');
const Router = express.Router();

const questionController = require('../controllers/questionController');

Router.get('/:id/:answer', (req, res)=>{
    try {
        questionController.updateQuestion(req.params.id, req.params.answer, (err, questionUpdated)=>{
            if(err) { console.log(err) }
            res.redirect('/question/'+questionUpdated._id);
        });
        // let questionList = [ ...fileController.readFileSync('./data.json') ];
        // if(req.params.answer == 'yes') {
        //     questionList[req.params.id-1].yes += 1;
        // } else {
        //     questionList[req.params.id-1].no += 1;
        // };
        // fileController.writeFile('./data.json', questionList, (err)=>{
        //     if(err) { console.log(err) }
        //     res.redirect('/question/'+req.params.id);
        // });
    } catch (ex) {
        console.log(ex)
    }
});

module.exports = Router;