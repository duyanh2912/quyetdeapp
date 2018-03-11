const express = require('express');
const Router = express.Router();

const fileController = require('../controllers/fileController');

Router.get('/:id/:answer', (req, res)=>{
    try {
        let questionList = [ ...fileController.readFileSync('./data.json') ];
        if(req.params.answer == 'yes') {
            questionList[req.params.id-1].yes += 1;
        } else {
            questionList[req.params.id-1].no += 1;
        };
        fileController.writeFile('./data.json', questionList, (err)=>{
            if(err) { console.log(err) }
            res.redirect('/question/'+req.params.id);
        });
    } catch (ex) {
        console.log(ex)
    }
});

module.exports = Router;