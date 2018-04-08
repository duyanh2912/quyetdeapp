const QuestionModel = require("../models/questionSchema");

let addQuestion = (question, callback) => {
    let newQuestion = {
        questionContent: question
    }
    try {
        QuestionModel.create(newQuestion, (err, doc) => {
            callback(err, doc);
        });
    } catch (ex) {
        console.log("Exception: " + ex);
    }
};

let findQuestionById = (id, callback) => {
    try {
        QuestionModel.findOne({ _id: id }, (err, doc) => {
            callback(err, doc);
        });
    } catch (ex) {
        console.log("Exception: " + ex)
    }
};

let findAll = (callback) => {
    try {
        QuestionModel.find({}, (err, docs) => {
            callback(err, docs);
        });
    } catch (ex) {
        console.log("Exception: " + ex)
    }
}

let findRandom = (callback) => {
    try {
        QuestionModel.count().exec((err, length) => {
            if (err) callback(err)
            else {
                QuestionModel.findOne()
                    .skip(Math.floor(Math.random() * length))
                    .exec((errRandom, doc) => {
                        callback(errRandom, doc);
                    });
            }
        });
    } catch (ex) {
        console.log("Exception: " + ex)
    }
}

let updateQuestion = (id, answer, callback) => {
    let updateQuestion = async (id, answer, callback) => {
        try {
            let doc = await QuestionModel.findById(id)
            if (answer == 'yes') {
                doc.yes += 1;
            } else {
                doc.no += 1;
            }
            doc = await doc.save()
            callback(null, doc)
        } catch (err) {
            callback(err, null)
        }
    }
}

module.exports = {
    addQuestion,
    findQuestionById,
    findAll,
    findRandom,
    updateQuestion
}