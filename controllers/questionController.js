const QuestionModel = require("../models/questionSchema");

let addQuestion = (question, callback)=>{
    let newQuestion = {
        questionContent: question
    }
    try {
        QuestionModel.create(newQuestion, (err, doc)=>{
            callback(err, doc);
        });
    } catch (ex) {
        console.log("Exception: "+ex);
    }
};

let findQuestionById = (id, callback)=>{
    try {
        QuestionModel.findOne({ _id: id }, (err, doc)=>{
            callback(err, doc);
        });
    } catch (ex) {
        console.log("Exception: "+ex)
    }
};

let findAll = (callback) => {
    try {
        QuestionModel.find({}, (err, docs)=>{
            callback(err, docs);
        });
    } catch (ex) {
        console.log("Exception: "+ex)
    }
}

module.exports = {
    addQuestion,
    findQuestionById,
    findAll
}